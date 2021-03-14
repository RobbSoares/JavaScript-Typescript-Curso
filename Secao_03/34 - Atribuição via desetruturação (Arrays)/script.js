// ... rest, ... spread

/* const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90];
const [firstNumber, , thirdNumber, , fifthNumber, , ...rest] = numbers;

console.log(firstNumber, thirdNumber, fifthNumber);
 */

//                    0          1          2
//                 0  1  2    0  1  2    0  1  2
const numbers = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];

const [listOne, listTwo, listThree] = numbers;

console.log(listThree[2]);












