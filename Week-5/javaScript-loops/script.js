function drawTriangle(count) {
  let row = "";
  for (let i = 0; i <= count - 1; i++) {
    let aestricks = "";
    for (let j = 0; j <= i; j++) {
      aestricks += "*";
    }
    row += aestricks;
    row += "\n";
  }
  console.log(row);
}
drawTriangle(4);
