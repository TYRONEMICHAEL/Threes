module.exports = function (arr) {
  var count = arr.length;
  var shuffled = arr.slice();
  var temp;
  var rand;

  while(count) {
    rand = Math.floor(Math.random() * count--);
    temp = shuffled[count];
    shuffled[count] = shuffled[rand];
    shuffled[rand] = temp;
  }

  return shuffled;
};
