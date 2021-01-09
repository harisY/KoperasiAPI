'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function (req, res) {
  response.ok('Aplikasi Rest API Koperasi running', res);
};

exports.GetKaryawan = function (req, res) {
  connection.query('select * from m_karyawan', function (error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};
