/*
# Find Duplicate

## Instruksi

Buatlah sebuah fungsi javascript yang menerima 1 parameter (array of number) dengan nama findDuplicate yang bertujuan untuk mencari angka duplikat pada deret angka yang diinput dan mengembalikan sebuah deret angka duplikat dalam sebuah array. Duplikat artinya terdapat lebih dari 1 data dengan angka yang sama

Function ini menerima 1 params:
- param1 : Array of Number

## TEST CASE

- findDuplicate([1, 2, 3, 4, 5, 6, 7, 8, 9]) // []
alasan: karena tidak ada angka duplicate
- findDuplicate([1, 2, 3, 4, 2, 3, 4, 5, 6]) // [2, 3, 4]
alasan: karena 2, 3, 4 duplikat pada array tersebut

- findDuplicate([1, 2, 3, 3, 2, 1]) // [1, 2, 3]
- findDuplicate([1, 1, 1, 1, 1, 1, 2]) // [1]
- findDuplicate([]) // []
*/

function findDuplicate(numbers) {
  let result = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] === numbers[j]) {
        let found = false;

        for (let k = 0; k < result.length; k++) {
          if (result[k] === numbers[i]) {
            found = true;
          }
        }
        if (found === false) {
          result.push(numbers[i]);
        }
      }
    }
  }
  return result;
}

// TEST CASE
console.log(findDuplicate([1, 2, 3, 4, 5, 6, 7, 8, 9])); // []
console.log(findDuplicate([1, 2, 3, 4, 2, 3, 4, 5, 6])); // [2, 3, 4]
console.log(findDuplicate([1, 2, 3, 3, 2, 1])); // [1, 2, 3]
console.log(findDuplicate([1, 1, 1, 1, 1, 1, 2])); // [1]
console.log(findDuplicate([])); // []

module.exports = findDuplicate;
