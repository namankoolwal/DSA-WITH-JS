let amt = 501;

let demonimation = [500, 200, 100, 50, 20, 10, 5, 2, 1]

let inrruppe = {}

demonimation.map((key) => {

    if (amt >= key) {

        let count = Math.floor(amt / key)
        amt = amt % key
        
        inrruppe[key] = count;
    }
})


console.log(inrruppe)