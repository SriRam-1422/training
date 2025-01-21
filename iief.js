// // // let myObject = (() => {
// // //     return {
// // //         name: "John Doe",
// // //         age: 30,
// // //         greet: () => {
// // //             console.log("Hello, my name is John Doe!");
// // //         },
// // //     };
// // // })();

// // // // Using the object
// // // console.log(myObject.name); // Output: John Doe
// // // console.log(myObject.age); // Output: 30

// // // myObject.greet(); // Output: Hello, my name is John Doe!


// // console.log("without Using new keyword");
// // let arr= [1, 2, "Ram", 4,"Sri"];
// // arr.push(5);
// // console.log(arr);

// // // using new keyword
// // console.log("Using new keyword");
// // let arr1 = new Array(1, 2, "Ram", 4,"Sri");
// // console.log(arr1);

// let obj ={
//     name: "John Doe",
//     age: 30,
//     greet: function(){
//         console.log("Hello, my name is John Doe!");
//         console.log("My age is 30");
//     }
// }
// console.log(obj.name);
// console.log(obj.age);
// obj.greet();

// let person = new Object();
// person.name = "John Doe";
// person.age = 30;
// person.greet = function() {
//     console.log("Hello, my name is " + this.name);
// };
// console.log(person.name); 
// person.greet();           

function Person(name, age) {
    this.name = name;
    this.age = age;
    };
let person1 = new Person("John Doe", 30);
console.log(person1.name); 
console.log(person1.age); 
