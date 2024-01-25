/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  let b = false
  i = -1
  const s = ransomNote.length - 1
  while (i < s) {
    if (magazine.includes(ransomNote[0])) {
      b = true
      magazine = magazine.replace(ransomNote[0], "")
      ransomNote = ransomNote.replace(ransomNote[0], "")
    }
    else {
      b = false
    } i++
  }
  return b
};
