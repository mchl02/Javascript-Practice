//Index systems
console.log("Below will be code on arrays");


//Below is an array that contains the number 42
var arr = [42];

//Below is an array with the length of 42
var arr = Array(42);
//Below will also do the same thing
var arr = []

//Below will be populating an array
var emp = [];
emp[0] = "Matthew";
emp[1] = "Joseph";
emp[2] = "Gabe";

console.log(emp);

//Iterating through arrays in javascript
var arrayForIterating = ["Matthew", "Lee", "Program"];
for (var w = 0; w < arrayForIterating.length; w++){
    console.log(arrayForIterating[w]);
}


var colors = ['Red', 'Blue', 'Green'];
colors.forEach(function(color) {
    console.log(color);
});


//A bunch of built in functions can be used on this arrays
//Such as sort or reverse. No need to write them down and I should just look them up when I need them. 

var a = new Array(4);
for (i = 0; i < 4; i++) {
  a[i] = new Array(4);
  for (j = 0; j < 4; j++) {
    a[i][j] = '[' + i + ', ' + j + ']';
  }
}

//Start Keyed Collections

//Sets


