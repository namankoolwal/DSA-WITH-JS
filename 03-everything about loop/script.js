// factorial of a number

let num = 36

let fact = []

for (let i = 1; i <= Math.floor(num / 2); i++) { //optimized approach 
    if (num % i === 0) {
        fact.push(i)
    }

}
fact.push(num)


console.log(fact)


// reverse the no.

let orgNum = 1234

let revNum = 0
while (orgNum > 0) {
    let last = (orgNum % 10) // 4
    revNum = revNum * 10
    revNum += last
    orgNum = Math.floor(orgNum / 10)

}

console.log(revNum)


// strong no

let strongNum = 145
let total = 0

while (strongNum > 0) {

    let last = strongNum % 10;
    let fact = 1
    for (let i = 1; i <= last; i++) {
        fact = fact * i
    }

    total += fact
    strongNum = Math.floor(strongNum / 10)

}

console.log("total", total)