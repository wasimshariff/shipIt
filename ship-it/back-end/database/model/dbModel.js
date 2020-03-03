const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
/*let DbModel = new Schema({
  student_name: {
    type: String
  },
  student_email: {
    type: String
  },
  section: {
    type: String
  },
  subjects: {
    type: Array
  },
  gender: {
    type: String
  },
  dob: {
    type: Date
  }
}, {
  collection: 'students'
});*/

let CrossRef = new Schema({
  Type: {
    type: String
  },
  Parameter: {
    type: String
  },
  "Range Minimum": {
    type: Number
  },
  "Range Maximum": {
    type: Number
  },
  "Raw Score": {
    type: Number
  },
  "Credit": {
    type: Number
  },
  "Total": {
    type: Number
  }
}, {
  collection: 'crossref'
});

let DMV = new Schema({
  licenseNumber: {
    type: String
  },
  "Conviction Description": {
    type: String
  },
  "Year of Conviction": {
    type: String
  },
  "Month of Conviction": {
    type: String
  },
  "Age on Violation Date": {
    type: String
  },
  "Sex": {
    type: String
  },
  "License Class on Violation Date": {
    type: String
  },
  "Court Name": {
    type: String
  }
}, {
  collection: 'dmv'
});

let PrescriptionDrug = new Schema({
  SSN: {
    type: Number
  },
  "Type": {
    type: String
  },
  "Drug Name": {
    type: String
  },
  "Prescription from": {
    type: String
  },
  "Prescription To": {
    type: String
  },
  "Dosage": {
    type: String
  }
}, {
  collection: 'prescriptionDrug'
});

let FinalCoverage = new Schema({
  EligibilityScoreMin: {
    type: Number
  },
  EligibilityScoreMax: {
    type: Number
  },
  IncomeRangeMinimum: {
    type: Number
  },
  IncomeRangeMaximum: {
    type: Number
  },
  AvailableMinimumCoverage: {
    type: Number
  },
  AvailableMaximumCoverage: {
    type: Number
  }
}, {
  collection: 'finalCoverage'
});

let FinCredit = new Schema({
  SSN: {
    type: Number
  },
  "Total Mortgage": {
    type: String
  },
  "Outstanding Balance": {
    type: String
  },
  "Credit Score": {
    type: String
  }
}, {
  collection: 'finCredit'
});

module.exports.CrossRef = mongoose.model('CrossRef', CrossRef);
module.exports.DMV = mongoose.model('DMV', DMV);
module.exports.PrescriptionDrug = mongoose.model('PrescriptionDrug', PrescriptionDrug);
module.exports.FinalCoverage = mongoose.model('FinalCoverage', FinalCoverage);
module.exports.FinCredit = mongoose.model('FinCredit', FinCredit);

