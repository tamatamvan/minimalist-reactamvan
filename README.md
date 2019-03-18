# Minimalist Reactamvan [OUTDATED]

It's already outdated, it's still using babel ver.6, gonna update it again with latest version of babel.

This is a simple and minimalist boilerplate for react application from scratch using. It's using React 16 + Webpack 4 + Babel 6.

This repo is created for educational purposes, which you can try ro make your own boilerplate following the steps in the commit history.

## Dependencies 

```json
"devDependencies": {
  "babel-core": "^6.26.0",
  "babel-loader": "^7.1.3",
  "babel-preset-env": "^1.6.1",
  "babel-preset-react": "^6.24.1",
  "babel-preset-stage-2": "^6.24.1",
  "webpack": "^4.0.1",
  "webpack-cli": "^2.0.10",
  "webpack-dev-server": "^3.1.0"
},
"dependencies": {
  "react": "^16.2.0",
  "react-dom": "^16.2.0"
}
```

## Files and Directories Structures

```bash
.
├── README.md
├── dist
│   └── app.bundle.js #! this file generated by webpack
├── index.html
├── package.json
├── src
│   ├── components
│   │   └── Hello.jsx
│   └── main.js
├── webpack.config.js
└── yarn.lock
```

## NPM Scripts

```bash
npm start #! serving app with webpack-dev-server
npm run build #! generating file app.bundle.js
```

Presented to you by: Septian A Tama - tamatamvan <septian.a.tama@gmail.com>
