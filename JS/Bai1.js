// Cho trước mảng:

// const arr = [1, 2, 3, 4, 5, 6];

// - Tạo mảng mới chứa bình phương của từng phần tử.

// - Tạo mảng mới chứa các số chẵn trong mảng.

// - Tạo mảng mới chứa các số bình phương nhưng chỉ lấy số lẻ.

const arr = [1, 2, 3, 4, 5, 6];
console.log("Cho Array:", arr);

console.warn("Ex01");
const newArr = arr.map(function (value, index) {
  //   console.log(value);
  return value ** 2;
});
console.log(newArr);

console.warn("Ex02");
const newArr1 = arr.filter(function (value, index) {
  if (value % 2 === 0) {
    return value;
  }
});
console.log(newArr1);

console.warn("Ex03");
const newArr2 = arr.map(function (value, index) {
  if (value ** 2 % 2 !== 0) {
    return value ** 2;
  }
});
const result = newArr2.filter(function (value, index) {
  return value;
});
console.log(result);
