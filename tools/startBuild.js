require('@babel/register')({
  presets: ['@babel/env']
})

process.env.NODE_ENV = 'production'; // this assures React is built in prod mode and that the Babel dev config doesn't apply.

// Import the rest of our application.
module.exports = require('./build.js')