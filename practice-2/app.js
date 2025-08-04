// 1. Unique Words Counter
// ------------------------
// Input: A string
// Task: Return an object with each unique word and its count.


// const text = "JavaScript is great and JavaScript is powerful";
// const words = text.toLowerCase().split(" ");
// const wordCount = {};

// for (let i = 0; i < words.length; i++) {
//     const word = words[i]
//     if (wordCount[word] === undefined) {
//         wordCount[word] = 1;
//     } else {
//         wordCount[word]++;
//     }
// }
// console.log(wordCount);


// 2. Group Students by Class
// ---------------------------
// Input: Array of objects
// Task: Return an object like { "10th": [...], "9th": [...] }

// const students = [
//     { name: "Ali", class: "10th" },
//     { name: "Sara", class: "9th" },
//     { name: "Ahmed", class: "10th" },
//     { name: "Zara", class: "9th" }
// ];
// function groupStudentsByClass(students) {
//     const grouped = {};
//     for (const student of students) {
//         const cls = student.class;
//         if (!grouped[cls]) {
//             grouped[cls] = [];
//         }
//         grouped[cls].push(student);
//     }
//     return grouped;
// }
// console.log(groupStudentsByClass(students));


// 3. Filter Products by Price Range
// Task: Create a function that takes min and max price and returns filtered products
// ----------------------------------
// const products = [
//     { name: "Laptop", price: 800 },
//     { name: "Mouse", price: 20 },
//     { name: "Phone", price: 500 },
// ];
// function filter(products, min, max) {
//     const pricefilter = products.filter((item) => { return item.price >= min && item.price <= max })
//     console.log(pricefilter)
// }
// console.log(filter(products, 0, 500))

// 4. Check Palindrome Using Function
// -----------------------------------
// Input: A string like "madam"
// Task: Check if it is palindrome using a function
// let text = "madam"
// let reverse = text.split('').reverse().join("")
// function palindrome() {
//     return text === reverse ? `${text} is palindrome` : `${text} is not palindrome`
// }
// console.log(palindrome())

// 5. Flatten Array
// -----------------
// const nestedArray = [1, [2, [3, 4]], 5];
// Task: Flatten the array to [1, 2, 3, 4, 5] using recursion or array methods

// const nestedArray = [1, [2, [3, 4]], 5];
// const flaten = nestedArray.flat(2)
// console.log(flaten)


// 6. Total Salary Calculation (Using Reduce)
// -------------------------------------------
// const employees = [
//     { name: "Ali", salary: 1000 },
//     { name: "Zara", salary: 1500 },
//     { name: "Ahmed", salary: 1200 },
// ];
// Task: Get total salary of all employees
// const salarytotal = employees.reduce((acc, curr) => {
//    return acc += curr.salary
// }, 0) 
// console.log(salarytotal)

// 10. Sum of All Even Numbers in Nested Array
// --------------------------------------------
// const data = [1, 2, [4, 5, [6, 8]], 10];
// Task: Return sum of all even numbers, regardless of depth
// const flatenArary = data.flat(Infinity)
// const sumofeven = flatenArary.reduce((acc, curr) => {
//     if (curr % 2 === 0) {
//         return acc += curr
//     }
//     return acc;

// }, 0)
// console.log(sumofeven)


// 11. Rest Operator in Function
// ------------------------------
// Task: Write a function that takes any number of numbers and returns their average
// function average(...rest) {

//     const total = rest.reduce((acc, curr) => {
//         return acc += curr
//     })
//     return total / rest.length
// }
// console.log(average(10, 20, 30, 40, 50))


// 12. Frequency Count with Spread
// -------------------------------
// const arr = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
// Task: Count how many times each fruit occurred using spread & reduce
// const frequency = arr.reduce((acc, fruits) => {
//     if (acc[fruits] === undefined) {
//         acc[fruits] = 1;
//     } else {
//         acc[fruits]++
//     }
//     return acc

// }, {})
// console.log(frequency)

// 13. Toggle Status
// ------------------
// const tasks = [
//     { id: 1, name: "Code", done: false },
//     { id: 2, name: "Eat", done: true },
// ];
// function toggle(...alltask) {
//     for (const task of alltask) {
//         task.status = task.done === true ? "completed" : "Incomplete"
//     }
//     return alltask
// }
// console.log(toggle(...tasks))



// 14. Sort by Name Length
// ------------------------
// const names = ["Ali", "Zara", "Ahmed", "Usman"];
// Task: Sort names by length in ascending order
// const names = ["Ali", "Zara", "Ab", "Ahmed", "Usman"];
// names.sort((a, b) => a.length - b.length);
// console.log(names);