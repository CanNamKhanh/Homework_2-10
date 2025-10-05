// Cho trước mảng:

// const nums = [3, 7, 2, 9, 12, 15, 18];

// - Lấy ra mảng mới chỉ chứa số lớn hơn hoặc bằng 10.

// - Từ mảng mới trên, tạo mảng chỉ chứa số chia hết cho 3.

// - Với mảng ban đầu, tạo mảng mới tăng gấp đôi nhưng chỉ giữ lại số lẻ.

const nums = [3, 7, 2, 9, 12, 15, 18];

console.warn("Ex01");
const newNums = nums.filter(function (value, index) {
  if (value >= 10) {
    return true;
  }
});
console.log(newNums);

console.warn("Ex02");
const newNums1 = nums.filter(function (value) {
  if (value % 3 === 0) {
    return true;
  }
});
console.log(newNums1);

console.warn("Ex03");

const doubleNums = nums
  .map(function (value, index) {
    return value * 2;
  })
  .filter(function (value) {
    if (value % 2 !== 0) {
      return true;
    }
    return nums % 2;
  });

console.log(doubleNums);
