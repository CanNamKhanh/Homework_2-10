// ho mảng 2 chiều (điểm số của học sinh):

// const scores = [

//   [8, 9, 7],   // học sinh 1

//   [6, 5, 7],   // học sinh 2

//   [10, 9, 8]   // học sinh 3

// ]

// - Tính điểm trung bình của từng học sinh => [8, 6, 9].

// - Lọc ra những học sinh có điểm trung bình >= 8.

// - Tạo mảng mới tăng tất cả điểm thêm 1 (nếu chưa vượt quá 10).

const scores = [
  [8, 9, 7], // học sinh 1
  [6, 5, 7], // học sinh 2
  [10, 9, 8], // học sinh 3
];

console.warn("Ex01");

const averageScores = scores.map(function (student, index) {
  return student.map(function (score, index) {
    let total = 0;
    total += score;
    console.log(total);
  });
});
