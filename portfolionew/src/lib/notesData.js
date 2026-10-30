export const notesData = [
  {
    slug: "an-ai-that-cannot-invent-facts",
    title: "An AI resume coach that is not allowed to invent facts",
    date: "October 2026",
    readingTime: "5 min read",
    tags: ["AI", "Resume Studio", "Guardrails", "NestJS"],
    summary:
      "Rewriting a bullet is easy for a language model. Making sure it never adds a number or a company the candidate did not write is the real work.",
    featured: true,
    content: `
# An AI resume coach that is not allowed to invent facts

Resume Studio has an AI coach that improves bullets, spelling and grammar. The first version of the idea was simple: send the text to a model and show what comes back. The problem is that a model trying to be helpful will happily write "reduced latency by 40%" when the candidate never said 40%. On a resume that is not a style issue, it is a false claim with someone's name on it.

## The rule

The coach may change how something is said. It may never change what is claimed. I turned that into code instead of a prompt instruction, because a prompt is a request and code is a guarantee.

## The fact guard

Every suggestion comes back through a check that compares it to the original text:

- any number in the suggestion must already exist in the original
- any capitalised word that looks like a proper noun, such as a company, tool or place, must already exist in the original
- anything that fails is dropped, and the candidate never sees it

The model is allowed to be wrong, because the wrong answers never reach the screen.

## Two mistakes in my own checks

The first version of the proofreading check compared the ratio of changed words. That rejected perfectly good fixes, because fixing a typo in a four-word bullet changes a quarter of the words. I switched to character-level edit distance with a ceiling, so a small fix is a small change however short the sentence is.

The second was headlines. Title Case headlines looked like proper nouns to the guard and were rejected. For headlines I now check numbers only, and filter out praise words such as "passionate" and "results-driven" separately.

## What I would tell anyone building this

Do not ask the model to be honest. Assume it will not be, and build the layer that makes dishonesty impossible to display.
`,
  },
  {
    slug: "the-ai-suggests-hr-decides",
    title: "The AI interviews, the human decides",
    date: "October 2026",
    readingTime: "5 min read",
    tags: ["AI", "MLOS", "Product Thinking", "Safety"],
    summary:
      "Designing an AI interviewer for hiring is mostly about what it is not allowed to do.",
    featured: true,
    content: `
# The AI interviews, the human decides

In MLOS, an AI can interview a candidate online, ask follow-up questions based on what they actually said, and write a report. Building the interviewer was the easy part. The design work was deciding what it must never do.

## It never rejects anyone

The report gives a score, strengths, concerns and evidence for each scoring point. HR reads it and records the decision with a reason. A recruiter can see the report but cannot decide. The AI has no button that changes a candidate's status.

## Flags are hints

The report can flag things like very short answers or the same pause before every answer. These are shown only to HR, and they are labelled as things to look at, not as proof. A slow connection or a nervous candidate looks identical to a bad actor in that data.

## The public link knows almost nothing

The candidate does not log in, they open a private link. That link only exposes their name, the job, the language and the time. The scoring rubric, the transcript and the flags never leave the server. The link opens ten minutes before the slot, expires a day after it, and stops working once the interview is finished.

## When the AI is down

If the model cannot be reached, the interview carries on with the next question, and the report says plainly that the AI could not write it this time and that HR should read the transcript. Failing quietly with a made-up score would be worse than failing loudly.

## Consent and retention

The candidate has to tick a consent box that says where their voice goes and what is stored. Transcripts are deleted after ninety days and the audio is never saved.

The pattern I keep coming back to: let the AI do the tiring work, keep the decision with a person, and make every failure visible.
`,
  },
  {
    slug: "deploying-the-same-product-four-times",
    title: "Four phases, four databases: deploying the same product four times",
    date: "October 2026",
    readingTime: "6 min read",
    tags: ["DevOps", "GitHub Actions", "MLOS", "Deployment"],
    summary:
      "What a repeatable deploy actually needs, and the small things that broke it each time.",
    featured: true,
    content: `
# Four phases, four databases: deploying the same product four times

MLOS runs as four separate environments, one per phase. Each has its own repository, database, server account and subdomain. By the fourth deploy I had a recipe, and a list of the mistakes that the recipe now prevents.

## The recipe

- one server account per environment, with three apps: the frontend, the core service and the finance service
- environment files copied by hand, never by the pipeline, so secrets never pass through CI
- a GitHub Actions workflow that builds in CI, uploads over SSH, installs production dependencies and restarts only the processes that belong to that deploy path
- a health check at the end, and a switch variable so nothing deploys until everything else is in place

## Things that bit me

- A secret that started with a slash was silently rewritten by my Windows shell, which treated it as a path. The deploy path arrived as a Windows path and the first run failed. Setting secrets through standard input fixed it.
- A brand new subdomain serves a self-signed certificate for a while before the real one is issued. The site works, the checks fail. I waited instead of turning verification off.
- The finance service lives under its own prefix, not the one the core service uses. A seed script pointed at the wrong prefix returned a clean 404 that looked like a missing feature.
- A frontend config written in TypeScript cannot be loaded on a server that only has production dependencies, so it has to be plain JavaScript.
- SSH key files on Windows need their permissions tightened before the client will use them.

## The point

None of these are hard. They are all things you only learn by doing the deploy, which is why writing the recipe down after every environment is worth more than any single clever script.
`,
  },
  {
    slug: "two-mongo-bugs-a-second-user-found",
    title: "Two Mongo bugs that only a second user could find",
    date: "October 2026",
    readingTime: "4 min read",
    tags: ["MongoDB", "Debugging", "NestJS", "Testing"],
    summary:
      "A unique index that treated null as a value, and ids stored as strings that made an aggregation match nothing.",
    featured: false,
    content: `
# Two Mongo bugs that only a second user could find

Both of these passed every test I had written and worked perfectly for the first user. They only showed up when a second one arrived.

## The index that treated null as a value

Resume Studio supports signing in with Google or with an email code. The user document has a Google id field, and I had given it a unique sparse index. Sparse means documents without the field are skipped, but a document where the field is present and set to null is not skipped. The first email user stored null and was fine. The second one also stored null and hit a duplicate key error.

The fix was a partial unique index that only applies when the field is a string. Null no longer counts, so any number of email users can exist next to Google users.

## The aggregation that matched nothing

MLOS pulls resumes from Resume Studio through a feed built with an aggregation that joins resumes to their owners. In a scripted end-to-end run the feed returned an empty list even though both collections had data. The cause was that one side stored the owner id as a string and the other as an object id, and a join between the two never matches.

I declared the owner id fields as strings in the schemas, and made the join accept either form by comparing against both the string and its converted value.

## What stuck with me

- write one test with two users, not just one
- when a query returns nothing and the data is clearly there, compare the types before the logic
`,
  },
  {
    slug: "designing-for-clarity",
    title: "Designing for clarity, not decoration",
    date: "March 2026",
    readingTime: "4 min read",
    tags: ["UI", "Product Thinking", "Frontend"],
    summary:
      "A short note on why cleaner interfaces usually come from reducing friction, not adding effects.",
    featured: true,
    content: `
# Designing for clarity, not decoration

The most useful interface decisions are usually the ones that remove hesitation. Good visual design is not just about style. It helps a user understand where to focus, what matters, and what happens next.

## What I keep looking for

- Can this screen be understood quickly?
- Is the hierarchy doing enough work before motion or color is added?
- Does the layout support confidence or create hesitation?

## My bias in product work

I like interfaces that feel intentional. That usually means:

- fewer competing accents
- stronger spacing rhythm
- less UI chrome
- transitions that support flow instead of demanding attention

The result is not minimalism for its own sake. The goal is to make software feel easier to use and easier to trust.
`,
  },
  {
    slug: "building-products-in-layers",
    title: "Why I like building products in layers",
    date: "March 2026",
    readingTime: "5 min read",
    tags: ["Architecture", "Full Stack", "Delivery"],
    summary:
      "A practical way I think about shipping products without letting the codebase become harder to change every week.",
    featured: true,
    content: `
# Why I like building products in layers

When I work on a product, I try to keep each layer understandable:

1. what the user needs
2. what the interface needs to express
3. what the data model needs to support
4. what the system needs to stay maintainable

## Why this matters

A lot of frontend pain comes from decisions that were made too late in the stack. A lot of backend pain comes from product assumptions that were never made explicit.

Layered thinking helps me:

- keep frontend components cleaner
- reduce accidental complexity
- move faster on future features
- make debugging less chaotic

It also makes collaboration easier, because decisions become easier to explain and revisit.
`,
  },
  {
    slug: "shipping-polish-without-overengineering",
    title: "Shipping polish without overengineering",
    date: "February 2026",
    readingTime: "3 min read",
    tags: ["Craft", "Shipping", "Frontend"],
    summary:
      "The sweet spot I chase is software that feels polished in the hand without becoming heavy in the codebase.",
    featured: true,
    content: `
# Shipping polish without overengineering

I care a lot about the feel of software. But I do not think polish should come at the cost of maintainability.

## The balance I try to keep

- components should stay readable
- motion should stay purposeful
- styling should stay systematic
- small details should still add up to a premium feel

## What usually helps most

In my experience, polish comes more from consistency than from complexity.

That means:

- predictable spacing
- confident typography
- focused color decisions
- small interaction details that repeat well

When those basics are strong, the product starts to feel intentional without needing a lot of noise.
`,
  },
  {
    slug: "you-cant-type-into-a-react-input",
    title: "You can't type into a React input (and what I do instead)",
    date: "August 2026",
    readingTime: "4 min read",
    tags: ["Browser Extensions", "React", "DOM"],
    summary:
      "Why element.value = text silently fails on React-controlled inputs, and the deprecated API that actually fixes it.",
    featured: true,
    content: `
# You can't type into a React input (and what I do instead)

I built a text expander for Chrome. It worked on a plain HTML page. On Gmail, the replacement text flashed on screen for one frame and vanished.

## Why the obvious fix doesn't work

\`element.value = text\` changes the DOM, but React doesn't read the DOM to know what an input contains — it keeps its own copy in component state, and treats the DOM as disposable and rebuildable from that state at any time. Assigning \`.value\` directly updates the pixels, but React's state never hears about it, so the next re-render (which fires on almost anything) redraws the input from state and erases the change.

## The fix is a deprecated API

\`\`\`js
document.execCommand('insertText', false, text);
\`\`\`

This doesn't touch \`.value\` at all. It goes through the browser's native editing pipeline — the same path a real keystroke takes — so React receives an event indistinguishable from a human typing, and updates its own state correctly. As a bonus, the browser's native undo stack picks it up too, so Ctrl+Z still works.

I still verify the write landed and fall back to the native property setter plus a manually dispatched \`input\` event if \`execCommand\` gets refused — some hosts do refuse it.

## The lesson

"Deprecated" means don't build new things assuming this stays around forever. It doesn't mean broken. Sometimes the deprecated API is a low-level escape hatch most people shouldn't reach for — and the one time you need to simulate a real user typing into someone else's framework, it's the only tool built for exactly that.
`,
  },
  {
    slug: "my-keyboard-hook-typed-garbage",
    title: 'My text expander typed "wwwwwwas rrrrrong" — the bug was in my own keyboard hook',
    date: "August 2026",
    readingTime: "6 min read",
    tags: ["Rust", "Windows", "Debugging", "Systems Programming"],
    summary:
      "A debugging story with two wrong turns, an instrumentation-over-guessing turning point, and two real root causes.",
    featured: true,
    content: `
# My text expander typed "wwwwwwas rrrrrong" — the bug was in my own keyboard hook

I rebuilt my browser text expander as a native Windows service in Rust, so it would work in every application, not just the browser. First real test, typing a snippet in Notepad, I got:

\`\`\`
;ix this and explain wwwwwas rrong ttttwo eeees.
\`\`\`

Supposed to say *"Fix this and explain what was wrong in two lines."*

## Wrong turn #1

First theory: a race condition, where the trigger's last keystroke reached the app before my backspaces did. Real bug, worth fixing — I moved matching inside the keyboard hook so it could swallow the completing keystroke before Windows delivered it. The corruption stayed.

## Wrong turn #2 — made it worse

Second theory: \`SendInput\` was firing too fast, so I batched it into smaller groups with pauses between. Output got *worse*: 45 dots after \`"Fix "\`, matching exactly the remaining length of the string with the last character repeating. \`SendInput\` is documented to insert its events atomically — but only as one call. Splitting it let my own held keys splice into the middle of the injected text. Reverting to one call fixed most of it.

## The bug that needed evidence, not guesses

One snippet kept silently never firing — no corruption, no output, nothing. I stopped guessing and logged the exact payload my code intended to send before sending it. The payload was always correct, which ruled out half my code instantly. The actual cause: a "suppress this key" flag that only cleared on that key's own release — if the release ever got reordered during a flurry of injected events, the app would ignore every future press of that letter, forever, silently.

Separately, in the same debugging pass: the Win32 \`INPUT\` struct is a union, and I'd only zero-initialised the smaller variant, leaving garbage trailing bytes handed straight to the kernel.

## What actually solved it

Even fixed, long snippets stayed visibly slow and fragile. The real fix wasn't more careful timing — it was avoiding the timing-sensitive path: for anything longer than a dozen characters, write to the clipboard, send one Ctrl+V, restore the clipboard. One synthetic keystroke instead of a hundred, and structurally immune to the whole bug class.

## What I'd tell someone hitting this

Don't trust a theory you haven't measured. My "worse" wrong turn *felt* more correct than the fix that actually worked. What cracked it was refusing to guess a fourth time and logging what my code intended to do — turning a story I was telling myself into a fact I could check.
`,
  },
];

