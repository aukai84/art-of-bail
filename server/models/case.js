const mongoose = require('mongoose')
const Schema = mongoose.Schema()

/*
caseNumber is 6 digit code for client to enter to gain access to case.
courDatesList is an array of upcoming court dates.
totalBailOutstanding is the remaining balance on the bail due for payment. 
*/


const caseSchema = new Schema({
    caseNumber: { type: Number, unique: true, require: true },
    defendantName: { type: String },
    defendantPhone: { type: Number },
    cosignerName: { type: String },
    cosignerPhone: { type: Number },
    stateCaseLink: { type: String },
    courtDatesList: { type: Array },
    totalBailAmount: { type: Number },
    totalBailOutstanding: { type: Number },
    BailPaymentDueDate: { type: Date }
});

//method to generate unique caseNumber

module.exports = mongoose.model('case', caseSchema);