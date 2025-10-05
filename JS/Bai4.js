// Cho trước mảng

// const words = ["javascript", "php", "css", "html", "python", "java"];

// - Lọc ra các từ có độ dài >= 5.

// - Tạo mảng mới viết hoa toàn bộ.

// - Tạo mảng mới viết ngược từng chuỗi (tpircsavaj, avaj...)

const words = ["javascript", "php", "css", "html", "python", "java"];

console.warn("Ex01");
const newWords = words.filter(function (value) {
  //   console.log(value.length);
  if (value.length >= 5) {
    return true;
  }
});
console.log(newWords);

console.warn("Ex02");
const upperWords = words.map(function (value) {
  return value.toUpperCase();
});
console.log(upperWords);

console.warn("Ex03");
// console.log(words.reverse());
const reverseWords = words.map(function (word) {
  return word.split("").reverse().join("");
});
console.log(reverseWords);
