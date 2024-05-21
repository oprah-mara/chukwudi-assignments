// declaring variables
// Variables declared with let are limited in scope to the block, statement, or expression in which they are used. This contrasts with var, which is function-scoped.
let name = "Amarachi";
//  (let is a keyword declaration, Name is object, amarachi is value and string in datatypes  )

let phoneNumber = 1;

// declaring multiple variables
let name1, name2; 
name1 = "cynthia";
name2 = "opr";
console.log(name1);
console.log(name2);

// The const keyword in JavaScript is used to declare variables that are meant to be constant values. This means that once a const variable is assigned a value, it cannot be reassigned. 
// In JavaScript, when we want to make a special box that always has the same thing inside, we use the word const. It’s like telling the computer, “This box can never change its toy!”

// creating a special box
const toybox = "Teddy bear";
// Trying to change the entire item in the box (although you cant change the toy in the box because you cant replate items in const)
// toybox = "Robot";

// You can change the order of the blocks or add more blocks, but you can't replace the whole box.

const blockBox = ["Block A", "Block B"];
// Changing Blocks Inside the Box

blockBox.push("Block C"); // This is okay
console.log(blockBox); // ["Block A", "Block B", "Block C"]

// What is var?
// Imagine you have a box where you can store a toy. You can put any toy inside this box, take it out, or replace it with another toy whenever you want. In JavaScript, var is like that box. It allows you to store a value 
// (like a number, word, or any data) and change it later if you need to.
var toy = "barbie";



// for loop
const fruits = ["Apple", "Orange", "Pear"];
fruits.forEach(function(fruits){
    // console.log(fruits)
});

const igboNames = ["Amara", "Opara"];
igboNames.forEach (fruits => console.log (igboNames));


let favFruits = ["apple", "orange", "mango"];
favfruits.forEach(function(fruit) { 
    console.log(fruit);
});
const names = ["amara", "opara", "cynthia"];
names.forEach((name)=>{
    console.log(name)
});



