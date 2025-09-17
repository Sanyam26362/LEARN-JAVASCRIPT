//const myArr = [0,1,2,3,4,5]
//console.log(myArr[2]);
//const heroes = ["shaktiman,bjee,"]
//const arr = new Array(4,5,7,9,5)
//console.log(arr);
//console.log(heroes)

const { useLayoutEffect } = require("react");

//arr.push(6)
//console.log(arr)
//arr.pop()
//arr.unshift(12)
//console.log(arr)
//arr.shift()
//console.log(arr)
//console.log(arr.includes(9));
//console.log(arr.indexOf(5))
//const newArr = arr.join();
//console.log(newArr)
//const new1 = arr.slice(4,9);
//console.log(arr)
//console.log(new1)
//const new2 = arr.splice(4,9)
//console.log(arr)
//console.log(new2)
const cousins_name = ["Harsh", "krishna","Anshul","kajal"]
const friends_name = ["Sambhav","Chirag","Harshit","Samriddhi","Shreya"]
friends_name.push(cousins_name)
console.log(friends_name);
const all_names = cousins_name.concat(friends_name)

const names = [...cousins_name, ...friends_name]
console.log(Array.isArray("sanyam"))
console.log(Array.from("sanyam"))