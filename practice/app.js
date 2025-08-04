// 1) Write a program that checks whether a number is even or odd.
// let num = Number(prompt("enter any number"));
// console.log(num % 2 === 0 ? `${num} is Even number` : `${num} is Odd number`)

// 2) If someone's age is more than or equal to 18, print "Eligible to vote", otherwise print "Not eligible".
// let age = Number(prompt("enter any number"));
// console.log(age >= 18 ? "Eligible to vote" : "Not eligible")

// 3) Print numbers from 1 to 10 using a for loop.
// for (let i = 1; i <= 10; i++) {
//     console.log(i)
// }

// 4) Print even numbers between 1 to 20 using a while loop.
// let i = 1;
// while (i <= 20) {
//     if (i % 2 === 0) {
//         console.log(i)
//     }
//     i++;
// }

// 5) Print the reverse of a given string using a for loop.
// let userinp = "sameer"
// let reverse = ''
// for (let i = userinp.length - 1; i >= 0; i--) {
//     reverse += userinp[i];
// }
// console.log(reverse)

// 6) Write a function that adds two numbers and returns the result.
// function add(a, b) {
//     return a + b;
// }
// console.log(add(10,20))

// 7) Write a function that returns the factorial of a number.
// function factorial(num) {
//     let facto = 1
//     for (let i = 1; i <= num; i++) {
//         facto *= i;
//     }
//     return facto
// }
// console.log(factorial(5))

// 8) Write a function that checks if a given string is a palindrome (e.g., "madam").
// function palindrome(input) {
//     return input === input.split('').reverse().join('')?console.log("its a plaindrome") : console.log("not a plaindrome")
// }

// palindrome("pop")


// 9) Create an object student with the following properties:
// name, rollNo, marks, isPassed
// 10) Access the properties of the student object using dot and bracket notation.
// 11) Add a method inside the student object that prints:
// "Hello, I am [name]"

// let student = {
//     name: "zaid",
//     rollNo: 449160,
//     marks: 65,
//     isPassed: "yes",
//     sayName() {
//         console.log("Hello,I am " + this.name)
//     }
// }
// student.sayName()
// console.log(student.name, student.rollNo, student.marks, student.isPassed);
// console.log(student["name"], student["rollNo"], student["marks"], student["isPassed"])

// 12) Create a function that takes an object and prints all keys and values using a loop.
// let student = {
//     name: "zaid",
//     rollNo: 449160,
//     marks: 65,
//     isPassed: "yes",
// }
// function practice(obj) {
//     for (let key in obj) {
//         console.log(`${key} : ${obj[key]}`)
//     }
// }
// practice(student);


// 13) Create an array of your favorite fruits.
// 14) Add a new fruit to the array.
// 15) Remove the last fruit from the array.
// 16) Check if "banana" is present in the array using .includes().
// let fruits = ["banana", "peach", "watermelon", "chico", "apricot"];
// fruits.push("mango")
// fruits.pop()
// console.log(fruits.includes("banana"))

// 17) Create an array of numbers. Return a new array where each number is multiplied by 2.
// let nums = [1, 2, 3, 4, 5];
// let result = nums.map(item => item * 2)
// console.log(result)

// 18) Create an array of ages. Return only those who are 18 or older.
// let ages = [10.25, 24, 5, 17, 19];
// let result = ages.filter(item => item >= 18)
// console.log(result)

// 19) Use .find() to get the first number greater than 10 from an array.
// let arr = [2, 12, 22, 3, 55, 14, 4];
// let greater = arr.find(item => item > 10)
// console.log(greater)

// 20) Use .forEach() to print every name from an array of names.
// let names = ["sameer","mahad","zaid","fahad","haya"];
// names.forEach(item => item)
// console.log(names)

// 21) Use.map() to return an array of only student names.
// 22) Use.filter() to return students who scored more than 50.
// 23) Use.find() to get the student whose name is "Zara".
// 24) Use.forEach() to print each student’s name and marks.
// const students = [
//     { name: "Ali", marks: 80 },
//     { name: "Zara", marks: 95 },
//     { name: "Umar", marks: 45 }
// ];
// let onlyNames = students.map(item => item.name)
// console.log(onlyNames)
// let score = students.filter(total => total.marks > 50)
// console.log(score)
// students.forEach(allitem => allitem)
// console.log(students)


// 25) You have an array [2, 4, 6, 8]. Return a new array with each number squared.
// → Output: [4, 16, 36, 64]
// let arr = [2, 4, 6, 8]
// let result = arr.map(item => item ** 2)
// console.log(result)

// 26) Given: ["Ali", "Zara", "Umar", "Ahmed"]. Display each name one by one.
// let names = ["Ali", "Zara", "Umar", "Ahmed"];
// names.forEach(item => console.log(item))

// 27) From [12, 25, 17, 20, 16, 30], return only the ages above 18.
// let ages = [12, 25, 17, 20, 16, 30];
// let result = ages.filter(item => item > 18)
// console.log(result)

// 28) Check if "apple" exists in the array ["banana", "mango", "grapes", "apple"].
// let fruits = ["banana", "mango", "grapes", "apple"];
// console.log(fruits.includes("apple"))

// 29) From the following list, find the first student who scored more than 90:
// let num = [
//     { name: "Ali", marks: 75 },
//     { name: "Zara", marks: 92 },
//     { name: "Umar", marks: 85 }
// ]
// let result = num.find(item => item.marks > 90)
// console.log(result)

// 30) You have an array [200, 150, 300, 100]. Return the total sum.
// → Output: 750
// let arr = [200, 150, 300, 100];
// let result = arr.reduce((total, curr) => {
//     return total += curr;
// },0)
// console.log(result)

// 31) From this array:Return a new array of only usernames.
// let arr = [
//     { id: 1, username: "ali123" },
//     { id: 2, username: "zara88" },
//     { id: 3, username: "umar_01" },
// ]
// let result = arr.map(item => item.username)
// console.log(result)

// 32) From [1, 2, 3, 4, 5, 6], return only odd numbers.
// let num = [1, 2, 3, 4, 5, 6];
// let result = num.filter(item => item % 2 != 0)
// console.log(result) 

// 33) Count how many vowels are present in the string "javascript".
// let str = "javascript"
// let count = 0;
// let vowels = ["a", "e", "i", "o", "u"];
// for (let i = 0; i < str.length; i++) {
//     if (vowels.includes(str[i])) {
//         count++
//     }
// }
// console.log(count)


// if (str.includes("a", "e", "i", "O", "u")) {
//     count++;
//     console.log(count)
// } else {
//     console.log("none")
// }


// 34) Loop through this array and log: Task: [taskName] - Status: [Completed/Incomplete]
// let tasks = [
//     { task: "Assignment", completed: true },
//     { task: "Homework", completed: false }
// ];
// for (const element of tasks) {
//     let status = element.completed ? "Completed" : "Incomplete";
//     console.log(`Task : [${element.task}] - Status : [${status}]`)
// }


// 35) From a list of employees, return a new array that adds a new field:
// "status": "active" to each object.
// let employees = [
//     {
//         name: "Ali",
//         age: 28,
//         position: "Frontend Developer",
//     },
//     {
//         name: "Zara",
//         age: 32,
//         position: "Backend Developer",
//     },
//     {
//         name: "Umar",
//         age: 25,
//         position: "UI/UX Designer",
//     },
//     {
//         name: "Ahmed",
//         age: 30,
//         position: "Project Manager",
//     }
// ];

// let result = employees.map(item => ({
//     ...item,
//     status: 'active'
// }))
// console.log(result)