// Cho trước mảng

// const myArr = [

//   [1, 2, 3],

//   [4, 5, 6],

//   [7, 8, 9]

// ];

// - Tạo mảng chứa tổng từng hàng => [6, 15, 24]

// - Tạo mảng chứa tổng từng cột => [12, 15, 18]

// - Lọc ra các hàng có tổng > 10.

const myArr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(myArr);

console.warn("Ex01");
const sumRow = myArr.map(function (value, index) {
  const sumChunk = value.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
  });
  return sumChunk;
});
console.log(sumRow);

console.warn("Ex02");
const sumCol = myArr.map(function (value, index) {
  return myArr
    .map(function (chunkValue, chunkIndex) {
      return chunkValue[index];
    })
    .reduce(function (accumalator, currentValue) {
      return accumalator + currentValue;
    });
});
console.log(sumCol);

console.warn("Ex03");
const filterSum = sumRow.filter(function (value, index) {
  return value > 10;
});
console.log(filterSum);
