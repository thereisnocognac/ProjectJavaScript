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

function yetAnotherArr(z) {
    let allEven = [];
    let pullItOut;

    for(let i = 0; i < z.length; i++) {
        if((z[i] % 2) === 0) {
            allEven.push(z[i]);
        }
    }
}

yetAnotherArr([1,2,3,4,5])