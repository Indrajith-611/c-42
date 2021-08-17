/*data types - string, number, boolean, undefined, null
string = " "
number = numerical value
boolean = true/false
undefined
null
*/

//string
var a = "Indrajith"
console.log(a)

var a1 = "JAVASCRIPT"


//number
var b = 1
console.log(b)

//boolean
var c = true 
console.log(c)

//undefined
var d 
console.log(d)

//null
var e = null 
console.log(e)

//to convert any word into upperCase / lowerCase
console.log(a.toUpperCase())
console.log(a1.toLowerCase())

//to print a number inside the console without creating 
//a variable --> parseInt("anyNumber")
console.log(parseInt("2"))

//arithmetic operators = + - / * % 
console.log(5%2)
console.log(10*300)
console.log(1+ 2)
console.log(999-999)
console.log(999/6)

//comparative operators > , < , >= , <= , ===, !==
console.log(45!==55)
console.log(8>9)
console.log(9<1000)
console.log(0===1)

//conditional programming --> if()
if(3>2){
  console.log("3 is greater")
}
else{
  console.log("2 is greater")
}

//write an if condition to check if 10 is greater 
//or 100 is greater
if(100>10){
  console.log("100 is greater")
}
else{
  console.log("10 is greater ")
}

/*for loop - repeat 
for(initialisation;condition;increment/decrement)
for(when to start; when to stop; how to repeat){
what to repeat
}
*/
//to print numbers from 1 to 10
for(var i = 1; i <= 10; i = i + 1){
  console.log(i)
}

//print the odd numbers from 35 to 55
for(var i = 35; i <= 55; i = i + 2){
  console.log(i)
}










