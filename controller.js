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

exports.GetKaryawanByNIK = function (req, res) {
  let nik = req.params.nik;
  connection.query(
    'select * from m_karyawan where NIK = ?',
    [nik],
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok(rows, res);
      }
    }
  );
};

exports.AddKaryawan = function (req, res) {
  var nik = req.body.nik;
  var nama = req.body.nama;

  connection.query(
    'Insert into m_karyawan(NIK,nama) values(?,?)',
    [nik, nama],
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok('Berhasil menambah data', res);
      }
    }
  );
};

exports.EditKaryawan = function (req, res) {
  var nik = req.body.nik;
  var nama = req.body.nama;
  console.log(nik + ' ' + nama);
  connection.query(
    'Update m_karyawan set nama=? where NIK=?',
    [nama, nik],
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok('Berhasil update data', res);
      }
    }
  );
};
