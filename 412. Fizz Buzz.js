/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  x = [];
  for (i = 1; i <= n; i++) {
    x[i - 1] =
      i % 3 == 0 && i % 5 == 0
        ? "FizzBuzz"
        : i % 3 == 0
        ? "Fizz"
        : i % 5 == 0
        ? "Buzz"
        : "" + i;
  }
  return x;
};
