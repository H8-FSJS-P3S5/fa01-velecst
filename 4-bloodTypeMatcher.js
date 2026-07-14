/*
# Blood Type Matcher

## Instruksi

Tahukah kamu, bahwa tipe darah kita berasal dari turuan tipe darah orang tua kita.
Buatlah sebuah fungsi javascript yang menerima 3 parameter (tiap param bertipe data string) dengan nama isMatchBloodType yang bertujuan untuk memeriksa apakah tipe darah kita cocok dengan tipe darah orang tua kita.

Function ini menerima 4 params:
- param1 : Tipe darah Ayah A
- param2 : Tipe darah Ibu B
- param3 : Tipe darah Anak

Kami sudah membuat table referensi untuk menentukan kesesuaian tipe darah orang tua dan anak. fungsi javascript ini akan mengembalikan boolean (true) jika tipe darah anak sesuai dengan tipe darah di array `bloodTypeTable`, dan akan mengembalikan boolean (false) jika tipe darah anak tidak sesuai.

## TEST CASE

- isMatchBloodType('O', 'A', 'O') // true
alasan: karena O dan A menghasilkan anak bergolongan darah A atau O

- isMatchBloodType('O', 'A', 'A') // true
alasan: karena O dan A menghasilkan anak bergolongan darah A atau O

- isMatchBloodType('O', 'A', 'B') // false
alasan: karena O dan A tidak menghasilkan anak bergolongan B

- isMatchBloodType('O', 'B', 'B') // true
- isMatchBloodType('AB', 'B', 'O') // false
- isMatchBloodType('AB', 'B', 'B') // true

*/

const bloodTypeTable = [
  {
    parents: ["A", "A"],
    child: ["A", "O"],
  },
  {
    parents: ["A", "B"],
    child: ["A", "B", "O", "AB"],
  },
  {
    parents: ["A", "O"],
    child: ["A", "O"],
  },
  {
    parents: ["A", "AB"],
    child: ["A", "B", "AB"],
  },
  {
    parents: ["B", "B"],
    child: ["B", "O"],
  },
  {
    parents: ["B", "O"],
    child: ["B", "O"],
  },
  {
    parents: ["B", "AB"],
    child: ["A", "B", "AB"],
  },
  {
    parents: ["O", "O"],
    child: ["O"],
  },
  {
    parents: ["O", "AB"],
    child: ["A", "B"],
  },
  {
    parents: ["AB", "AB"],
    child: ["A", "B", "AB"],
  },
];

function isMatchBloodType(parent1, parent2, children) {
  for (let i = 0; i < bloodTypeTable.length; i++) {
    let dad = bloodTypeTable[i].parents[0];
    let mom = bloodTypeTable[i].parents[1];

    if (
      (dad === parent1 && mom === parent2) ||
      (dad === parent2 && mom === parent1)
    ) {
      let chances = bloodTypeTable[i].child;

      for (let j = 0; j < chances.length; j++) {
        if (chances[j] === children) {
          return true;
        }
      }
      return false;
    }
  }
  return false;
}
// TEST CASE
console.log(isMatchBloodType("O", "A", "O")); // true
console.log(isMatchBloodType("O", "A", "A")); // true
console.log(isMatchBloodType("O", "A", "B")); // false
console.log(isMatchBloodType("O", "B", "B")); // true
console.log(isMatchBloodType("AB", "B", "O")); // false
console.log(isMatchBloodType("AB", "B", "B")); // true

module.exports = isMatchBloodType;
