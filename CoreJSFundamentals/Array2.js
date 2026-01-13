//array destructuring

const nums = [1,3,9,20000]
const [roll,rank,room,salary] = nums
console.log(salary)

//object destructuring

const user = {
    uName:"ashish",
    uRoll:"1",
    uRank:"3",
    uSalary:"20000"
}

const {uName, uSalary} = user

console.log(uSalary)

//shallow copy

const arr = [...nums] //using spread operator
arr[0] = 2
console.log(arr)
console.log(nums)

const obj = {...user} //using spread operator for object
obj.uName = "ayush"
console.log(obj.uName)
console.log(obj)
console.log(user.uName)

const copy = Object.assign({},obj)//object.assign is getting used for shallow copy
console.log(copy)

//multilayered object has a problem
//shallow copy creates new valuesonly for one level nt deep nested levels (those are still there by refrence)
//Shallow copy copies the container, not the object

const multiLayerObj = {
    name:"ashish",
    specs: {
        localoca:"tokatoka"
    }
}

const copyMLO = {...multiLayerObj}
copyMLO.specs.localoca = "nokonoko"

console.log(multiLayerObj.specs.localoca)

//deep copy

const multiLayerObj2 = {
    name:"ashish",
    specs: {
        localoca:"tokatoka"
    }
}

const copyMLO2 = structuredClone(multiLayerObj2)// see how we used structured clone over here for deep copy
copyMLO2.specs.localoca = "nokonoko"

console.log(multiLayerObj2.specs.localoca)