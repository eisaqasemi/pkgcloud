exports.Client = require('./client').Client;
base_storage  = require('../core/storage');
util = require("util")

exports.createClient = function (options) {
  return new exports.Client(options);
}

var Container = exports.Container = function Container(client, details) {
  base_storage.Container.call(this, client, details);
};
util.inherits(base_storage, baseStorage.Container);

var File = exports.File = function File(client, details) {
  base_storage.File.call(this, client, details);
};
util.inherits(base_storage, base.File);