// Level 2 – Functional Thinking & Logic Tasks (Intermediate)

// 1. Write a higher-order function runTwice(fn) that takes another function and executes it two times.

function runTwice(fn){   
    fn()
    fn()
}

runTwice( function fn(){
    console.log("hello")
})


// 2. Create one pure function that always returns the same output for a given input, and one impure function using a global variable.

let pure = function pure(a){
    return a
}
console.log(pure(5)); 

let global = 0
let impure = function impure(a){
    global++
    return a+global
}
console.log(impure(5)); 


// 3. Write a function that uses object destructuring inside parameters to extract and print name and age.

function destructuring({name, age}){
    console.log(name, age)
}

destructuring({name: "mannat", age: 20})


// 4. Demonstrate the difference between normal function and arrow function when used as object methods (the this issue).

let normal = {
    nf: function(){
        console.log(this)
    }
}
normal.nf()

let arrow = {
    af: ()=>{
        console.log(this)
    }
}
arrow.af()


// 5. Given an array of numbers, use map() to create a new array where each number is squared.

let arr = [1, 2, 3, 4, 5, 6, 7, 8]
let mapA = arr.map(function(val){
    return val*val
})
console.log(mapA)


// 6. Use filter() to get only even numbers from an array.

let arr2 = [1, 2, 3, 4, 5, 6, 7, 8]
let filterA = arr2.filter(function(val){
    if(val%2 == 0) return val
})
console.log(filterA)


// 8. Create an array of names and use some() and every() to test a condition (e.g., all names longer than 3 chars).

let arr3 = ["mannat", "om", "vansh", "ishan", "abhay", "vbhanshu", "jai", "ayush"]
let some = arr3.some(function(val){
    return val.length>3
})
console.log(some);

let every = arr3.every(function(val){
    return val.length>3
})
console.log(every);


// 9. Create an object user and test the behavior of Object.freeze() and Object.seal() by adding/changing keys.

let obj = {
    name: "mannat",
    age: 20
}

Object.seal(obj)
Object.freeze(obj)
obj.sex= "male"
obj.name = "hello"


// 10. Create a nested object (user → address → city) and access the city name inside it.

let user ={
    address: {
        city: "udhampur"
    }
}

console.log(user.address.city)