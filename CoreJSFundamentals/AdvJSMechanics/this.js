//few ways to call greet() here 

function greet(city) {
  console.log(this.name, city);
}

const user = { name: "Ashish" };
greet.call(user,"patna")

greet.apply(user,["patna"])

console.log([1,2] == [1,2]) 

// prototypal inheritance

function Car (name,modal) {
  this.name = name
  this.modal = modal
}

Car.prototype.drive = function () {
  console.log(`driving ${this.name} buddy modal is ${this.modal}`)
}

const mercedes = new Car("bmw","m4")
mercedes.drive()

// subclass example 

function MotorBoat (name,modal) {
  this.name = name
  this.modal = modal
}

MotorBoat.prototype = Object.create(Car.prototype) //inheriting from a different object

const meraMotorBoat = new MotorBoat("new motor boat","kilu")

meraMotorBoat.drive()