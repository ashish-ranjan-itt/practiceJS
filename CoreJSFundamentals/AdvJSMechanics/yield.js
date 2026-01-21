// use of yield

function* gen() {
  console.log("Start");
  yield 1;
  console.log("Middle");
  yield 2;
  console.log("End");
}

const g = gen()
g.next()
g.next()

function* range(start, end) {
  for (let i = start; i <= end; i++) {
    yield i;
    console.log(i)
  }
}

const rangeFun = range(1,5)
rangeFun.next()
rangeFun.next()

function* gen2 () {
    const x = yield + 1
    console.log("hello",x)
    yield
    console.log("hello2",x)
}

const lolo = gen2()
lolo.next()
lolo.next(100)
lolo.next()
// lolo.next(200)

function* Paginate (items, pageSize) {
    for(let i = 0 ; i < items.length ; i += pageSize) {
        yield items.slice(i,i+pageSize)
    }
}

const data = [1,2,3,4,5,6,7,8,9,10]
const pagination = Paginate(data,3)
console.log(pagination.next())
console.log(pagination.next())
console.log(pagination.next())
console.log(pagination.next())