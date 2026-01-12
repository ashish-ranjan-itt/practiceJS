//rest example

const nums = [1,2,3,5,6,7,9]

function add (b,a,...nums) {
    return a+b+(nums.reduce((a,b) => a+b))
}