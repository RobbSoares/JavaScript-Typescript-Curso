const array = [1, 2, 3];
const arrayTwo = [4, 5, 6];
// const arrayThree = array.concat(arrayTwo, [7, 8, 9], 'Rob');
const arrayThree = [...array, 'Rob' ,...arrayTwo, ...[7, 8, 9]];
console.log(arrayThree);

