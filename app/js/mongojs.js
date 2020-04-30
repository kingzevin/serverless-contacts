// Generated by CoffeeScript 1.12.7
(function() {
  var Settings, db, mongojs;

  Settings = require("settings-sharelatex");

  mongojs = require("mongojs");

  db = mongojs(Settings.mongo.url, ["contacts"]);

  module.exports = {
    db: db,
    ObjectId: mongojs.ObjectId
  };

}).call(this);

//# sourceMappingURL=mongojs.js.map