function square(number){
    return number*number;
}
console.log(square(24));


function changingVariable(aVariable){
    aVariable.make = "Mercedes"
}

var makingCars = {make: "BMW", Isit: "Benz"};
changingVariable(makingCars);
var thisVariable = makingCars.make
console.log(thisVariable)

function multitudeOfActions(f,a){
    var result = [];
    var i;
    for (i = 0; i != a.length; i++){
        result[i]= f(a[i]);
    }
    return result;

}
var f = function(cubing){
    return cubing * cubing * cubing;
}
var anArray = [1,2,3,4,5,6];
var cube = multitudeOfActions(f,anArray);
console.log(cube); 

console.log("Below will be my attempt to make a factorial function");

function factorial(numberBig){
    if (numberBig == 0 || numberBig == 1){
        //will have to be 1 because you are multiplyiing it at the end
        return 1;
    }else{
        return numberBig*factorial(numberBig-1);
    }
}

console.log(factorial(4));
console.log(factorial(1));


function foo(letteri){
    if (letteri<0){
        return;
    }
    console.log('beginning ' + letteri);
    foo(letteri-1);
    console.log('ending ' + letteri);
}

console.log(foo(3));

/* 
first thing is 3: 
it is then foos turn to get run: 
foo(2) 
second thing is 2
foo(1)
third thing is 1
foo (0)
fourth thing is 0
ending is 0, because this is what happens when foo(0) ends
ending is 1, because this is from the end function foo(1) 
ending is 2, because this from the end funciton foo(2)
ending is 3, because this from the end function foo(3)
and ths program closes which leads to the result to be called. 
*/

function Person() {
    this.age = 0;
  
    setInterval(() => {
      this.age++; // |this| properly refers to the person object
    }, 1000);
  }
  
  var p = new Person();
  console.log(p)

var x = [0,1,2,3,4,5,6,7,8,9]
var a = [x, x, x, x, x];

for (var i = 0, j = 9; i <= j; i++, j--)
  console.log('a[' + i + '][' + j + ']= ' + a[i][j]);

if (justtheDay instanceof Date){
    return "lol";
}
//Edits after

var justtheDay = new Date(1995, 12, 17);
if (justtheDay instanceof Date){
    return "lol";
}
console.log("Am I stuck in a for loop?");
var today = new Date();
console.log(today);

const hello = 'Hello, World!';
const helloLength = hello.length;
hello[0] = 'L'; // This has no effect, because strings are immutable
hello[0]; // This returns "H"

const names = ["George","Michael","Dylan"];
console.log(names.sort().join(', '));
const msPerDay= 24*60*60*1000;
const datesMenu = new Date(msPerDay * (44 * 365 + 11 + 197));

const options = { year: '2-digit', month: '2-digit', day: '2-digit',
                hour: '2-digit', minute: '2-digit', timeZoneName: 'short' };
const americanDateTime = new Intl.DateTimeFormat('en-US', options).format;
 
console.log(americanDateTime(datesMenu));
//Regular expressions are used to search for specific key words (Searching)
var myRe = new RegExp('d(b+)d', 'g');
var myArray = myRe.exec('cdbbdbsbz');
console.log(myArray);


var re = /\w+\s/g;
var str = 'fee fi fo fum';
var myArray = str.match(re);
console.log(myArray);

// ["fee ", "fi ", "fo "]


