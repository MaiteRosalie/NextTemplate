### Overview

This project was created with the goal of building a simple, highly optimized web template which could be used as a base for many different ideas. It's currently running here https://next-template.herokuapp.com/.

### Tech Stack

- [node.js](https://nodejs.org/en/) - Build scalable network applications.
- [npm](https://www.npmjs.com/) - Node package manager.
- [NextJs](https://nextjs.org/) - React Framework for SEO friendly and lightweight sites.
- [TypeScript](https://www.npmjs.com/) - A typed superset of JavaScript that compiles to plain JavaScript.
- [React](https://reactjs.org/) - JavaScript library for building user interfaces.
- [Emotion](https://emotion.sh/) - Write css styles with JavaScript.
- [Jest](https://jestjs.io/) - JavaScript Testing Framework.
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) - builds on top of DOM Testing Library by adding APIs for working with React components.
- [storybook](https://storybook.js.org/) - open source tool for developing UI components.

### System Requirements

Please make sure you have the following requirements:

- [Git](https://git-scm.com/) Open source version control system.
- [node.js](https://nodejs.org/en/) - Build scalable network applications.
- [npm](https://www.npmjs.com/) - Node package manager.
- MacOS, Window or Linux.

### How to start

- Make sure you have Git, Nodejs and npm installed.
- Clone the project.

install dependencies

```sh
$ npm i
```

Run the project locally

```sh
$ npm run dev
```

### Testing

Test files can be found within the tests folder and have the same name as the tested component only adding “.test“ at the end, they are written using React Testing Library and jest which are installed in the project and have been configured to run the following commands:

Run all the tests.

```sh
$ npm run test
```

Run all tests and watch for changes

```sh
$ npm run test:watch
```

### Project Structure

- components/
- constants/
- tests/
- stories/
- pages/
  - index
  - about
  - apply
  - contact
  - how
  - app
  - document
- theme/
  - breakpoints
  - buttons
  - colors
  - global styles
  - space
  - typography
- public/
  - app icons
  - fonts
  - images
- screens/
  - Home
  - About
  - Apply
  - contact
  - How
- utils/
- config files.
