console.log("hello world")
console.log("what is your name?")
// window.alert("hello world")
// Path: javaScripts\index.js
//data types in javascript
//string
var name = "john"
console.log(name)
//number
var age = 20
console.log(age)
//boolean
var bool = true
console.log(bool)
//undefined
var object
console.log(object)
//null
object = null
console.log(object)
//array
var arr1 = [1,2,3,4,5]
console.log(arr1)
//array of different data types
var arr2 = ["name",12,true]
console.log(arr2)
var arr3 = [[1,2],[3,4],[5,6]]
console.log(arr3)
console.log(arr3[0])
console.log(arr3[0][0])
console.log(arr3[0][1])
console.log(arr3[1][0])

arr3.push("my name")
console.log(arr3)
arr3.pop()
console.log(arr3)
// typeof operator
//what is typeof operator means it is used to find the data type of the variable
console.log(typeof(name))
console.log(typeof(age))
console.log(typeof(bool))
console.log(typeof(object))
console.log(typeof(arr1))
console.log(typeof(arr2))
console.log(typeof(arr3))
// Path: javaScripts\index.js
function sum(a,b){
    return a+b
}
console.log(sum(10,20))
console.log(sum(20,30,40))
console.log(sum(10))
console.log(sum("hello","world"))
console.log(sum("hello",10))
console.log(sum(true,false))
console.log(sum(true,10))
console.log(sum(10,true))
console.log(sum(10,"hello"))
console.log(sum(10,20,30,40,50,60,70,80,90,100))


console.log(typeof(d))

let student=20
student=student+1
student=student-1
student=student*2
student=student/2
student++
console.log(student)

// input and output
// let username=window.prompt("enter your name")
// console.log(username)

let username
document.getElementById("btn").onclick=function(){
    username=document.getElementById("name").value
    console.log(username)
    document.getElementById("mylavel").innerHTML="hello "+username
}

// type conversion in javascript
// let num1="10"
// let num2="20"
// console.log(num1+num2)
// console.log(Number(num1)+Number(num2))
// console.log(parseInt(num1)+parseInt(num2))
// x=Number("10")
// y=String(10)
// z=Boolean(10)
// console.log(x)
// console.log(y)
// console.log(z)
// console.log(typeof(x))
// console.log(typeof(y))
// console.log(typeof(z))

// const keyword means constant
// const means we can not change the value of the variable
const PI=3.14
let radius=10
let area=PI*radius*radius
console.log(area)

let x=3.14
let y=3.14
x=Math.round(x)
y=Math.ceil(y)
console.log(x)
console.log(y)


// String finds and replace functions
let str="hello world"
console.log(str.length)
console.log(str.indexOf("l"))
console.log(str.lastIndexOf("l"))
console.log(str.slice(2,5))
console.log(str.replace("hello","hi"))
console.log(str.toUpperCase())
console.log(str.toLowerCase())
console.log(str.charAt(4))
console.log(str[4])
console.log(str.split(" "))
console.log(str.split(""))
console.log(str.split("l"))
console.log(str.split("l",1))
console.log(str.split("l",2))

// comparison operators
// ==,===,!=,!==,<,>,<=,>=
""==0;
// 0==false;
// 0===false;
// false==0
// false===0

// if else statement
let age1=20
if(age1>=18){
    console.log("you are eligible for voting")
}
else{
    console.log("you are not eligible for voting")
}

// if else if statement
let age2=20
if(age2>=18){
    console.log("you are eligible for voting")
}
else if(age2==17){
    console.log("you are not eligible for voting")
}
else{
    console.log("you are not eligible for voting")
}
let user=""
while(user==""|| user==null){
    user=window.prompt("enter your name")
}
console.log("hello",user)

var a=0
var str1="not a"
var b='';
b=a===0?(a=1,str1+='test'):(a=2);