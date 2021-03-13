module.exports = function check(str, bracketsConfig) {
  let arr = str.split('');
  // if str has an odd number of brackets, that can't be true anyway
  if (arr.length % 2 != 0) return false;

  // for each element in array check if that element is equal
  // to any [0] element of pairs in config AND if the next element
  // is equal to the [1] element in the same pair,
  // delete these 2 items if YES
  let max = arr.length;
  let x = 0;
  // repeat arr.length times
  do {
    for (i=0;i<arr.length;i++) {
      for (j=0;j<bracketsConfig.length;j++) {
        if (arr[i] === bracketsConfig[j][0] && arr[i+1] === bracketsConfig[j][1]) {
          arr.splice(i,2);
          i += 2;
          break;
        }
      }
    }
    x++;
  } while (x<max);
  // if arr still isn't empty, it's false
  return arr.length > 0 ? false : true;
}