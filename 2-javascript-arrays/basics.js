// reference https://javascript.info/array-methods

// add elements
const stringsArray = ["I", "go"];
stringsArray.push("home")

// add elements to start
const numbersArray = [20, 30, 50, 60];
const numbersArray2 = [5, 7, ...numbersArray]

// sclice
const numbersArray3 = [...numbersArray.slice(0, 2)]

// add to the middle using slice
const index = numbersArray.indexOf(50);
const numbersArray4 = [...numbersArray.slice(0, index), 40, ...numbersArray.slice(index)]

// ~ slice
const numbersArray5 = [1, 2, 3];
const [x, ...result] = numbersArray5;
