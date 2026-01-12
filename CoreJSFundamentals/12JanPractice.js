//various looops and differences beteween them

//for loop (index based iteration)

const arr = [99, 82, 73, 45, 23, 46]

for (let i = 0; i <= 5; i++) {
    console.log(i, arr[i]);
}

//while loop based on any condition
let i = 0

while (i <= 5) {
    console.log(arr[i])
    i++;
}

//do while loop: when we want to run a loop once then check a condition 

do {
    i++;
    console.log(i)
} while (i < 0)

// for in loop : we can use this when we want to go through index based iteraitons in objects like struture
// it is basically used to access properties

const user = {
    name: "Ashish",
    age: 25,
    height: "190cm",
};

console.log("for in loop :")

// Object.prototype.extra = "oops";     

for (let i in user) {
    console.log(i, user[i])
    // console.log(user.__proto__)
}

//on the contrary for of loop is used to access values directly

console.log("for of loop :")

for (let i of Object.keys(user)) {
    console.log(user[i])
}

//use of object 

const prices = { 1: 10, 2: 30, 3: 40 }
console.log(Object.values(prices).reduce((a, b) => a + b, 0))
console.log(Object.values(prices).sort((a, b) => b - a, 0))
console.log(Object.values(prices).sort((a, b) => a - b, 0))

console.log(Object.values(user).includes("Ashish"))

//funcitons

//arrow funcitons and this behaviour
this.name = "balle balle"

function show() {
    const name = "Ashish"
    console.log(this);
    // console.log(this.name);
}
show()

const showAgain = () => {
    const name = "Ayush"
    console.log(this)
    // console.log(this.name);
}
showAgain()
const objecto = {
    name: "ashish",
    greet() {
        console.log(this.name)
    },
    greeto: () => {
        console.log(this.name)
    }
}


objecto.greet()
objecto.greeto()

// function Timer () {
//     this.seconds = 0
//     console.log(this.seconds)
//     setInterval(() =>{
//         this.seconds++
//         console.log(this.seconds)
//     },1000)
// }

// const t = new Timer();