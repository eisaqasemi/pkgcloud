var dbox  = require("dropbox");

var Client = exports.Client = function (options) {
  var self = this;
  

  // Create a new client instance
  self.client            = new Dropbox({ accessToken: options.access_token });

  
  self.readFile          = self.client.get;
  self.createReadStream  = self.client.createReadStream;
  self.writeFile         = self.client.put;
  self.readdir           = self.client.readdir;
  return self;
};

//
// Imitate `fs.stat` method
//
Client.prototype.stat = function (path, callback) {
  var self = this;
  self.client.metadata(path, function(status, result){
    if (status === 404) {
      return callback({ code: "ENOENT" })
    }
    result.isDirectory = function () {
      return result.is_dir;
    };
    result.isFile = function () {
      return !result.is_dir;
    };
    callback(null, result)
  });
};