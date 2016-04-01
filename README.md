# react-coding-exercise
## Setup

To get started, you will need to globally install [rwb](https://github.com/petehunt/rwb). This is a simple global tool to run and serve this application.

`npm install -g git+https://github.com/petehunt/rwb`

Run an npm install.

`npm install`


The application is already setup with some basic files and can be run simply with the start script.

 `npm run start`.

 This will serve the application at `localhost:3000`.

## Version Control
### GitFlow and GithubFlow
We use [GitFlow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow/) on a daily basis - this allows us to build quality control into our development, QA and deployment process.

We are asking that you use a modified [Github Flow](https://guides.github.com/introduction/flow/) - sometimes referred to as a [feature branch workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow) - methodology instead of GitFlow. Conceptually, GitFlow and Github flow are similar.

Please fork our repository and use a feature branch workflow while developing your functionality. When you are ready to submit your work make a [pull request against our repository](https://help.github.com/articles/using-pull-requests/).

## JavaScript
### Standards
We try to follow the [Airbnb style guide](https://github.com/airbnb/javascript as much as possible. We don't expect you to strictly adhere to these standards, but they may help provide insight into how our JavaScript is generally structured.

### Unit Testing
Please feel free to create unit tests - we use [Mocha](https://github.com/mochajs/mocha).

## Sass
### On Node Sass
We rely on Node Sass to compile our stylesheets because of its speed. However, because there is not currently feature parity between Ruby Sass and LibSass not all documented features are supported. Hugo Giraudel's [Sass Compatibility](http://sass-compatibility.github.io/) project is the best way to identify these differences. @acolson spends way too much time following this.

### Sass Standards
We loosely follow Hugo Giraudel's [Sass Guidelines](http://sass-guidelin.es/) - particularly his thoughts on code clarity and avoiding [nesting selectors](http://sass-guidelin.es/#selector-nesting) unless absolutely necessary.

### Class Naming Conventions
Our custom styles are written using [OOCSS](http://appendto.com/2014/04/oocss/) principles - specifically   [BEM](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/) methodology. This promotes a separation of content from context leading to highly reusable styles and hopefully prevents us from using ```!important``` which is the work of the devil.

**BEM naming conventions**
``` sass
.block {}
.block__element {}
.block__element--modifier {}
.block--modifier {}

.media {}
.media__img {}
.media__img--rev {}
.media__body {}
```

**BEM naming conventions used in markup**
``` jade
div.media
  img.media__img--rev(src='logo.png' alt='Foo Corp logo')
    div.media__body
      h3.alpha Welcome to Foo Corp
      p.lede Foo Corp is the best, seriously!
