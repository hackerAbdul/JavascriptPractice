// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];

// first initialise global empty strings to input the value strings in
let oddArr = []
let evenArr = []



// Function below validates whether the digits in the array equate to a valid cred card
function validateCred(arr){
  empty =[]
  //creates an empty array that traverses through the card array backwards and makes a reverse array
  for (let i=arr.length-1;i>=0; i--){
    empty.push(arr[i])
  }
  console.log(empty)
  //creates an oddly iterated array
  for (let j=0; j<empty.length; j=j+2){
    oddArr.push(empty[j])
  }
  //creates an evenly iterated array
  for (let k=1; k<empty.length; k=k+2){
    evenArr.push(empty[k])
  }
  console.log(oddArr)
  console.log(evenArr)
  sum_of_even = even(evenArr)
  total_odd = total(oddArr)
  
}


function even(array){
  newArr = []
  positionArr = []
  over_10 = []
  //for loop that checks if the value*2 is greater than 10 and then conditional statement to split it and add the values like an array
  for (let i=0; i<array.length; i++){
    if (array[i]*2 < 10){
      newIndex = array[i]*2
      newArr.push(newIndex)
    }else{
      positionArr.push(array[i]*2)
    }
  }
  checker = Array.from(positionArr.toString()).map(Number)
  console.log(newArr)
  console.log(positionArr)
  checker_array = []
  for (let k=0; k<checker.length; k++){
    if (checker[k] >= 0){
      checker_array.push(checker[k])
    }
  }
  console.log(checker_array)
  total_checker = evenTotal(newArr,checker_array)
  return newArr;
}

//this adds the total between the values in the even array
function evenTotal(array1,array2){
  over_10 = total(array2)
  console.log(over_10)
  array_total = total(array1)
  console.log(array_total)
  sum_for_even_array = over_10 + array_total
  return sum_for_even_array
}

function total(sum) {
  return sum.reduce((a, v)=>a + v);
}

function validate(sum){
  if (sum % 10 === 0 ){
    console.log("Hence the card entered is valid")
  }else {
    console.log("Hence the card entered is invalid")
  }
}


array = valid1
validateCred(array)
console.log(sum_for_even_array)
console.log(total_odd)
total_for_both = total_odd + sum_for_even_array
console.log(`The total sum of both values is ${total_for_both}`)
validate(total_for_both)


