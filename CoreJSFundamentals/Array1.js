// Array methods like map, filter, reduce, some, every, find, sort

//map

const nums = [1, 2, 4, 5, 6, 3]

console.log(nums.map((a, b) => a * 2))//here a is the element b is its index and third parameter is an array

const result = nums.map((a, b, nums) => {
    if (b === nums.length - 1) return;
    return a + nums[b + 1]
})

console.log(result)

//here the result is this [ 3, 6, 9, 11, 9, undefined ] 
//because wee can not use map to skip or break at anaytime it will traverse the whole array

//for obtaining the sum of element correect were will use filter with map

//filter()

const filteredResult = nums.map((a, b, nums) => a + nums[b + 1]).filter((_,i)=>i !== nums.length-1)

console.log(filteredResult)

//here we filtered the last number after mapping and summing all elements

//every

console.log(nums.every(((n) => n%2==0)))

//find

console.log(nums.find((a) => a%5==0))

//reduce

console.log(nums.reduce((a,b) => a+b,0))//parameters are lik (accumulator,current)=>acc+curr,initialvalue

//Custom Array Method
//the array methods lives in Array.prototype

console.log(Array.prototype)//it gives all of the methods that are there

Array.prototype.ashishHello = function() {
    console.log("Ashish is saying Hola..!");
}

Array.prototype.localoca = function (callback) {
    const result = [];
    for(let i = 0; i < this.length; i++) {
        result.push(callback(this[i],i,this))
    }
    return result;
}

nums.ashishHello()

console.log("localoca:",nums.localoca((a) => a*2))

function onePlus(x) {
    return x+1;
}

Array.prototype.ekZyada = function (callback) {
    const result = [];
    for(let i = 0 ; i < this.length ; i++) {
        result.push(callback(this[i]))
    }   
    return result;
}

console.log(nums.ekZyada((a) => a+1))