# simple-ts-react-app

Starter project written in typescript 3, webpack 4, babel 7, react 16, react router 4, redux, sass, ~jest & enzyme~.

# Get Started

### Install and run

```
yarn
yarn start
```

### Replace Demo Functionality

* Replace/Remove counter and routerParams feature folders
* Update Router to remove any demo pages (counter, routerParams, etc).
* Update Header and MobileNavMenu to remove any links to demo pages.
* Update `src/app/rootReducer.ts` to remove counter demo reducers.
* Consider replacing blueprintjs ui framework as needed.

See Project Structure section.

# Commands

* `yarn start` - launch dev server, launch linting and testing in watch mode
* `yarn build` - build dist folder and launch the dist server

## Project structure

'Feature first' and the app is a feature - aka no generic folders for all reducers, components, etc) and root app setup files (routes, store, etc..) are stored in `src/app`.

Features store components in `components` sub folder and, generally, all redux logic in the feature's `index.ts`.

Router pages/destinations are stored in `app/components/pages`.

```
*root*
|
├── */src/*
│   ├── */app/* contains app components, store, routes, etc
│   │   ├── */components/*
│   │   │   ├── */pages/*
│   │   │   │   ├── *CounterPage.tsx* Routing component containing Counter component
│   │   │   │   ├── *RouterParamsPage.tsx* Routing component containing RouterParams component
│   │   │   │   ├── *HomePage.tsx* Routing component for index
│   │   │   │   └── *NoMatchPage.tsx* Routing component for 404
│   │   │   ├── *Header.tsx* component with nav via react router links
│   │   │   ├── *Routes.tsx* routes component configured to map to various page components
│   │   │   └── [etc..]
│   │   ├── *configureStore.ts* setup for redux store
│   │   ├── *index.ts* holds redux store state interface
│   │   └── *rootReducers.ts* setup for redux reducers
│   ├── */assets/* where images and stuff are stored
│   ├── */custom-types/* contains custom types
│   │   └── *index.d.ts* only "*.png" for now (to make images import work)
│   ├── */counter/* contains 'counter' components, reducers, actions, etc
│   │   ├── */components/* store
│   │   │   ├── */Counter.tsx* counter component using redux
│   │   │   ├── */CounterStateful.tsx* counter component using component state
│   │   │   └── */Counter.scss* counter sass styles
│   │   └── *index.d.ts* single file for all 'counter' redux logic 
│   ├── */routerParams/* contains 'routerParams' components
│   │   └── */components/* store
│   │       ├── */RouterParams.tsx* router params component
│   │       └── */RouterParams.scss* router params sass styles
│   ├── *index.tsx* javascript entry point
│   ├── *index.html* html template entry point
│   ├── *style.scss* global styles
├── */tools/* contains build tools launched via package.json scripts
├── *package.json* dependencies and scripts
├── *tslint.json* tslint config
├── *tsconfig.json* typescript config
├── *.babelrc* babel config (polyfills)
├── *webpack.config.js* webpack config, it has a dev and prod environment
└── [etc...]
```

## WIP

Testing not yet implemented 

```
├── */tests/* contains test environment (Jest + Enzyme)
│   │   ├── */__mock__/* contains setup to provide a valid path for imports
│   │   ├── */_tests__/* the actual tests
│   │   └── *setup.ts* setup for enzyme for react 16
```

### Tests

The testing environment is written in Jest and Enzyme.
The included tests are very basic and only check the proper render of base components + routes, there are no snapshot tests, I did not feel they were needed being the components really basic, at the first change they would need to be updated, imho setting the wrong approach of _"hey tests are broken, let's regenerate snapshots again"_.
While still basic, the default tests are easy to manage and expand, providing a smoother curve into testing with JavaScript and React.


## Tslint

This project uses Typescript recommended specs plus Typescript react specs so you can write error-free react and typescript code, if you use Visual Studio Code, you can install tslint from the extension tab to activate this function, other editors just google _name of the editor + tslint_ you will find how to enable it for your editor.