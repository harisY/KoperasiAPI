'use strict';

module.exports = function (app) {
  var jsonku = require('./controller');
  app.route('/').get(jsonku.index);
  app.route('/api/karyawan').get(jsonku.GetKaryawan);
  app.route('/api/karyawan/:nik').get(jsonku.GetKaryawanByNIK);
  app.route('/api/karyawan').post(jsonku.AddKaryawan);
  app.route('/api/karyawan').put(jsonku.EditKaryawan);
  app.route('/api/karyawan').delete(jsonku.DeleteKaryawan);
};
