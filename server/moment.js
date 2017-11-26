const moment = require('moment');

const now = moment();
const courtDate = moment().set({ 'year': 2017, 'month': 10, 'date': 12 });
const courtDate2 = moment().set({ 'year': 2017, 'month': 10, 'date': 18 });

console.log(now);
console.log(courtDate);
console.log(courtDate2);

if (moment().add(1, 'days').isSame('2017-11-12', 'day')) {
    console.log('your courtDate is tomorrow.');
}

if (moment().add(7, 'days').isSame('2017-11-18', 'day')) {
    console.log('your courtDate is in 7 days.');
}