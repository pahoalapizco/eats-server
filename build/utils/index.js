"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _cloudinary = _interopRequireDefault(require("cloudinary"));

var _config = require("../config/");

var storeUpload = function storeUpload(stream) {
  _cloudinary["default"].config({
    cloud_name: _config.CLOUD_NAME,
    api_key: _config.API_KEY,
    api_secret: _config.API_SECRET
  });

  return new Promise(function (resolve, reject) {
    var buffer = _cloudinary["default"].v2.uploader.upload_stream(function (err, result) {
      if (err) {
        reject(err);
      }

      resolve(result);
    });

    stream.pipe(buffer);
  });
};

module.exports = {
  storeUpload: storeUpload
};
//# sourceMappingURL=index.js.map