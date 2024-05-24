// const transposed = (matrix) => {
//   const newMatrix = [];

//   for (let i = 0; i < matrix[0].length; i++) {
//     newMatrix.push([]);
//     for (let j = 0; j < matrix.length; j++) {
//       newMatrix[i][j] = matrix[j][i];
//     }
//   }
//   console.log(newMatrix);

//   return newMatrix;
// };

// const wordSearch = (letters, word) => {
//   const horizontalJoin = letters.map((ls) => ls.join(''));
//   console.log(horizontalJoin);
//   for (l of horizontalJoin) {
//     if (l.includes(word)) {
//       return 'Found!';
//     }
//   }

//   const verticalJoin = transposed(letters).map((ls) => ls.join(''));
//   console.log(horizontalJoin);
//   for (l of verticalJoin) {
//     if (l.includes(word)) {
//       return 'Found!';
//     }
//   }

//   return 'Not found!';
// };

// const result = wordSearch(
//   [
//     ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
//     ['S', 'E', 'E', 'N', 'F', 'E', 'L', 'D'],
//     ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
//     ['H', 'M', 'J', 'T', 'E', 'A', 'R', 'G'],
//     ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
//     ['B', 'F', 'R', 'A', 'N', 'E', 'Y', 'B'],
//     ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
//     ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
//     ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
//   ],
//   'TEAR'
// ); // Found

// console.log(result);

// Given two integer arrays nums1 and nums2, return an array of their intersection.
// Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]

const arrayIntersection = (arr1, arr2) => {
  countArr1 = {};
  countArr2 = {};
  const output = [];

  for (let num of arr1) {
    if (countArr1[num]) {
      countArr1[num]++;
    } else {
      countArr1[num] = 1;
    }
  }

  for (let num of arr2) {
    if (countArr2[num]) {
      countArr2[num]++;
    } else {
      countArr2[num] = 1;
    }
  }

  for (let num of arr2) {
    if (countArr2[num] && countArr1[num]) {
      output.push(num);
      countArr2[num]--;
      countArr1[num]--;
    }
  }
  return output;
};

console.log(arrayIntersection([1, 2, 2, 1, 4, 5], [2, 2, 6, 8]));
