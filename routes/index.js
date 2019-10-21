var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/hotel', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
// const connection = mongoose.connection;
// connection.once('open', function () {
//   console.log("MongoDB database connection estabilished successfully");
// });

// const Kamar = mongoose.model('kamar', {
//   nomer: String,
//   lantai: String,
//   fasilitas: [String]
// });

/* GET home page. */
router.get('/', function (req, res, next) {
  let data = {
    layout: 'frontend',
    title: 'MYapp',
    content: 'Halo nama saya muhammad zahra'
  };
  res.render('index', data);
});


// router.get('/kamar', function (req, res, next) {
//   Kamar.find((err, kamar) => {
//     res.status(200).send(kamar);
//   })
// });

// router.get('/kamar/add', function (req, res, next) {
//   let kamar = new Kamar({
//     nomor: "001",
//     lantai: 1,
//     fasilitas: [
//       "TV", "AC", "kulkas"
//     ]
//   });
//   kamar.save();
//   res.status(200).send(kamar);
// });


router.get('/login', function (req, res, next) {
  res.render('login');
});

// router.get('/admin', function (req, res, next) {
//   res.render('admin');
// });



module.exports = router;