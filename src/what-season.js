const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if(date == undefined) return 'Unable to determine the time of year!';
  if(!(date instanceof Date) || isNaN(date) || date.hasOwnProperty('setTime')) throw new Error('Invalid date!');
  let a = date.getMonth();
  if(a<=1 || a==11) return 'winter';
  if(a > 1 && a <=4) return 'spring';
  if(a >4 && a <= 7) return 'summer';
  if(a > 7 && a <= 10) return 'fall';
}

module.exports = {
  getSeason
};
