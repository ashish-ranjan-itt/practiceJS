const nums = [1,2,3]

console.log(nums.map((i) => i*2))

console.log(nums.filter((i) => i%2 === 0))

console.log(nums.reduce((acc,cur) => acc+cur))

console.log(nums.filter((i) => i>2))

console.log(nums.some((i) => i>2)) //return boolean (checks if there is any match)

console.log(nums.every((i) => i>2)) //return boolean (checks if there is every match)

console.log(nums.find((i) => i>1)) //will return the first occurance of the number or case

const nums1 = [10, 2, 22, 3, 8]

console.log(nums1.sort((a,b) => b-a))
console.log(nums1.sort((a,b) => a-b))

let a = 1, b = 2;
[a, b] = [b, a];

console.log(a,b)

//shallow copy

const original = {
  name: "JS",
  address: {
    city: "NY"
  }
};

const shallow = { ...original };

shallow.address.city = "LA"
console.log(original.address.city)

//deep copy

const deep = structuredClone(original)

deep.name = "balle balle"

console.log(original.name, original.address.city)

//---------**--------//

console.log(2+"2")
console.log("2"+2+2)
console.log(2+2+"2")
console.log("2"%2)
console.log(3-"2")
console.log(typeof("3"*2))

console.log("Total"+100+900)
console.log(100+900+"Total")

console.log("1,2,3".split(","))

// nums

console.log(Math.max(...nums1))