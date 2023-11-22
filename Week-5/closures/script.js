function Counter() {
  let count = 0;
  let resultArr = [];
  return function () {
    count++;
    resultArr.push(count);
    return resultArr;
  };
}
const firstCounter = new Counter();
const secondCounter = new Counter();
