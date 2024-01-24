/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
  s = 0;
  while (num != 0) {
    num % 2 == 0 ? (num /= 2) : (num -= 1);
    s++;
  }
  return s;
};
