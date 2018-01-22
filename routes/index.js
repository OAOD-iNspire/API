var express = require('express');
var router = express.Router();
var mongo = require('mongodb').MongoClient; 
var mongoose =  require('mongoose');
var assert = require('assert');
var Upload = require('../models/TODO');

 /* opening  database connection line */
var uri = 'mongodb://localhost:27017/TODO';

/* GET home page. */
/* retrieve all to dos */
router.get('/', function(req, res, next) {
   
   /* verifying database connection line */
    mongo.connect(uri, function(err, TODO){
          assert.equal(null, err);
          console.log('Database connection successful');
    });
  res.render('todo');
  res.json();
  
});

/* retrieve all to dos with id: */
router.get('/todo/:id', function(req, res, next) {
    /* verifying database connection line */
  mongo.connect(uri, function(err, TODO){
          assert.equal(null, err);
          console.log('Database connection successful')   
  });
  res.json();
});

/* creat a to do */ 
router.post('/todo', function(req, res, next) {
    /* verifying database connection */
 mongo.connect(uri, function(err, TODO){
          assert.equal(null, err);
          console.log('Database connection successful')
      });
    res.json();       
});

/* edit or update a to do */ 
router.put('/todo/:id', function(req, res, next) {
    /* verifying database connection */ 
    mongo.connect(uri, function(err, TODO){
          assert.equal(null, err);
          console.log('Database connection successful')
      });
   res.json();
});

/* edit or update a to do */ 
router.delete('/todo/:id', function(req, res, next) {
    /* verifying Database connection */
    mongo.connect(uri, function(err, TODO){
          assert.equal(null, err);
          console.log('Database connection successful')
      });
 res.json();
 
});
module.exports = router;
