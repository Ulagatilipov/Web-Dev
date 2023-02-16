// //1
// let a = +prompt("Enter first number?", "");
// let b = +prompt("Enter second number?", "");
// alert( a + b );

// //2
// alert( 1.35.toFixed(1) ); // 1.4
// alert( 6.35.toFixed(1) ); // 6.3
// //because alert( 6.35.toFixed(20) ); // 6.34999999999999964473
// //and alert( 1.35.toFixed(20) ); // 1.35000000000000008882

//3
// function readNumber() {
//     let num;
    
//     do {
//         num = prompt("Enter a number:", 0);
//     } while (!isFinite(num))

//     if (num === null || num === "") return null;
//     return +num;
// } 

// alert(`Число: ${readNumber()}`);
// //4
// let i = 0;
// while (i != 10) {
//   i += 0.2;
// }
// //because this expression never will be exactly equal to 10
// //5
// function random(min, max) {
//     return min + Math.random() * (max - min);
// }
  
// alert( random(1, 5) );
// alert( random(1, 5) );
// alert( random(1, 5) );

//6
function randomInteger(min, max) {
    return Math.floor(min + Math.random() * (max - min + 1));
}
alert(randomInteger(1, 3));