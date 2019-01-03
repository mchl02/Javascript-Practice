/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Cmd-R),
 * 2. Inspect to bring up an Object Inspector on the result (Cmd-I), or,
 * 3. Display to insert the result in a comment after the selection. (Cmd-L)
 */

//This is the beginning of when I started javascript programming
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


console.log("below this will be me making a switch/case");
var fruits = "Banana";
switch (fruits){
  case "Strawberries":
      console.log("Damn strawberries are pretty expensive nowadays...");
      break;
  case "Oranges":
      console.log("Dont you just love eating oranges in the hot weather?");
      break;
  case "Bananas":
      console.log("This is the most overrated fruit in my opinion..");
      break;
  default:
      console.log("Not going to lie, but you're fruit game is pretty weak....");
}

/*
throw 42;
throw true;
*/

/*
function getMonthName(months){
  months = months - 1;
  var months1111 = ['Jan','Feb','Mar','Apr','May','Jun','Aug','Jul','Aug','Sep','Oct','Nov','Dec'];
  
  if (months1111[months]){
    return months1111[months];
  }else{
    throw 'InvalidMonthNo';
  }
}

try {
  monthName = getMonthName(myMonth);
}
catch(e){
  monthName = 'unknown';
  logMyErrors(e);
}

console.log(monthName)
*/



var stepper;
for (stepper = 0; stepper < 5; stepper++){
  console.log("My name is Matthew Lee");
}

console.log("Below this is a do-while loop");
var testDoVariable = 0;
do {
  testDoVariable += 1;
  console.log(testDoVariable);
} while (testDoVariable < 5);
console.log("Below this is a while loop")
var num = 0;
var dum = 0;
while (num < 3){
  num++
  dum = num + dum
}

alert(dum)
console.log("Below this is a pointless loop")

var letterX = 0;
var letterY = 0;
labelledLoop: while(true){
  console.log('Outer loop: ' + x);
  letterX += 1;
  letterY += 1;
  while(true){
    console.log('Inner Loops: '+ letterY);
    letterY += 1;
    if (letterX == 10 && letterY == 10 ){
      break labelledLoop;
    } else {
      if (letterY == 10){
        break;
      }
    }
  }
}

console.log("This is my own loop YAY")

//This is still not finished
var daRealTest = 0;
var lettersX = 0;
var lettersY = 0;
var lettersZ = 0;
var lettersM = 0;
var lettersL = 0;
theRealLabelledLoop: while (daRealTest < 5){
  var testVariableForThisLoop = 0; 
  var testVariableForThisLoop1 = 1;
  var lettersX +=1;
  var lettersY +=1;
  var lettersZ +=1;
  
  theSecondRealLabelledLoop: while (testVariableForThisLoop<){
    
    theThirdRealLabelledLoop: while (testVariableForThisLoop1 < 5){
      if (testVariableForThisLoop1 == <7){
        console.log("Yo, will this run twice?")
        continue;
      }else{
        break theRealLabelledLoop;
      }
    }
      

  }
    
    
}

