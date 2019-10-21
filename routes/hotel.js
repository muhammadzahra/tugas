var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/hotel', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const connection = mongoose.connection;
connection.once('open', function () {
    console.log("MongoDB database connection established successfully");
});

const Ubah = mongoose.model('ubah', {
    namahotel: String,
    alamat: String
});

router.get('/', function (req, res, next) {
    Ubah.find((err, resData) => {
        let data = {
            layout: 'admin',
            title: 'Daftar ubah',
            ubah: resData
        };
        res.render('hotel/list', data);
    });
});

router.get('/add', function (req, res, next) {

    let data = {
        layout: 'admin',
        title: 'Tambah hotel'

    };
    res.render('hotel/add', data);
});

router.post('/add', function (req, res, next) {
    let dataUbah = req.body;
    let ubah = new Ubah(dataUbah);
    ubah.save().then(resData => {
        res.redirect('/admin/hotel');
    }).catch(err => {
        res.status(400).send('Simpan hotel gagal!');
    });
});
router.get('/edit/:id', function (req, res, next) {
    Ubah.findById(req.params.id, (err, resData) => {
        let data = {
            layout: 'admin',
            title: 'Daftar hotel',
            ubah: resData
        };
        res.render('hotel/edit', data);
    });
});

router.post('/:id/update', function (req, res, next) {
    let dataUbah = req.body;
    Ubah.findById(req.params.id, function (err, resData) {
        if (!resData) {
            res.status(404).send("data tidak ditemukan!");
        } else {
            resData.namahotel = dataUbah.namahotel;
            resData.alamat = dataUbah.alamat;

            resData.save().then(resData => {
                res.redirect('/admin/hotel');
            })
        }
    });
});

router.get('/:id/delete', function (req, res, next) {
    Ubah.findById(req.params.id, function (err, resData) {
        if (!resData) {
            res.status(404).send("data tidak ditemukan!");
        } else {
            resData.delete().then(resData => {
                res.redirect('/admin/hotel');
            })
        }
    });
});

module.exports = router;