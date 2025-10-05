// const myArr = [

//   [2, 4, 6],

//   [8, 10, 12],

//   [14, 16, 18]

// ]

// - Lấy ra các phần tử trên đường chéo chính => [2, 10, 18].

// - Lấy ra các phần tử trên đường chéo phụ => [6, 10, 14].

// - Tính tổng của đường chéo chính và phụ.

const myArr = [
  [2, 4, 6],
  [8, 10, 12],
  [14, 16, 18],
];

console.warn("Ex01");
const majorDiagonal = myArr
  .map(function (value, index) {
    return value
      .filter(function (chunkValue, chunkIndex) {
        return chunkIndex === index;
      })
      .join();
  })
  .map(Number);
console.log(majorDiagonal);

console.warn("Ex02");
const extraDiagonal = myArr
  .reverse()
  .map(function (value, index) {
    return value
      .filter(function (chunkValue, chunkIndex) {
        return chunkIndex === index;
      })
      .join();
  })
  .reverse()
  .map(Number);
console.log(extraDiagonal);

console.warn("Ex03");
const sumDiagonal =
  majorDiagonal.reduce(function (accumalator, currentValue) {
    return accumalator + currentValue;
  }, 0) +
  extraDiagonal.reduce(function (accumalator, currentValue) {
    return accumalator + currentValue;
  }, 0);
console.log(sumDiagonal);
