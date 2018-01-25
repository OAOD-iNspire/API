var express = require('express');
var router = express.Router();
var mongo = require('mongodb').MongoClient; 
var mongoose =  require('mongoose');
var assert = require('assert');
var Task = require('../models/TODO');

/* GET home page. */
/* retrieve all to dos */
router.get('/task', function(req, res, next) { 

  res.json();
  
});

/* retrieve all to dos with id: */
router.get('/todo/:id', function(req, res, next) {
  res.json();
});

/* creat a to do */ 
router.post('/todo', function(req, res, next) {
   
 
    res.json();       
});

/* edit or update a to do */ 
router.put('/todo/:id', function(req, res, next) {
  
   res.json();
});

/* edit or update a to do */ 
router.delete('/todo/:id', function(req, res, next) {
    
 res.json();
 
});
module.exports = router;
