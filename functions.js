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
