

//The “Basic 13” The foundation “Basic 13” algorithm challenges. 
 
//Print 1-255 
//Print all the integers from 1 to 255. 
 
 for (let i = 1; i <= 255; i++) {
  console.log(i);
}

//Print Sum 0-255 
//Print integers from 0 to 255, and with each integer print the sum so far. 
 
 let sum = 0;
for (let i = 0; i <= 255; i++) {
  sum += i;
  console.log(`Number: ${i}, Sum: ${sum}`);
}

 
//Find and Print Max 
//Given an array, find and print its largest element. 

function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  console.log(`Max: ${max}`);
}

//Array with Odds 
//Create an array with all the odd integers between 1 and 255 (inclusive).  

function arrayWithOdds() {
  let odds = [];
  for (let i = 1; i <= 255; i += 2) {
    odds.push(i);
  }
  return odds;
}

//Greater Than Y 
//Given an array and a value Y, count and print the number of array values greater than Y. 

function greaterThanY(arr, y) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > y) {
      count++;
    }
  }
  console.log(`Count of values greater than ${y}: ${count}`);
}
 
 
 
//Max, Min, Average 
//Given an array, print the max, min and average values for that array. 

function printMaxMinAvg(arr) {
  let max = arr[0];
  let min = arr[0];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
    sum += arr[i];
  }
  let avg = sum / arr.length;
  console.log(`Max: ${max}, Min: ${min}, Average: ${avg}`);
}

//Swap String For Array Negative Values  
//Replace any negative array values with ​'Dojo'​.

function swapNegativeValues(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      arr[i] = 'Dojo';
    }
  }
  return arr;
}

//Print Odds 1-255 
//Print all odd integers from 1 to 255.

function printOdds() {
  for (let i = 1; i <= 255; i += 2) {
    console.log(i);
  }
}

//Iterate and Print Array 
//Iterate through a given array, printing each value.

function iterateAndPrintArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

//Get and Print Average 
//Analyze an array’s values and print the average.

function getAndPrintAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  let avg = sum / arr.length;
  console.log(`Average: ${avg}`);
}
 
 

//Square the Values
//Square each value in a given array, returning that same array with changed values.

function squareValues(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * arr[i];
  }
  return arr;
}

//Zero Out Negative Numbers
//Return the given array, after setting any negative values to zero.

function zeroOutNegativeNumbers(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      arr[i] = 0;
    }
  }
  return arr;
}

//Shift Array Values
//Given an array, move all values forward by one index, dropping the first and leaving a ​'0'​ value at the end.

function shiftArrayValues(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr[arr.length - 1] = 0;
  return arr;
}
