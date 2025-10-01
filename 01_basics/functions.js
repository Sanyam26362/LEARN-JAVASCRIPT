const { use } = require("react");

function sayMyName() {
    console.log("S");
    console.log("A");
    console.log("N");
    console.log("Y");
    console.log("A");
    console.log("M");
    
};
//sayMyName();   
// function addTwoNumbers(number1, number2) {
//     console.log(number1+number2);

// };
function addTwoNumbers(number1, number2) {
    return number1+number2;

};
//console.log(addTwoNumbers(3,5));

// function loginUserMessage(userName) {
//     return `${userName} just logged in`
// }
//console.log(loginUserMessage("Sanyam"));
// function loginUserMessage(userName="NO ONE") {
//     if(!userName) {
//         console.log("Please enter a userName");
//         return;
//     }
//     return `${userName} just logged in`;
// }
// //console.log(loginUserMessage());
// // function calculateCartPrice(...num1) {
// //     return num1
// // }
// console.log(calculateCartPrice(200,400,500,1000));
// function calculateCartPrice(val1,val2,...num1) {
//     return num1
// }
// console.log(calculateCartPrice(200,400,500,1000));
// const user = {
//     userName: "Sanyam",
//     price: 199
// }
// function handleObject(anyObject){
//     console.log(`UserName is ${anyObject.userName} and price is ${anyObject.price}`);
// }
// //handleObject(user);
// handleObject ({
//     userName : "bro",
//     price: 199
// })
const myNewArray =[400,500,600,800];
function getValue(myArray) {
    return myArray[1];
}
//console.log(getValue(myNewArray));
console.log(getValue([100,200,300,400]));