# Ugly CMS Partial Refactor

## TOC
1.  I have refactored some ... meaning most of the refacturing is partial across the board, but idicative of what I would do if I wanted to spend more time on it.
2.  Took me some time to fix the backend so I could run it. But all of the refactoring was done in the `frontend`.
3.  I had changed the file structure to be more readable.
4.  I would rather use my own CSS, but due to time constraints, I used the one from the `@chakra-ui/react` library. I tried to use it they way I would use my own `Styled Components` — having only necessary semanticly valid JSX, but it wasn't always possible due to the time constraint.
5.  I hate the way the API is configured and managed. But I didn't touch it, just tried to handle it differently, in a more manageble way.
6.  I also hate the way the components manage their data, they are aware of too much model implementation detail to my taste.
7.  Hence the redux refactor: it's thin and simple, and is indicative of what I would have done accross the board, but at present implemented only for **Backgrounds**. But I would do the same for the rest.
8.  React Dom Router and the way it's used — I don't like, I would have used Next.js Router — either `pages` or `app` router.
9.  Anyway the router should be connected to the store, in this example I did minimal connection. See `/store/ui/ui.listener.ts`.
10. Unfortunetaly I didn't spend enough time on the layout, only minimal touches in the **Backgrounds** realm only.
11. I did rewrite the components to be simpler and more semantic.
12. Also Reused the `BackgroundDetails` & `BackgroundCreate` to be used both in the `ExternalView` and in the `InternalView`.
13. And more stuff ... but really there's so much I would have done differently.
14. Wrote some `NotFound` & `Error` components (just to be able to see the errors).
15. I do catch **Backgrounds** related errors, but do not display anything.

> In short, I'd really love to briefly explain my thinking and my direction here in a face to face. Otherwise it's just a slightly less ugly CMS.
