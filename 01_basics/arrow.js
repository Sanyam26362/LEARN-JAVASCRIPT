const user={
    userName:"hitesh",
    price:999,
    welcomeMessage: function() {
        console.log(`${this.userName} , welcome to website`);
        console.log(this);
        
    }

}
// user.welcomeMessage();
// user.userName="sanyam";
// user.welcomeMessage();
//
//chai();
// const addTwo = (num1,num2) => {
//     return num1+num2;
// }
//console.log(addTwo(3,4));
// const addTwo = (num1,num2) => (num1+num2);
// console.log(addTwo(3,4));
// const myArray=[2,5,3,7,8];
// myArray.forEach();
const addTwo =(num1,num2) => ({userName:"hitesh"});
console.log(addTwo(3,4));