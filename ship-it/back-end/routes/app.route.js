const express = require('express');
const appRoute = express.Router();

// dbModel model
let dbModel = require('../database/model/dbModel');

// middleware that is specific to this router
appRoute.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
});

appRoute.get('/bmi/:id', (req, res) => {
  dbModel.CrossRef.find({ Type :'BMI' , "Range Minimum" : { $lte : req.params.id}, "Range Maximum" : { $gte : req.params.id}}, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

appRoute.get('/chol/', (req, res) => {
  console.log(req.query.gender);
  console.log(req.query.score);
  dbModel.CrossRef.find({ Type :'Chol Ratio' , "Parameter" : req.query.gender, "Range Minimum" : { $lte : req.query.score}, "Range Maximum" : { $gte : req.query.score}}, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

appRoute.get('/tob/:id', (req, res) => {
  dbModel.CrossRef.find({ Type :'Tob Usage' , "Parameter" : req.params.id}, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

/*
// Add dbModel
appRoute.post('/add-student', (req, res, next) => {
  dbModel.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get all student
appRoute.get('/', (req, res) => {
  dbModel.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single student
appRoute.get('/read-student/:id', (req, res) => {
  dbModel.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update student
appRoute.put('/update-student/:id', (req, res, next) => {
  dbModel.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('dbModel successfully updated!')
    }
  })
})

// Delete student
appRoute.delete('/delete-student/:id', (req, res, next) => {
  dbModel.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
});*/

module.exports = appRoute;
