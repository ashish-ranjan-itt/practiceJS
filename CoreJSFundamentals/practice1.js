let a = 10
a = 20
console.log(a)

const obj = {
    name :"ashish",
    greet() {
        console.log(`hello ${this.name}`)
    },
    arrowGreet : () => {
        console.log(`hello ${this}`)
    }
};

obj.arrowGreet()
obj.greet()

greet()
greet("locloca")    //hoisting (called before declaring)

function greet(name = "ashish") {
    console.log(`hi! this is ${name}`)
}

//rest

function exampleRest(...nums) {
    return nums.reduce((a,b) => a+b)
}

console.log(exampleRest(1,2,3))

//spread

let arr1 = [1,2,3,4]
let arr2 = [...arr1,5,6]
console.log(arr2)

const obj2 = {
    ashish:"ranja",
    loca:"toka"
}

const obj3 = {
    ...obj,
    meenu:"teenu"
}

console.log(obj3)