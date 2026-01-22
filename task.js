// Print "Hello, World!" to the console.
console.log("Hello, World!")

// Create variables for your name and age, and print them.

let name = "Piyush";
let age = 18;
console.log("Name:",name,"Age:",age);

// Add two numbers and print the result.

a = 10;
b = 5;
console.log("Sum:",a+b);

// Combine two strings and print the result.

let FirstName = "Piyush";
let LastName = "Karekar";
console.log("FullName:",FirstName,"",LastName)

// Create an array of fruits and print it.

let Fruits=["Apple","Mango","Orange"];
console.log(Fruits)
// Print the first and last element of the array.

console.log(Fruits[0])
console.log(Fruits[Fruits.length-1])

// Print all fruits using a loop.

for(let i = 0 ;i<=Fruits.length;i++){
    console.log(Fruits[i]);
}
// Create a function that says hello.

function SayHello(name){
    console.log("Hello "  + name + "!");
}
 SayHello("Piyush");

let num = 0;
if(num < 0){
    console.log("its negative");
}
    else if(num>0){
    console.log("its positive");
}
    else{
    console.log("its Zero");
}

// Add, subtract, multiply, and divide two numbers.

let p = 10;
let c = 11;

console.log("Addition",p+c);
console.log("subtraction",p-c);
console.log("multipication",p*c);
console.log("divide",p/c);