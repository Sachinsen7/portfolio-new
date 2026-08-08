export const notesData = [
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

