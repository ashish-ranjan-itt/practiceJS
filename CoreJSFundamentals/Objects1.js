const user = {
    name: "Ashish",
    greet() {
        console.log(this.name)
    }
}

// console.log(user.name)
const naam = user.greet
naam() //(undefined) because naam has access to inly a function but it does not have access to the name

//this is object destructuring

function sayHello({name}) {
    console.log(`hello bro ${name}`)
}
sayHello(user)