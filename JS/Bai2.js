// Cho trước mảng:

// const names = ["   hoang ", "AN", "  f8   ", "Education"];

// - Tạo mảng mới chứa các phần tử đã được xoá khoảng trắng thừa và viết thường toàn bộ.

// Kết quả: `["hoang", "an", "f8", "education"]`

// - Tạo mảng mới viết chữ cái đầu hoa (Hoang, An, F8, Education)

const names = ["   hoang ", "AN", "  f8   ", "Education"];

console.log(names.join().toLowerCase());

console.warn("Ex01");
const newArr = names.map(function (value, index) {
  return value.toLowerCase().trim();
});
console.log(newArr);

console.warn("Ex02");
const upperFirstChar = newArr.map(function (value, index) {
  return (value = `${value.slice(0, 1).toUpperCase()}${value.slice(
    1,
    value.length
  )}`);
});
console.log(upperFirstChar);
