// string concatenation: uses + operator to join two or more strings together.
const firstName= "John";
const lastName= "Doe";
const fullName= firstName + "" +lastName
console.log(fullName);

// note: space plus "" in a string adds space in a string because it counts as a character 
// example 2
function myInfo(fname, lname, country) {
    return "My name is " + fname + " " + lname + ". " + country + " is my favorite country.";
  }
  console.log(myInfo("john", "doe", "India"));

//   string interpolation use backticks (``) and ${expressions} to embed expressions directly into the string
const firstname= "Amarachi";
console.log(`hello ${firstname}`);
// arithematic expressions in interpolation
const a = 5;
const b = 10;
const sum = `The sum of ${a} and ${b} is ${a + b}.`;
console.log(sum); // Output: "The sum of 5 and 10 is 15."

// Function Calls in string interpolation
function getFullName(firstName, lastName, nickname){
  return `${firstName} ${lastName}`;
}

const fullname = getFullName("John", "Doe", function(){

});
console.log(fullname); // Output: "John Doe"

// operators
// comparism operator
// arithematic operators
// String operator
// logical operators

// note != also represents ==  and !== represents ===
// 0 represents false and 1 represents 
// for in loop
const myRoom= {
    Table: "Black",
    Bed: "Beige",
    Trashcan: "Teal"
};
for(let roomProperties in myRoom){
  console.log(myRoom);
}
// for of loop
const students = ['John', 'Doe'];

for (let student of students) {
  console.log(student);
}
  
// let shoppingList = [];
// shoppingList.push("orange", "books", "house");
// shoppingList.pop();
// shoppingList.unshift("money", "house");
// console.log(shoppingList);
// shoppingList.shift();
// console.log(shoppingList);

// let favoriteMovie ={
//     title: "Exhuma",
//     genre: "Horror",
//     year: "2024",
//     mainCharacters:["go eun", "Ama", "rah"],
//     describeMovie: function(){
//         console.log("my fav movie is "  + this.title +  " the title is "+ this.genre + " it was released in "+ this.year)
//     }
    
// }
// favoriteMovie.describeMovie();
// favoriteMovie.director = "Amarachi";
// console.log(favoriteMovie);

// const myRoom= {
//     Table: "Black",
//     Bed: "Beige",
//     Trashcan: "Teal"
// };
// for(let roomProperties in myRoom){
// //   console.log(myRoom);
// }
// const students= ['Amarachi','cynthia', 'opara']
// for(let student of students){
    // console.log(student);
// }
// const myIdCard = {
//     Name: "Chukwudi",
//     height: "6ft",
//     age: 25,
//     car: "lamboghini"
//     };
//     for(let cardDetail in myIdCard){
//         console.log(myIdCard[cardDetail]);
//     }
    // console.log(myIdCard.Name)


    let favFruits = ['apple', 'orange', 'mango'];
    favFruits.forEach(function(fruits){
      console.log(favFruits)
    })