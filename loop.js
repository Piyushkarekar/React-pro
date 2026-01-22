// Task 1: Print numbers 1 to 5.....here how we say i is less or equal to 5

for(let i =0;i<=5;i++){
    console.log(i);
}
// Task 1: Print numbers 1 to 5 ..... here how we say i is less or equal to 10
for(let i =0;i<=10;i++){     
    console.log(i);
}
// Task 2: Print numbers 5 to 1..... here how we say i greater or equal to 1 and we have use decrement sign also
for(let i =5;i>=1;i--){
    console.log(i);
}

// Task 3: Print "Hello" 3 times

for(let i =0 ;i<=3;i++){
    console.log("hello world")
}

// Print all numbers in an array
let nums = [10, 20, 30, 40];
for(let i =0;i<nums.length;i++){
    console.log(nums[i]);
}

// Task 5: Print all names
let names=["Piyush","aryan","Jayraj"]

for(let name of names){
    console.log(name)
}


// Task 6: Print only even numbers and only odd

let numbers=[1,2,3,4,5,6,7,8,9,10]

for(let num of numbers){
    if (num%2 == 0){
        console.log(num)
    }
}

for(let num of numbers){
    if(num%2 !=0){
        console.log(num)
    }
}

// Task 8: Print colors using length

let colors =["Orange","Red","Pink","Yellow"];

for(let color of colors){
    console.log(color)
}

// another way 

for(let i =0; i <colors.length;i++){
    console.log(colors[i]);
}
// Task 9: Add all numbers
let numso=[1,2,3,4,5];
let sum = 0;

for(let num of numso){
    sum += num
}
console.log(sum)


let Fruits =["Apple","Mango","Pear","Graps"]

for(let [i,Fruit] of Fruits.entries()){
    console.log(i,Fruits[i])
}