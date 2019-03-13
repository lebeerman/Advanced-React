![Advanced React & GraphQL](https://advancedreact.com/images/ARG/arg-facebook-share.png)

# Advanced React & GraphQL

These are the starter files and stepped solutions for the [Advanced React & GraphQL](https://AdvancedReact.com) course by [Wes Bos](https://WesBos.com/).

## Getting Help

The best place to get help is in the #advanced-react slack room - there is a link in your course dashboard.

## FAQ

**Q:** Which Extensions for VS Code is Wes using?
**A:** All my extensions are listed on [my dotfiles repo](https://github.com/wesbos/dotfiles), but specifically this course uses [ESLint](https://github.com/Microsoft/vscode-eslint) and [Prettier](https://github.com/prettier/prettier-vscode).

---------

## NOTES

### TODO:

[ ] ZSH profiles/color tabs - learn to make that config easy
[ ] VS Code / admin / user / workspace env config... it is effed up. Considering removing/wiping.

---------

1/2

#### Interface Layer (frontend)

- React:
  - next.js, styled componenets react-Apollo
- Apollo: replaces the need to use redux/ client-side data management
  - caches data
  - Mutations, Queries, Caching, Local State/Storage
  - Error + Loading UI States

#### Data Layer (backend)

- GraphQL (on top/in front, data massaging)
  - (espress/node)
  - Query + Mutation Receivers
  - Server Side Logic
  - Email/ CCs/ JWT Auth***
  - Permission Checking
- Prima ()
  - CRUD APIsfor MySQL or Porstgres
  - Schema dotfiles

---------

3
Next js
  *-* webpack compiling
  *-* code splitting
  *-*

New Lifecycle method

GetInitialProps() - wait on data to resolve before shipping to the browswer


4

create a bunch of stateless function components and route them through a page component.

5

CSS in React:
 *-* link css in Meta/head - linke in vanilla files
 *-* sass / less
 *-* inline css (css in JS): write the css inline with the js logic. Prevents the styles from bleeding out to other areas of the app.

 6

 styled component org:

- in component folder or in the styles folder.
- IN GENERAL: write the styles in-line then export elsewhere when needed.
- File Org:
  componenets/
    Header/
      index.js
      styles.js
      __test__.js
    Page/...
- Themes: simply objects of styles
  - put out of file and import if applicable.
- emmet plug: emmet.includeLanguages -> javascript: javascriptreact

7

Styling and Type

- Setting font-size on the page so that everr REM is base10 - math tip.
- Used the styled component folder - looks neat, cool effects
-

8

Nprogress is neat. - load spinner!!! So great!
Prefetch is neat.
Next JS is cool.

unstyle flash:
client side - css is all there on page load
server side - css comes from server

to fix that with Next.js - add a _document.js to fetch the js

9

Fix the FLICKER!!!
flicker from server render.
client mounts components. they have styld components. styles come with mount. initial render doesnt have the styles yet.
* the next _document.js template no longer matches the code provided in the tutorial.

10

graphQL! intro

- spec to serve up data
- agnostic to the language - implimented in any lang.
- arguino, microcontroller, blah blah, its an interface to be consumed.
- RESTFUL APIs - post, put, delete, tokens, blah blah... lots of config and usage to learn.
- GraphQL: single endpoint - REQ query an item{ props } -> RES Receive Data
- Not a replacement for good queries. But provides a different standarm

11

PRISMA - OS tool for working with GraphQL.
- login
- init
- config env vars
  -> Fontend URL, endpoint, secret,*** must have in PROD!!!
  -> post-deploy hook: updates the prisma server on a 'deploy' in prisma.yml
  -> setup datamodel.graphql
  on a deploy the datamodel will get synced up with the prima endpoint settings.
- setup an npm run deploy alias in the package.json:
  -    `"deploy": "prisma deploy --env-file variables.env"`
  -
