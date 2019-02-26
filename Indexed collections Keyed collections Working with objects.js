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

console.log(a); 

//Start Keyed Collections

//MAPS
//MAPS: key/value map
var sayings = new Map();
sayings.set('dog', 'woof');
sayings.set('cat', 'meow');
sayings.set('elephant', 'toot');
sayings.size; // 3
sayings.get('fox'); // undefined
sayings.has('bird'); // false
sayings.delete('dog');
sayings.has('dog'); // false

for (var [key, value] of sayings) {
  console.log(key + ' goes ' + value);
}
// "cat goes meow"
// "elephant goes toot"

sayings.clear();
sayings.size; // 0

//Regular Sets
// *Values can only appear once* 
var mySet = new Set();
mySet.add(1);
mySet.add('some text');
mySet.add('foo');
mySet.add('So Much Work!!!')

mySet.has(1); // true
mySet.delete('foo');
mySet.size; // 2

for (let item of mySet) console.log(item);
// 1
// "some text"
//Keys

//Changing Arrays to Sets
var myOwnSet = new Set(); 
myOwnSet.add(47);
myOwnSet.add(47);
myOwnSet.add('Hello');
myOwnSet.add('Hello');

//One way to transfer
var hello = Array.from(myOwnSet);
console.log("This is the main test"); 
console.log(hello); 
//Another way to transfer
//Spread syntax


mySet2 = new Set([1, 2, 3, 4]);
var bestSet = [...mySet2];
console.log(bestSet); 
//Working with objects
// Animal properties and method encapsulation
var Animal = {
  type: 'Invertebrates', // Default value of properties
  displayType: function() {  // Method which will display type of Animal
    console.log(this.type);
  }
};

// Create new animal type called animal1 
var animal1 = Object.create(Animal);
animal1.displayType(); // Output:Invertebrates

// Create new animal type called Fishes
var fish = Object.create(Animal);
fish.type = 'Fishes';
fish.displayType(); // Output:Fishes

//Deafult Object Example

var myCar = new Object();
myCar.make = 'Ford';
myCar.model = 'Mustang';
myCar.year = 1969;


myCar['make'] = 'Ford';
myCar['model'] = 'Mustang';
myCar['year'] = 1969;

var propertyName = 'make';
myCar[propertyName] = 'Ford';

propertyName = 'model';
myCar[propertyName] = 'Mustang';
//Making Objects
var myComputerSetup = new Object();
myComputerSetup.mouse = 'Razer Deathadder';
myComputerSetup.keyboard = 'Ducky 1';
myComputerSetup.headphone = 'KGH Heaphones';


//Properties of objects that do not exist go to undefined 


//Creating objects another way 
myComputerSetup['mouse'] = 'Razer Deathadder';
myComputerSetup['keyboard'] = 'Ducky 1';
myComputerSetup['headphone'] = 'KGH Heaphones';

var myObj = new Object(),
    str = 'myString',
    rand = Math.random(),
    //through testing, this is unnecessary
    obj = new Object();

myObj.type              = 'Dot syntax';
myObj['date created']   = 'String with space';
myObj[str]              = 'String value';
myObj[rand]             = 'Random Number';
myObj[obj]              = 'Object';
myObj['']               = 'Even an empty string';

console.log("test")
console.log(myObj); 

//testing how to create objects
var myLeagueObject = new Object(),
    str1 = 'league string';
myLeagueObject[str1] = "Will this work?";
console.log(myLeagueObject)


//Fujction that loops iterates over objects
function showProps(obj, objName) {
    var result = '';
    for (var i in obj) {
      // obj.hasOwnProperty() is used to filter out properties from the object's prototype chain
      if (obj.hasOwnProperty(i)) {
        result += objName + '.' + i + ' = ' + obj[i] + '\n';
      }
    }
    return result;
}
console.log("Testing to see if function works");
showProps(myCar, "myCar");
console.log(myComputerSetup, "myComputerSetup");
// Animal properties and method encapsulation
var Animal = {
  type: 'Invertebrates', // Default value of properties
  displayType: function() {  // Method which will display type of Animal
    console.log(this.type);
  }
};

// Create new animal type called animal1 
var animal1 = Object.create(Animal);
animal1.displayType(); // Output:Invertebrates

// Create new animal type called Fishes
var fish = Object.create(Animal);
fish.type = 'Fishes';
fish.displayType(); // Output:Fishes


//get and set in javascript
var o = {
  a: 7,
  get b() { 
    return this.a + 1;
  },
  set c(x) {
    this.a = x / 2;
  }
};

console.log(o.a); // 7
console.log(o.b); // 8
o.c = 50;
console.log(o.a); // 25



