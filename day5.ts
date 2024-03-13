//Write a program that uses filter to remove all negative numbers from an array of numbers
let a=[1,-2,3,4,-5]
function callbackFn (num:number,i:number){
if(num>0){
    return num
}
}
const b= a.filter(callbackFn)
console.log(b)

//Given an array of numbers [1, 2, 3, 4, 5], use the map method to create a new array where each number is multiplied by 2.
let myArray=[1,2,3,4,5]
function mulByTwo(num:number,i:number){
  num=num*2
  return num
}
const c=myArray.map(mulByTwo)
console.log(c)


//Given an array of strings ["apple", "banana", "cherry", "date", "grape"], use the filter method to create a new array containing only the fruits with more than 5 characters.
let fruits=["apple", "banana", "cherry", "date", "grape"]
function fiveLetters(fruit:string,i:number){
if(fruit.length>5){
    return fruit
}
}
const d=fruits.filter(fiveLetters)
console.log(d)


//Given an array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], use the map and filter methods together to create a new array containing the squares of even numbers.
let newArray=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function evenMultiple(num:number,i:number){
if(num%2===0){
    num=num*2
    return num
} 
}
const e=newArray.map(evenMultiple)
console.log(e)
const f=newArray.filter(evenMultiple)
console.log(f)



//Given an array of temperatures in Celsius [0, 10, 20, 30, 40], use the map method to create a new array where each temperature is converted to Fahrenheit using the formula (Celsius * 9/5) + 32.
let tempArray=[0, 10, 20, 30, 40]
function celToFer(num:number,i:number){
  num=(num * 9/5) + 32 
  return num 
}
const g=tempArray.map(celToFer)
console.log(g)


//Given an array of numbers [3, 6, 9, 12, 15, 18], use the map and filter methods together to create a new array containing the doubled values of odd numbers.
let numArray=[3, 6, 9, 12, 15, 18]
function oddMultiple(num:number,i:number){
if(num%2!==0){
    num=num*2
    return num
} 
}
const h=numArray.map(oddMultiple)
console.log(h)
const j=numArray.filter(oddMultiple)
console.log(j)


//Given an array of names ["Alice", "Bob", "Charlie", "David", "Emily"], use the forEach method to log each name with an exclamation mark at the end, e.g., "Alice!".
let names=["Alice", "Bob", "Charlie", "David", "Emily"]
names.forEach((name) => {
    console.log(`${name}!`);
})

