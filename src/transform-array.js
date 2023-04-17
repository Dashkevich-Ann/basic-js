const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if(!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");
  let a = arr.slice();
  let newArr = []
  for(let i = 0; i < a.length; ) {
    if(a[i] == '--discard-next') {
        i = i + 2;
        };
    if(a[i + 1] == '--discard-prev') {
        i += 2;
        };
    if(a[i] == '--discard-prev') i++;
    if(a[i] == '--double-next') {
      newArr.push(a[i+1]);
      i++;  
    };
    if(a[i + 1] == '--double-prev') {
      newArr.push(a[i]);
        newArr.push(a[i]);
      i++;     
    };
    if(a[i] == '--double-prev') i++;
    newArr.push(a[i]);
    i++;
  };
  return newArr.filter(x => x!=undefined);
}

module.exports = {
  transform
};
