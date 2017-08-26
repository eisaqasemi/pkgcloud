exports.Client = require('./client').Client;

exports.createClient = function (options) {
  return new exports.Client(options);
}