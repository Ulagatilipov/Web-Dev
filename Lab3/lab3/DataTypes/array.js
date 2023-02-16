// //1
// let fruits = ["Apples", "Pear", "Orange"];

// // push a new value into the "copy"
// let shoppingCart = fruits;
// shoppingCart.push("Banana");

// // what's in fruits?
// alert( fruits.length ); // 4

// //2
// let styles = ['Jazz', 'Blues'];
// styles.push("Rock-n-Roll");
// styles[Math.floor((styles.length - 1) / 2)] = "Classics";
// alert( styles.shift() );
// styles.unshift("Rap", "Reggae");

// //3
// let arr = ["a", "b"];

// arr.push(function() {
//   alert( this );
// })

// arr[2](); // a,b,function(){...}

//4
function sumInput() {
    let sum = 0;
    while (true) {
  
      let value = prompt("A number please?", 0);
  
      if (value === "" || value === null || !isFinite(value)) break;
  
      sum += (+value);
    }
  
    return sum;
  }
  
  alert( sumInput() );
  