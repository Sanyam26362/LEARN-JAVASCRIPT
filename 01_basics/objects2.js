//const tinderUser = new Object()  //singleTon object

const tinderUser = {}
tinderUser.id= 123
tinderUser.name = "Hitesh"
tinderUser.loggedIn = true;
//console.log(tinderUser);

const regularUser = {
    email:"sanyam2410147@akgec.ac.in",
    fullName : {
        broregularName: {
            firstName : "Sanyam",
            lastName : "Agarwal"
        }
    }
}
//console.log(regularUser.fullName.broregularName.firstName);
const obj1 = {1:"a",2:"b"};
const obj2 = {3:"c",4:"d"};
const obj3 = {5:"e" , 6:"f"}
//const obj4 = Object.assign({},obj1,obj2,obj3);
const obj4= {...obj1,...obj2,...obj3};
//console.log(obj4);
const users = [
    {
        id:1,
        email:"sanyam2410147@akgec.ac.in"
    },
    {
        id:2,
        email:"chirag2410147@akgec.ac.in"
    },
    {
        id:3,
        email:"harshit2410147@akgec.ac.in"
    },
]
//console.log(users[2].email)
//console.log(Object.keys(tinderUser));
//console.log(Object.values(tinderUser));
//console.log(Object.entries(tinderUser));



const course = {
    course:"JSON",
    courseInstructor:"Hitesh Choudhary"
}
const {courseInstructor: a} = course;
console.log(a);




