const buyChocolate = () => {
    const chocolateBar = {
        type: "milk chocolate"
    }
    return chocolateBar
}
const addFlavoring = (chocolateObject) => {
    chocolateObject.flavor = "Mint"
    return chocolateObject
}
const makeBarkMixture = (chocolateObject) => {
    if (chocolateObject.flavor === "Mint") {
        chocolateObject.mixed = true
    } else {
        chocolateObject.mixed = false
    }
    return chocolateObject
}
const bakeCandy = (chocolateObject) => {
    if (chocolateObject.mixed === true) {
        chocolateObject.baked = true
    } else {
        chocolateObject.baked = false
    }
    return chocolateObject
}
const breakBark = (chocolateObject) => {
    if (chocolateObject.baked === true) {
        const brokenChocolate = ["Mint Chocolate Bark Piece" , "Mint Chocolate Bark Piece" , "Mint Chocolate Bark Piece" , "Mint Chocolate Bark Piece" , "Mint Chocolate Bark Piece" , "Mint Chocolate Bark Piece"]
        return brokenChocolate
    }
}

const cookCandy = () => {
    let cookedCandy = {}
    cookedCandy = buyChocolate()
    addFlavoring(cookedCandy)
    makeBarkMixture(cookedCandy)
    bakeCandy(cookedCandy)
    return breakBark(cookedCandy)
}

console.log(cookCandy())



//testing github commit
