/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Cmd-R),
 * 2. Inspect to bring up an Object Inspector on the result (Cmd-I), or,
 * 3. Display to insert the result in a comment after the selection. (Cmd-L)
 */

//Ahh the language where you need semi colons, sigh. one thing I liked about swift...
function greetMe(yourName) {
  alert('Hello' + yourName);
}
greetMe('world');
if (true) {
  var a = 5;
}
console.log(a);
/*
undefined
*/


//This should return true
console.log(thisShouldNotWork === undefined)
var thisShouldNotWork = 5;
var x = 3;
console.log(x);

var myVar = 'This Is A String';
alert(myVar)

console.log("Below this is the thing I want to test")
//This function below will cause errors however, will still allow the code to be run perfectly
/*
(function() {
  myVar;
  console.log(myVar);
  var myWar = "This is A String In A Local Value";
})();
*/

console.log("below this will start testing for functions");
//Below this will start testing for functions

foo(); // "bar" and this should work 

function foo() {
  console.log('bar');
}

foo(); //This should work

console.log("Below this should be for variables testing");

var firstVariableTest = 42;
firstVariableTest = "Does the 42 get replaced";

var addingVariables = firstVariableTest + "Wow this really worked!";
console.log(firstVariableTest);
console.log(addingVariables);
/*
Do This For Later
function testTheDifferentTypeOfVariables(){
  console.log(firstVariableTest)
}
*/
//console.log(testTheDifferentTypeOfVariables())
console.log(47-2);
var fakeArray = ["Ali","Misha","Doug"];
console.log(fakeArray);



var sales = "BMW"

function carTypes(name){
  if (name == "BMW"){
    return name;
  }else{
    return "Sorry you got that wrong car " + name + " Is too expensive";
  }
}

var car = {myCar: 'Saturn', anotherCar: carTypes('Honda'), finalCar: sales};
var anotherCar = { manyCars: {a: "Jeep", b: "Benz"}, 7:"Mazda" };

console.log(car.myCar);
console.log(car.anotherCar);
console.log(car.finalCar);

console.log(anotherCar.manyCars.a);
console.log(anotherCar.manyCars.b);
console.log(anotherCar[7])


var anotherCar1 = {
  '':'This is an empy string',
  '!':'This is an exclamation mark'
}

console.log(anotherCar1['']);
console.log(anotherCar1['!']);



var newFoo = {a: 'alpha', 2: 'two'};
console.log(newFoo.a);
console.log(newFoo[2]);
console.log(newFoo['a']);
console.log(newFoo['2']);
console.log("did this work?");
var thisNewString = "hello this is the new string operator";
console.log(thisNewString.length);


function asdf(word){
  if (word.length > 35){
    return "This is a long word";
  }else{
    return "This is a short word";
  }
}

var makeThisStringForTest = "This is a string";
console.log(asdf(makeThisStringForTest));


console.log("below this will be me making a switch/case")
switch (fruits){
  case "Strawberries":
      console.log("Damn strawberries are pretty expensive nowadays...");
      break;
  case "Oranges":
      console.log("Dont you just love eating oranges in the hot weather?")
      break;
  case "Bananas":
      console.log("This is the most overrated fruit in my opinion..")
      break;
  default:
      console.log("Not going to lie, but you're fruit game is pretty weak....")
}

