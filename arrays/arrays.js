//CREATING AN ARRAY
//using the array constructor
// 1) let myArray = new Array(5); // empty array (with undefined value) of length 5 will be created
// 2)
let myArray = new Array(1,2,3,4,5); // [1, 2, 3, 4, 5]


//using the Array.from()
//You can also create an array using the Array.from() method, which allows you to create an array from an iterable object or an array-like object. 
const newArray = Array.from("Hello"); // ['H', 'e', 'l', 'l', 'o']


//using the Array.of()
//The Array.of() method creates a new array instance with a variable number of arguments.
let myArrayAgain = Array.of(1, 2, 3, 4, 5); // [1, 2, 3, 4, 5]


//ADDING OR REMOVING ELEMENTS IN AN ARRAY
//ADDING

//push() -> This method adds one or more elements to the end of an array and returns the new length of the array.
let arrayOne = [1, 2, 3];
myArray.push(4, 5);
console.log(myArray); // Output: [1, 2, 3, 4, 5]

//unshift() -> This method adds one or more elements to the beginning of an array and returns the new length
let arrayTwo = [1, 2, 3];
myArray.unshift(-1, 0);
console.log(myArray); // Output: [-1, 0, 1, 2, 3]

//splice() -> This method can add or remove elements from an array at any position. It takes three parameters: the index at which to start changing the array, 
//the number of elements to remove (if any), and the elements to add (if any). This methods returns an array containing the deleted elements.
let arrayThree = [1, 2, 3];
console.log(myArray.splice(1, 0, 4, 5)); // []
console.log(myArray); // Output: [1, 4, 5, 2, 3]

const nomes = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];
nomes.splice(1, 2, "Rodrigo");
console.log(nomes) //Output: [ 'João', 'Rodrigo', 'Lara', 'Marjorie', 'Leo' ]

//Inserting at specific index -> You can also insert an element at a specific index in an array by simply assigning a value to that index. If the index you 
//are assigning a value to is greater than or equal to the length of the array, then the array will be automatically resized to accommodate the new value.
let arrayFour = [1, 2, 3, 4, 5];
myArray[7] = 7;
console.log(myArray); // Output: [1, 2, 3, 4, 5, undefined, undefined, 7]


//REMOVING

//pop() -> This method removes the last element from an array and returns the removed element.
let myArray = [1, 2, 3];
let lastElement = myArray.pop();
console.log(myArray); // Output: [1, 2]
console.log(lastElement); // Output: 3

//shift() - This method removes the first element from an array and returns the removed element.
let myArray = [1, 2, 3];
let firstElement = myArray.shift();
console.log(myArray); // Output: [2, 3]
console.log(firstElement); // Output: 1

//splice() - This method can also be used to remove elements from an array. To remove elements, you just need 
//to specify the index at which to start removing elements and the number of elements to remove. 
let myArray = [1, 2, 3, 4, 5];
myArray.splice(2, 2);
console.log(myArray); // Output: [1, 2, 5]


//Selecting Ranges & Creating Copies with slice()
//SLICE()
arr.slice(startIndex, endIndex); //syntax
//Here, arr is the array to be sliced, startIndex is the index at which to start the slice (inclusive), and 
//endIndex is the index at which to end the slice (exclusive).

const numbers = [1, 2, 3, 4, 5];
const slicedNumbers = numbers.slice(1, 4); // [2, 3, 4] (copy of 'numbers' array. Changes done to this will not affect 'numbers' array)

console.log(numbers.slice(2, -1)); // [3, 4]
console.log(numbers.slice(3)); // [4, 5]
console.log(numbers.slice(3,1)); // []

//Note that the slice() method does not modify the original numbers array. Instead, it returns a new array containing the sliced elements.



//includes() -> is an array method used to determine whether an array contains a specific element. The method returns a boolean value of 
//true if the element is found in the array, and false if it is not found.
array.includes(element) //syntax

const fruits = ['apple', 'banana', 'orange'];
const hasBanana = fruits.includes('banana');
console.log(hasBanana); // Output: true


//MAP()
//is used to create a new array with the results of calling a provided function on every element in the original array. It returns 
//a new array with the same length as the original array, but with each element transformed based on the return value of the provided function.
//syntax:
array.map(function(currentValue, index, array) {
    // code to execute for each element
    return transformedValue;
  });

//currentValue: The value of the current element being processed
//index: the index of the current elemnte being processed
//array: the array on which map() was called

