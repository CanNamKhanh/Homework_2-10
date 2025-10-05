// Cho trước mảng

// const myArr = [

//   ["hello", "world"],

//   ["javascript", "php"],

//   ["css", "html"]

// ]

// - Tạo mảng mới viết hoa tất cả từ.

// - Lọc ra các từ có độ dài > 4.

// - Ghép tất cả thành 1 mảng 1 chiều.

const myArr = [
  ["hello", "world"],
  ["javascript", "php"],
  ["css", "html"],
];

console.warn("Ex01");
const upperWords = myArr.map(function (value, index) {
  return value.join(" ").toUpperCase().split(" ");
});
console.log(upperWords);

console.warn("Ex02");
const newArr = myArr.map(function (value) {
  return value.filter(function (word) {
    if (word.length > 4) {
      return true;
    }
  });
});
console.log(newArr);

console.warn("Ex03");
let oneDimensionArr = [];
myArr.map(function (value, index) {
  // console.log(value, index);
  return value.map(function (char, num) {
    return oneDimensionArr.push(char);
  });
});

console.log(oneDimensionArr);
