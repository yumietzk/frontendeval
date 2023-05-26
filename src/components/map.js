function map(array, callback) {
  let newArray = [];

  for (i = 0; i < array.length; i++) {
    const value = callback(array[i]);
    newArray.push(value);
  }

  return newArray;
}

const mappedArray = map([1, 2, 3, 4, 5], (x) => x * 2);
console.log(mappedArray);
// expected: [2, 4, 6, 8, 10];
