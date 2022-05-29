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
// }

// anotherArr([1,2,3,4]);

let arr = ['t','e','s','t'];

alert ( arr.concat(1, 3, [4, 5]) );

alert (arr)

arr.forEach((item, index, array) => {
    alert(`${item} is at index ${index} in the ${array}`);
});

["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
    alert(`${item} is at index ${index} in ${array}`);
  });