#!/usr/bin/env node

const ftch = require("./lib/fetcher.js")
const promiseLimit = require("promise-limit")
const yargs = require('yargs')
const range = require('./lib/utils.js').range

var limit = promiseLimit(100)
var config = {}

console.log(`Scanning on subnet ${yargs.argv.subnet}`)

Promise.all(range(1,255).map((address) => {
  return limit(() => {
    var options = {
      host:`${yargs.argv.subnet}.${address}`,
      port:80,
      path:'/',
      agent:null
    }
    return ftch._fetchHTTP(config, options);
  })
})).then(results => {
  results.forEach((result) => {
    if(result.response) {
      console.log(`${result.options.host}:${result.response.statusCode}`)
    }
  })
});
