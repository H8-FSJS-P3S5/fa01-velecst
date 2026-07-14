/* 
# Number Cruncher

## Instruksi

Buatlah sebuah fungsi javascript yang menerima 1 parameter (array of number) dengan nama numberCruncher yang melakukan proses sebagai berikut:

1. Proses penambahan angka di index sebelum dan sesudahnya. Apabila tidak ada angka di index disebelum atau sesudahnya, maka dianggap sebagai 0
2. Setelah menjadi nilai array baru dari hasil proses langkah 1, setiap angka yang gajil ditotal
3. Fungsi ini akan mengembalikan hasil total poin 2

Function ini menerima 1 params:
- param1 : Array of Number

## TEST CASE

- numberCruncher([2, 5, 1, 3]) // 16
proses:
0. [2, 5, 1, 3]
1. [0 + 2 + 5, 2 + 5 + 1, 5 + 1 + 3, 1 + 3 + 0] => [7, 8, 9, 4]
2. [7, 8, 9, 4] => 7 + 9
3. 16

- numberCruncher([2, 3, 1, 4, 1, 5, 0, 3]) // 8
proses:
0. [2, 3, 1, 4, 1, 5, 0, 3]
1. [5, 6, 8, 6, 10, 6, 8, 3]
2. 5 + 3
3. 8

- numberCruncher([3, 6, 8, 9, 1, 2, 3]) // 54
proses:
0. [3, 6, 8, 9, 1, 2, 3]
1. [9, 17, 23, 18, 12, 6, 5]
2. 9 + 17 + 23 + 5
3. 54
*/

function numberCruncher(numbers) {
  let result = [];
  let total = 0;

  for (let i = 0; i < numbers.length; i++) {
    let before = 0;
    let after = 0;

    if (i > 0) {
      before = numbers[i - 1];
    }

    if (i < numbers.length - 1) {
      after = numbers[i + 1];
    }

    result.push(before + numbers[i] + after);
  }

  for (let i = 0; i < result.length; i++) {
    if (result[i] % 2 !== 0) {
      total += result[i];
    }
  }
  return total;
}

console.log(numberCruncher([2, 5, 1, 3])); // 16
console.log(numberCruncher([2, 3, 1, 4, 1, 5, 0, 3])); // 8
console.log(numberCruncher([3, 6, 8, 9, 1, 2, 3])); // 54

module.exports = numberCruncher;
