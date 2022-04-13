# Multi-Page SPA with React Router

React Router practice project from [React - The Complete Guide (incl Hooks, React Router, Redux)](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)

## Key Concepts

- Not Found route must come last so that it doesn't interfere with any of the other routes
  ```js
  <Route path="*">
    <NotFound />
  </Route>
  ```
- Programmatic navigation
  - not a link but some action triggered by code when some other action (sending entered data to server) finishes
- `useHistory` hook allows to change the history of the pages visited
  - can navigate with `push` or `replace`
    - push allows you to go back with the back button
    - replace is like a redirect that replaces the current page
  - can also use to add query parameters to the loaded page
  - can be send a string or an object with `pathname`, `search` keys
- `Prompt` is a special component provided by react-router that watches for navigation away from page and will show a warning if certain conditions are met
  - takes a `when` prop and a `message` prop
- `useLocation` gives information about the currently loaded url
- `URLSearchParams` is a default JS function that can be used to get the query params from the browser
- `useRouteMatch` gives the path as it was defined in the react Route component
  - ```/quotes/:quoteId```

## Lazy Loading

- Load certain parts of code only when needed
- easy to implement when using Routing
  - only download code when route is visited
```js
// without lazy loading
import NewQuote from './pages/NewQuote'

// with lazy
const NewQuote = React.lazy(() => import('./pages/NewQuote'))
```
must supply a fallback with `<Suspense fallback={<p>Loading...</p>} />`

