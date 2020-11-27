const split = (str, delim) => {
  // write code for strings.split
  let array = str.split("-");
  return array;
}

const pairs = (str) => {
  // write code for strings.pairs
  let pairs = str.match(/(..?)/g);
  return pairs;
}

const reverse = (str) => {
  // write code for strings.reverse
  let array = str.split('');
  let reverse = array.reverse();
  let string = reverse.join("");
  return string;
}

module.exports = {
  split,
  pairs,
  reverse
}