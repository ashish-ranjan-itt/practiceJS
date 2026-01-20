class Animal {
  constructor(name) {
    this.name = name
  }

  speak() {
    console.log(`${this.name} makes a noise`)
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name) 
    this.breed = breed
  }

  speak() {
    console.log(`${this.name} barks`)
  }
}

const kiku = new Dog("kiku","labrador")
kiku.speak()
