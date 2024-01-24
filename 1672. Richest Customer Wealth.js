/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  richest = 0;
  for (i = 0; i <= accounts.length - 1; i++) {
    wealth = accounts[i][0];
    for (j = 1; j <= accounts[i].length - 1; j++) {
      wealth += accounts[i][j];
    }
    richest <= wealth ? (richest = wealth) : null;
  }
  return richest;
};
