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




console.log(o.a); // 7
console.log(o.b); // 8
o.c = 50;
console.log(o.a); // 25


//Object Initializer 
//Obj is name of the object
//property_i and value_i 
//Property_i = 
var obj = { property_1:   value_1,   // property_# may be an identifier...
            2:            value_2,   // or a number...
            // ...,
            'property n': value_n }; // or a string

//This will make x get this object if the cond is true 
if (cond) var x = {greeting: 'hi there'};

var myHonda = {color: 'red', wheels: 4, engine: {cylinders: 4, size: 2.2}};

//this is a car function and can be used for a car object
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

//Use the new, to make objects 

var kenscar = new Car('Nissan', '300ZX', 1992);
var vpgscar = new Car('Mazda', 'Miata', 1990);



//This is a person function and can be used for a person function 
function Person(name, age, sex) {
  this.name = name;
  this.age = age;
  this.sex = sex;
}

var rand = new Person('Rand McKinnon', 33, 'M');
var ken = new Person('Ken Jones', 39, 'M');

//You can add in an owner argument 
function Car(make, model, year, owner) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.owner = owner;
}

//Know in the arguments you can write the name of the owner 
var car1 = new Car('Eagle', 'Talon TSi', 1993, rand);
var car2 = new Car('Nissan', '300ZX', 1992, ken);

//If you want to find out the owner of the name, you can write the command for it. 
car2.owner.name

//If you want to add in a color function for the car property, all you have to do is the command below 
car1.color = 'black';

//object.create method below 
//Objects can also be created using the .create() method. 
//This allows you the protytpe object for the obejct you want to create without needing to decline the constructor funtion. 
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
//This will give the type of fishes 
fish.type = 'Fishes';
fish.displayType(); // Output:Fishes

//Below is inheritance and objects in JS inerites at least one other subject
//All objects in JS inherits at least one other object
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


var d = Date.prototype;
Object.defineProperty(d, 'year', {
  get: function() { return this.getFullYear(); },
  set: function(y) { this.setFullYear(y); }
});


var now = new Date();
console.log(now.year); // 2000
now.year = 2001; // 987617605170
console.log(now);
// Wed Apr 18 11:13:25 GMT-0700 (Pacific Daylight Time) 2001



var o = { a: 0 };

var o = {
  a: 7,
  get b() { return this.a + 1; },
  set c(x) { this.a = x / 2; }
};


Object.defineProperties(o, {
    'b': { get: function() { return this.a + 1; } },
    'c': { set: function(x) { this.a = x / 2; } }
});

o.c = 10; // Runs the setter, which assigns 10 / 2 (5) to the 'a' property
console.log(o.b); // Runs the getter, which yields a + 1 or 6

