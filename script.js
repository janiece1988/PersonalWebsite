console.log("Hi, My name is Janiece");

var name = "Janiece"; //declaring string in js
//in javascript you can reassign variables to any typer without casting 
name = 20;
name = true;
name = null; // null is an assigned value , null is an object
name = undefined;  // the cariable has been declared but, undefined is like saying it has not actual value yet
name = {name:"Ben"};
var dog; // this by default will evaluate to undefined

function greetStudent(){
       console.log("Hello student");
} 

greetStudent();

function multiply(a,b){

return a*b;
}

var result = multiply(2,5);

console.log(result);


var listOfPeople = ["John", "Julia", "Tiffany", "Cheo"];
listOfPeople[0]=10;
result = listOfPeople; //you can reassign veriables to an array if necessary

listOfPeople.push("Brandon");
listOfPeople.pop("Brandon"); // will remove Brandon
listOfPeople.pop();// will still remove Brandon w/o adding his name

for (var i = 0; i <listOfPeople.length; i++) {
    console.log (listOfPeople[i]);  


var userInput = prompt("Please enter your name");
console.log(userInput);

if(userInput === "Grant"){
	console.log("You got it right");
} else {
	console.log("You got it right");
}




