Promise.resolve(10)
  .then(value => {
    return new Promise(resolve => {
      setTimeout(() => resolve(value * 2), 1000);
    });
  })
  .then(value => {
    console.log(value);
  });


const hiee = new Promise((resolve) => { // promise is for asynchronus code mostly but we can use it with synchronus code as well
    let arr = []
    for(let i = 0 ; i < 5 ; i++) {
        arr.push(i)
    }
    resolve(arr)
})
hiee.then(console.log)

// map 

const map = new Map();

map.set("name", "Ashish");
map.set(1, "one");
map.set(true, "yes");

console.log(map);
console.log(map.get(1))

//object

const user = {
    name:"ashish",
    greet: function() {
        console.log(this.name)
    }
}

const newGreet = function () {
    console.log(this.name)
}

newGreet.call(user)

console.log(user["name"])

