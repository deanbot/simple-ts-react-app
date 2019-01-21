require('@babel/register')({
  presets: ['@babel/env']
})

process.env.NODE_ENV = 'development';

// Import the rest of our application.
module.exports = require('./srcServer.js')