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
    type: String
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

module.exports.CrossRef = mongoose.model('CrossRef', CrossRef);
module.exports.DMV = mongoose.model('DMV', DMV);
module.exports.PrescriptionDrug = mongoose.model('PrescriptionDrug', PrescriptionDrug);