const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
  ];
  const peopleWithFullName = people.map(function(person) {
    return { fullName: person.name + ' Smith', age: person.age };
  });
  console.log(peopleWithFullName); // Output: [{ fullName: 'Alice Smith', age: 25 }, { fullName: 'Bob Smith', age: 30 }, { fullName: 'Charlie Smith', age: 35 }]

//   Differences

//   1 - Return Value The forEach() method does not return anything, whereas the map() method returns a new array with the results of calling a provided function on every element in the original array.
  
//   2 -  Purpose The forEach() method is typically used when you want to perform some operation on each element of the array, but you do not need to create a new array. For example, you might use forEach() to print out each element of an array, or to modify each element of an array in place.
  
//   The map() method, on the other hand, is typically used when you want to create a new array based on the values in the original array. For example, you might use map() to create a new array that contains the square of each number in the original array.
  
//   3 - Callback Function Both methods take a callback function as an argument. The callback function is executed for each element in the array, but the arguments passed to the callback function and the way the return value is used are different:
//   For forEach(), the callback function takes the current element, its index, and the original array as arguments. The return value of the callback function is ignored.
  
//   For map(), the callback function takes the current element, its index, and the original array as arguments. The return value of the callback function is used to create a new array.


//REDUCE
//is used to reduce an array to a single value. It iterates over each element of an array and applies a function that reduces the array to a single value. 
//The result of the function is then used as the accumulator for the next iteration.
//syntax
//array.reduce(callback[, initialValue])
//callback: The function that is used to reduce the array to a single value. This function takes 4 arguments: the accumulator(previous value), the current value of the array, index value of current value and the array reduce() was called upon.
//initialValue: (optional): The initial value of the accumulator. If this argument is not provided, the first element of the array is used as the initial value.

// Example 1
let numbersArray = [1, 2, 3, 4, 5];
const sum = numbersArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 15

// Example 2
numbers = [3, 6, 2, 8, 1];
const max = numbers.reduce(function(accumulator, currentValue) {
  if (currentValue > accumulator) {
    return currentValue;
  } else {
    return accumulator;
  }
});
console.log(max); // Output: 8


//THE SPREAD OPERATOR
//The spread operator (...) is a new feature in JavaScript that allows you to spread the contents of an iterable object, 
//such as an array or an object, into a new array or object. It provides an easy way to concatenate or copy elements from 
//one array or object to another, and can also be used to pass multiple arguments to a function.
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const newArr = [...arr1, ...arr2];
console.log(newArr); // Output: [1, 2, 3, 4, 5, 6]

// Example 1
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const newObj = { ...obj1, ...obj2 };
console.log(newObj); // Output: { a: 1, b: 2, c: 3, d: 4 }

// Example 2
const arr3 = [
    {
      name: "John",
      age: 29
    },
    {
      name: "James",
      age: 35
    }
  ]
const arr4 = [...arr3];
console.log(arr4); // Output: [{name: "John", age: 29}, {name: "James", age: 35}]
arr3[0].age = 30;
console.log(arr4); // Output: [{name: "John", age: 30}, {name: "James", age: 35}]


//The spread operator can also be used to pass multiple arguments to a function. For example:
    function sum(a, b, c) {
        return a + b + c;
    }
    
    const moreNumbers = [1, 2, 3];
    console.log(sum(...moreNumbers)); // Output: 6


//Para mais métodos de array: https://github.com/Aman0509/learningJavaScript/tree/main/More-on-Arrays-and-Iterables
//baseado no curso JavaScript The Complete Guide, by Academind

//Understanding Array Destructuring
//Imagine que um array é como uma caixa cheia de coisas (números, nomes, qualquer coisa!). A "Array destructuring" é uma forma especial de abrir essa caixa e pegar as coisas de dentro de uma vez só, e colocá-las em caixas separadas, uma para cada coisa.
//Por exemplo, se você tiver um array com três números, a Array destructuring permite que você pegue esses três números e coloque cada um em uma variável diferente, tudo em uma única etapa.
//Isso é útil porque torna seu código mais curto e fácil de entender. Em vez de escrever várias linhas para pegar cada número individualmente, você pode fazer isso em uma única linha usando a Array destructuring. Isso ajuda muito quando você está lidando com muitos dados em seus programas em JavaScript.

//syntax:
const [variable1, variable2, ...rest] = array;

const otherNumbers = [1, 2, 3, 4, 5];
const [first, second, ...resto] = otherNumbers;
console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(rest); // Output: [3, 4, 5]

const matrix = [[1, 2], [3, 4]];
const [[a, b], [c, d]] = matrix;
console.log(a); // Output: 1
console.log(b); // Output: 2
console.log(c); // Output: 3
console.log(d); // Output: 4

