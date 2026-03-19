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
];

