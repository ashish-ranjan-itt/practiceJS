//rest example

const nums = [1,2,3,5,6,7,9]

function add (b,a,...nums) {
    return a+b+(nums.reduce((a,b) => a+b))
}

for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}