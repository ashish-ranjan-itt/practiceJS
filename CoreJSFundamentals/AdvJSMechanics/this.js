//few ways to call greet() here 

function greet(city) {
  console.log(this.name, city);
}

const user = { name: "Ashish" };
greet.call(user,"patna")

greet.apply(user,["patna"])

console.log([1,2] == [1,2]) 