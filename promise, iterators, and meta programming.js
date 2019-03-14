//A Promise is an object representing the eventual completion or failure of an asynchronous operation.
//Format of a promise: new Promise( /* executor */ function(resolve, reject) { ... } );
//The constructors of the promise accpets a function called executor. The executor function acepts resolve and reject. 
//If the asynchrnous operations are successful thent the resolve function is created instead, else the rejected one is called instead.  


var keepsHisWord;
keepsHisWord = true;
promise1 = new Promise(function(resolve, reject) {
  if (keepsHisWord) {
    resolve("The man likes to keep his word");
  } else {
    reject("The man doesnt want to keep his word");
  }
});
console.log(promise1);


promise2 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve({
      message: "The man likes to keep his word",
      code: "aManKeepsHisWord"
    });
  }, 10 * 1000);
});
console.log(promise2);

keepsHisWord = false;
promise3 = new Promise(function(resolve, reject) {
  if (keepsHisWord) {
    resolve("The man likes to keep his word");
  } else {
    reject("The man doesn't want to keep his word");
  }
});
console.log(promise3);
