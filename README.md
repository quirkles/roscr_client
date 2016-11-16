# React Redux Boilerplate

This is boilerplate code you can used to get your react + redux application development up and running. It contains everything you need to get coding with minimal setup.

## What's under the hood?

React, obviously, and redux, obviously. Seriosuly though, this set up assumes you are at least somewhat familiar with [react](https://facebook.github.io/react/) and [redux](http://redux.js.org/). If you have never seent hose before, this might be a confusing place to start. This is not intended to be a learning tool, though I suspect that for a motivated, hands-on, learner, it could work. It is intended to actually be used as the base for a working app which uses this tech stack. 

This setup also uses the [react router](https://github.com/ReactTraining/react-router), so youll want to have some familiarity with that.

The [immutable](https://facebook.github.io/immutable-js/) library is used to enfore state immutability. If you have never used this before then you may experience some initial friction, however I strongly suspect that using this library will avoid a lot of bugs where you might have accidentally modified the state otherwise.

[Webpack](https://webpack.github.io/) is used in conjunction with the [react hot loader](https://github.com/gaearon/react-hot-loader) to enable hot module replacement.

The whole thing leverages [babel](https://babeljs.io/) to enable writing code in sleek and shiny es6

We will also use [eslint](http://eslint.org/) to keep you honest.

## Installation

The usual, clone, `npm install`. No gotchas here. *knocks on wood*

## Usage

Clone the repo, install the deps, then do `npm run start` or just `npm start`. This runs the dev server (server.js) located in the root of the repo. This server doesnt do much of anything by design, it isnt intended to work in production, it isnt intended to do anythign but serve up your files, no routing, no rendering, nothing. This repo is just for your client side code.

The dev server will load the webpack config in the root and serve up your app files, thats it. It will listen on port 3000 by default and serve up the file at src/index.html.

The basic app/routing structure is such that it loads up your app's modules in a shell, dont need that? dump the shell. This can, however, be usefull if you have common elements that persist, a header, sidebar whatever.

The modules are mapped to directories in the src/components directory. Each module has an index.jsx file which can pull in more components, if you have shared components, just create a 'shared' directory. However, be sure that you really gain from this abstraction first! (more in the philosophy section).

Each module also has its own sass stylesheet, I would recommend using a shared scss file and some global classes, but you often want css that is specific to your module, so just throw that in there.

Inside the index.jsx file is where you should map your state and actions to your props.

## Building

To build your prod files just run `npm run build`. This will create a dist folder that contains your dist files. You can serve them from here by running `npm run start:prod` however I recommend you do your own thing with regards to your prod server.

## Testing

This repo is set up to enable a tdd style of development. the [enzyme](http://airbnb.io/enzyme/) test library is used for rendering and qurying. I recommend using the 'shallow' render method to ensure that you are only testing your individual components, and not its children.

## Philosophy

This section is skippable enough, but I wanted to provide some justification for some of the decisions made in the code.

### Classless Components

Javascript [does not have classical inheritance](https://davidwalsh.name/javascript-objects) even though it now has a `class` keyword. Under the hood, what is happening when you use `class` is a complicated mess.The same complicated mess that js devs have been doing for years to try to shoehorn classical inheritance into a language that doesnt have it or need it.

I dont like using `class` because I dont like using black boxes. If you feel comfortable using it, go nuts, let a hundred flowers blossom and all that, this boilerplate is not set up that way, there are several alternatives out there and YMMV.

As a resut, my componenets are not classes, they are, in fact (pure functions)[https://medium.com/@housecor/react-stateless-functional-components-nine-wins-you-might-have-overlooked-997b0d933dbc#.wv6imbw16]. This means that you give up a few things, the biggest two being lifecycle hooks, and state. I see this a win, redux is a state management tool, if you use redux, but also manage state in your components....why use redux? Lifecycle hooks is more ambiguous but I generally see them, in the wild, used as a shortcut or a hack way of doing something that could and should be handled in your render method.

What you get is, no confusing `this`, easy testing, better hot module replacement, better performance, simpler components.

### Avoiding Shared Components
In my experience, as soon as you identify something common to two different modules that could be abstracted into its own component, you immediately think of specific difference in behaviour you need to configure your shared component in order to handle mutliple cases.

The impulse to abstract is hammered into devs DRY! DRY! but the [cost of abstraction is often understated](http://sam-koblenski.blogspot.ca/2014/07/the-cost-of-abstraction.html). 

I want to stress that I am not anti-abstraction, I am not an absolutist. WHat I would say though, is try to put it off as long as possible until you are veeeeeeeeeerry certain that doing the abraction will be a win for you.
