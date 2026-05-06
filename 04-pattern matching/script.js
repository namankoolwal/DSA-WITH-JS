let prompt = require('prompt-sync')()

let a = Number(prompt("Enter a no: "))

// for (let i = 0; i < a; i++) {

//     for(let j = 0 ; j < a ; j++){
//         process.stdout.write("* ")
//     }
//     process.stdout.write("\n")

// }

// ============== Right angle triangle with star====================

// *
// * *
// * * *

// for(let i = 0 ; i < a ; i ++){
    
//     for(let j = 0;  j<= i; j++){
//         process.stdout.write("* ")
//     }
//     process.stdout.write("\n")
    
// }


// ============== Right angle triangle with number====================

// 1
// 1 2
// 1 2 3

// for(let i = 1 ; i <= a ; i ++){
    
//     for(let j = 1;  j<= i; j++){
//         process.stdout.write(j + " ")
//     }
//     process.stdout.write("\n")
    
// }


// ============== Right angle triangle with char====================
// A
// A B
// A B C

// for(let i = 1 ; i <= a ; i ++){
    
//     let ascii = 65;
//     for(let j = 1;  j<= i; j++){
//         process.stdout.write(String.fromCharCode(ascii) + " ")
//         ascii ++
//     }
//     process.stdout.write("\n")
    
// }


// ============== Inverted Right angle triangle with star====================
// * * *
// * *
// *

// for(let i = a ; i >= 0 ; i --){
    
//     for(let j = 1;  j<= i; j++){
//         process.stdout.write("* ")
//     }
//     process.stdout.write("\n")
    
// }


// ============== Mirror Right angle triangle with star====================
//     *
//   * *
// * * * 



// for(let i = a ; i > 0 ; i--){
//     for(let j = 1 ;  j<=a ;  j++){
//         if( j >= i){
//             process.stdout.write("* ")
//         }
//         else{
//             process.stdout.write("  ")
//         }
//     }
//     process.stdout.write("\n")
    
// }

// for(let i = a ; i > 0 ; i--){
//     for(let j = 1;  j<= i; j++){
//         process.stdout.write("  ")
//     }
//     for(let j = i; j <= a ; j++){
//         process.stdout.write("* ")

//     }
//     process.stdout.write("\n")
// }


// ============== X- star pattern ====================
// *   *
//  * *
//   *
//  * *
// *   *


// for(i = 1 ; i <= a; i++){
//     for(j = 1 ; j<= a; j++){
//         if(j == i || (j + i == Number(a) + 1)){
//             process.stdout.write("* ")
//         }
//         else{
//             process.stdout.write("  ")
//         }
//     }
//     process.stdout.write("\n")
    
// }


// ============== V - star pattern ====================
// *     *
//  *   *
//   * *
//    *


for(let i = 1 ; i <= a ;i ++){
    for(let j = 1 ; j <= a*2 ; j++){
        if(i == j || (j == (a*2)-i)){
            process.stdout.write("* ")
        }
        else{
            process.stdout.write("  ")

        }
    }
     process.stdout.write("\n")
}