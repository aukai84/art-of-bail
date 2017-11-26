const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const randomize = require('randomatic');
/*
caseNumber is 4 digit unique code for client to use to gain access to their case.
courDatesList is an array of upcoming court DATES.
totalBailOutstanding is the remaining balance on the bail due for payment. 
*/

const caseSchema = new Schema({
    caseNumber: { type: String, unique: true, require: true },
    defendantName: { type: String },
    defendantPhone: { type: String },
    cosignerName: { type: String },
    cosignerPhone: { type: String },
    stateCaseLink: { type: String },
    caseStartDate: { type: String },
    courtDatesList: { type: Array },
    totalBailAmount: { type: Number },
    totalBailOutstanding: { type: Number },
    BailPaymentDueDate: { type: String }
});

//method to generate unique caseNumber
caseSchema.pre('save', function(next) {
    const bail = this;

    bail.caseNumber = randomize('0', 4);
    bail.caseStartDate = Date.now();

    next();
});

module.exports = mongoose.model('case', caseSchema);