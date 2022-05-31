// function newArr(x) {

//         if(newArr[0] < newArr.length-1) {
//             alert ('hi')
//         }else if(newArr[0] > newArr.length-1) {
//             alert ('Bye')
//         }else{
//             alert ('We close in an hour')
//         }
//     }


// newArr([1,2,3,4])





// function anotherArr(y) {
//     let newProduct = 1;
//     y.forEach((element, i) => {
//         product *= item
//     });
// 

// anotherArr([1,2,3,4]);



///////////////////////////////METHODS////////////////////

// let arr = ['t','e','s','t'];

// alert ( arr.concat(1, 3, [4, 5]) );

// alert (arr)

// arr.forEach((item, index, array) => {
//     alert(`${item} is at index ${index} in the ${array}`);
// });

// ["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
//     alert(`${item} is at index ${index} in ${array}`);
//   });

///////////////////////////////METHODS////////////////////




///////////////////////////////ARROWS////////////////////

// let myFun = (a, b, ...muchMore) => {
//     alert (a + ' ' + b + ' ' + muchMore);
// }

// myFun('there', 'is');

// myFun('There', 'is', 'no', 'spoon.');






///////////////////////////////METHODS////////////////////


// function XO(xsandos) {
//   let lettersInside;
//   let howManyXs;
//   let howManyOs;
  
//   howManyXs = 0;
//   howManyOs = 0;
//   lettersInside = [...xsandos];
  
//   for (let i = 0; i <= lettersInside.length - 1; i++) {
//     if (lettersInside[i] === 'x') {
//       howManyXs += 1;
//     }else if(lettersInside[i] === 'o') {
//       howManyOs += 1;
//     }
//   }
  
//   if(howManyXs === howManyOs) {
//     return true;
//   }else if(howManyXs === 0 && howManyOs === 0){
//     return true;
//   }else{
//     return false;
//   }
// }


// let isItAnArray;
// let isItAnArrayNow;

// isItAnArray = 'There is no spoon';

// isItAnArrayNow = [...isItAnArray];


///////////////////////////////METHODS////////////////////


let tvShows;

tvShows = [1,2,3];

for(i = 0; i <= tvShows.length; i++) {
  console.log(tvShows[i]);
}

let allNumbers;
let newArray;

allNumbers = [1,2,3,4,5,6,7,8,9,10];

for(i = 0; i <= allNumbers.length; i++) {
  if(allNumbers[i] % 2 === 0) {
    newArray.push(allNumbers[i])
    console.log(newArray)
  }
}


