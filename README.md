# simple-ts-react-app

Starter project written in typescript 3, webpack 4, babel 7, react 16, react router 4, redux, sass, ~jest & enzyme~.

## Project structure

```
*root*
|
├── */src/*
│   ├── */app/* contains app components, store, routes, etc
│   │   ├── */components/*
│   │   │   ├── */pages/*
│   │   │   │   ├── *CounterPage.tsx* Routing component containing Counter component
│   │   │   │   ├── *HelloPage.tsx* Routing component containing Hello component
│   │   │   │   ├── *HomePage.tsx* Routing component for index
│   │   │   │   └── *NoMatchPage.tsx* Routing component for 404
│   │   │   └── *NavBar.tsx* navigation component with react router links
│   │   │   └── *Routes.tsx* routes component configured to map to various page components
│   │   ├── *configureStore.ts* setup for redux store
│   │   ├── *index.ts* holds redux store state interface
│   │   └── *rootReducers.ts* setup for redux reducers
│   ├── */assets/* where images and stuff are stored
│   ├── */custom-types/* contains custom types
│   │   └── *index.d.ts* only "*.png" for now (to make images import work)
│   ├── */counter/* contains 'counter' components, reducers, actions, etc
│   │   ├── */components/* store
│   │   │   ├── */Counter.tsx* counter component
│   │   │   └── */Counter.scss* counter sass styles
│   │   └── *index.d.ts* single file for all 'counter' redux logic 
│   ├── */hello/* contains 'hello' components
│   │   └── */components/* store
│   │       ├── */Hello.tsx* hello component
│   │       └── */Hello.scss* hello sass styles
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