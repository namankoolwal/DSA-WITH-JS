// Find the max and min element in the array

let arr = [10, 132, 89, 76, 34, 400]

let max = arr[0]
let min = arr[0]

for(let i = 1 ; i< arr.length; i++){
    if(max < arr[i]){
        max = arr[i]
    }
    if(min > arr[i]){
        min = arr[i]
    }
}

// console.log("Max element in the array", max)
// console.log("Min element in the array", min)

// Find the second max element in the array

let max1 = Math.max(arr[0], arr[1])
let max2 = Math.min(arr[0], arr[1]);

for(let i = 1; i < arr.length ; i ++){
    if(max1 < arr[i]){
        max2 = max1
        max1 = arr[i]
    }
    else if(arr[i] < max1 && arr[i]> max2){
        max2 = arr[i]
    }
}

// console.log("first max", max1 )
// console.log("second max", max2 )


// reverse an array

let revArr = new Array(arr.length)

// console.log(revArr)

for(let i = arr.length; i > 0; i--){
    revArr[arr.length - i] = arr[i-1]
}

// console.log(revArr)



// Move the array in 0 on left and 1 on right
let arr2 = [0, 1, 1, 0, 1 ,0 ,0 ,1, 0, 1, 1, 0 ,0]

let j = 0
let temp

for(let i = 0 ; i <= arr2.length ;  i++){
    if(arr2[i] == 0){
        temp = arr2[j]
        arr2[j] = arr2[i]
        arr2[i] = temp
        j++
    }
    console.log(temp)
}

console.log(arr2)