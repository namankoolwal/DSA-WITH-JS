// move the element in array by 1 position to the left

let arr = [1,2,3,4,5,6]

// let temp = arr[0]

// for(let i = 0; i < arr.length ; i++){
//     arr[i] = arr[i+1]
// }

// arr[arr.length - 1] = temp

// console.log(arr)



// move the element in array by 1 position to the right

// [6,1,2,3,4,5]

// let tempRight = arr[arr.length-1]

// for(let i = arr.length-1; i >0 ; i--){
//     arr[i] = arr[i-1]
// }

// arr[0] = tempRight

// console.log(arr)


// ------------ Move the element in array by k position to the left --------------------


// let k = 6

// k = k % arr.length

// for(let j = 1 ; j <= k ; j++){

//     let lastArr = arr[0]
//     for(let i = 0 ; i < arr.length ; i++){
//         arr[i] = arr[i+1]
//     }
    
//     arr[arr.length - 1 ] = lastArr
// }

// console.log(arr)


// == better approach ==
//  arr[i] = (i + k) % arrLength

// let k = 3

// let tempArr = new Array(arr.length)

// for(let i = 0 ; i < arr.length ; i++){
//     let value = ((i + k) % arr.length)
//     tempArr[i] = arr[value] 
// }

// console.log(tempArr)


// ------------ Move the element in array by k position to the right --------------------

let k = 5

let tempArr = new Array(arr.length)

for(let i = 0 ; i < arr.length ; i++){
    tempArr[(i + k) % arr.length] = arr[i]
}

console.log(tempArr)
