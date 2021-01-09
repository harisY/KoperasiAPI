'use strict';

export default function (app) {
  var jsonku = require('./controller');
  app.route('/').get(jsonku.index);
};
