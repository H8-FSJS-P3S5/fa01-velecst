/*
# Second Unique Integer

## Instruksi

Buatlah sebuah fungsi javascript yang menerima 2 parameter (tiap param bertipe array of number) dengan nama secondUniqueInteger yang bertujuan untuk mencari dan menghasilkan angka unik ke-2. Unik berarti tidak duplikat pada ke-2 params tersebut dan pencarian unik berdasarkan urutan param pertama. Jika tidak ditemukan angka unik ke-2, maka fungsi akan mengembalikan `false`

Function ini menerima 2 params:
- param1 : Array of Number
- param2 : Array of Number

## TEST CASE
- secondUniqueInteger([1, 2, 3, 5, 9, 12], [1, 2, 5, 10, 12]) // 9
alasan: karena 9 adalah angka unik ke-2 sedangkan 3 adalah angka unik ke-1

- secondUniqueInteger([1, 2, 3, 4, 5, 6], [2, 3, 4, 5, 6, 7]) // false
alasan: karena 1 adalah angka unik ke-1 dan tidak ditemukan angka unik ke-2 pada params pertama

- secondUniqueInteger([3, 5, 7, 9, 1, 4], [3, 7, 1, 4, 8]) // 9
- secondUniqueInteger([1, 2, 3, 4], [1, 2, 3, 4]) // false
- secondUniqueInteger([1, 2, 3, 4], [5, 6]) // 2
*/

function secondUniqueInteger(numbersA, numbersB) {
  let mixofArray = [];
  let count = [];

  for (let i = 0; i < numbersA.length; i++) {
    mixofArray.push(numbersA[i]);
  }

  for (let i = 0; i < numbersB.length; i++) {
    mixofArray.push(numbersB[i]);
  }

  let unique = 0;

  for (let i = 0; i < numbersA.length; i++) {
    let jumlah = 0;

    for (let j = 0; j < mixofArray.length; j++) {
      if (numbersA[i] === mixofArray[j]) {
        jumlah++;
      }
    }
    if (jumlah === 1) {
      unique++;
      if (unique === 2) {
        return numbersA[i];
      }
    }
  }
  return false;
}

// TEST CASE
console.log(secondUniqueInteger([1, 2, 3, 5, 9, 12], [1, 2, 5, 10, 12])); // 9
console.log(secondUniqueInteger([1, 2, 3, 4, 5, 6], [2, 3, 4, 5, 6, 7])); // false
console.log(secondUniqueInteger([3, 5, 7, 9, 1, 4], [3, 7, 1, 4, 8])); // 9
console.log(secondUniqueInteger([1, 2, 3, 4], [1, 2, 3, 4])); // false
console.log(secondUniqueInteger([1, 2, 3, 4], [5, 6])); // 2

module.exports = secondUniqueInteger;
