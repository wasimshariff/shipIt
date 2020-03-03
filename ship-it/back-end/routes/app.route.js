const express = require('express');
const appRoute = express.Router();

// dbModel model
let dbModel = require('../database/model/dbModel');

// middleware that is specific to this router
appRoute.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
});

appRoute.get('/bmi/:id', (req, res, next) => {
  dbModel.CrossRef.findOne({ Type :'BMI' , "Range Minimum" : { $lte : req.params.id}, "Range Maximum" : { $gte : req.params.id}}, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

appRoute.get('/chol/', (req, res, next) => {
  dbModel.CrossRef.findOne({ Type :'Chol Ratio' , "Parameter" : req.query.gender, "Range Minimum" :
      { $lte : req.query.score}, "Range Maximum" : { $gte : req.query.score}}, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

appRoute.get('/tob/:id', (req, res, next) => {
  dbModel.CrossRef.findOne({ Type :'Tob Usage' , "Parameter" : req.params.id}, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

appRoute.get('/coverage/', (req, res, next) => {
  dbModel.FinalCoverage.findOne({ "EligibilityScoreMin" : { $lte : req.query.score},
    "EligibilityScoreMax" : { $gte : req.query.score},
    "IncomeRangeMinimum" : { $lte : req.query.annualIncome},
    "IncomeRangeMaximum" : { $gte : req.query.annualIncome}}, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

appRoute.get('/driverHistory/:id', (req, res, next) => {
  dbModel.DMV.find({ licenseNumber : req.params.id }, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

appRoute.get('/drugHistory/:id', (req, res, next) => {
  dbModel.PrescriptionDrug.find({ SSN : req.params.id}, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

appRoute.get('/creditHistory/:id', (req, res, next) => {
  dbModel.FinCredit.find({ SSN : req.params.id}, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

module.exports = appRoute;
