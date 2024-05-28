// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// module.exports = router;

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/actors', function(req, res) {
  req.pool.getConnection(function(err, connection) {
    var SQL = "SELECT first_name, last_name FROM actor;";

    connection.query(SQL, function(err, rows, fields) {
      connection.release();
      res.json(rows);
    });
  });
});

router.post('/add', function(req, res) {
  req.pool.getConnection(function(err, connection) {

    var query = "INSERT INTO actor (first_name, last_name) VALUES (?, ?)";

    connection.query(query, [req.body.first_name, req.body.last_name], function(err, rows, fields) {
      connection.release();

      res.sendStatus(200);
      return;
    });
  });
});

module.exports = router;
