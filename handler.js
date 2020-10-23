'use strict'
// environment variables specified by the user
process.env["MONGO_CONNECTION_STRING"] = `mongodb://172.17.0.1:27017/sharelatex`; // contacts.config.envs
// the user should specify the express listener
const expressListener = require('./app.js') // contacts.express.object

const owServerlessExpress = require('./owServerlessExpress.js')

exports.main = function(params){
  return owServerlessExpress(expressListener, params)
}