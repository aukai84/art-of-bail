const mongoose = require('mongoose');
const Schema = mongoose.Schema;
<<<<<<< HEAD

=======
const randomize = require('randomatic');
>>>>>>> 825da1cf5858b57453a8860d48d8b6ae456c98d5
/*
caseNumber is 4 digit unique code for client to use to gain access to their case.
courDatesList is an array of upcoming court DATES.
totalBailOutstanding is the remaining balance on the bail due for payment. 
*/


const caseSchema = new Schema({
    caseNumber: { type: String, unique: true, require: true },
    defendantName: { type: String },
<<<<<<< HEAD
    defendantPhone: { type: String},
    cosignerName: { type: String },
    cosignerPhone: { type: String},
=======
    defendantPhone: { type: String },
    cosignerName: { type: String },
    cosignerPhone: { type: String },
>>>>>>> 825da1cf5858b57453a8860d48d8b6ae456c98d5
    stateCaseLink: { type: String },
    caseStartDate: { type: Date },
    courtDatesList: { type: Array },
    totalBailAmount: { type: Number },
    totalBailOutstanding: { type: Number },
    BailPaymentDueDate: { type: Date }
});

//method to generate unique caseNumber
caseSchema.pre('save', function(next) {
    const bail = this;

    bail.caseNumber = randomize('0', 4);
    bail.caseStartDate = Date.now();

    next();
});

module.exports = mongoose.model('case', caseSchema);
