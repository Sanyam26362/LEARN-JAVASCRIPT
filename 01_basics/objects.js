const jsUser = {
    name: "Sanyam ",
    age:20,
    email:"sanyam2410147@akgec.ac.in",
    "fullName" : "Sanyam Agarwal",

}
// console.log(jsUser.name);
// console.log(jsUser.fullName);
// console.log(jsUser["fullName"]);
jsUser.greeting = function(){
        console.log("Hello");
}
console.log(jsUser.greeting());
jsUser.greetingTwo = function() {
    console.log(`hello JS USER, ${this.name}`);

}
console.log(jsUser.greetingTwo());