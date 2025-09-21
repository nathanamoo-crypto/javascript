//1.String Manipulation: Function to capitalize the first letter of each word in a string
function capitalizeWords(str) {
    return str
    .split(' ')
    .map(word => 
        word.charAt(0).toUpperCase() 
        + word.slice(1))
        .join(' ');
}
console.log(capitalizeWords("hello world from javascript")); // Output: "Hello World From Javascript"

//2.Array methods: Given an array of numbers use map, filter, and reduce to double each number, keep only even numbers ,and find the sum of the remaining numbers
function processNumbers(arr) {
    return arr
    .filter(num => num % 2 === 0) // Keep only even numbers.
    .map(num => num * 2) // Double each number
    .reduce((sum, num) => sum + num, 0); // Find the sum of the remaining numbers
}
console.log(processNumbers([1, 2, 3, 4, 5])); // Output: 12

//3.Object destructuring: Extract username,email and theme and prints them
const user = {
   id: 1,
    profile: {
   username: "mandem",
    email: "mandem@example.com",},
    settings: { theme: "dark",
    notifications: true,},};
const { profile: { username, email }, settings: { theme } } = user;
console.log(username, email, theme);// Output: mandem mandem@example.com dark

//4.Array of Objects: Function that returns all products with a price less than or equal to budget
const products=[
    {name: "Laptop", price: 1200}, 
    {name: "Phone", price: 800},
    {name: "Tablet", price: 600}  
];

function getAffordableProducts(products, budget) {
    return products.filter(product =>
         product.price <= budget);
}   
console.log(getAffordableProducts(products, 800)); // Output: [{name: "Phone", price: 800}, {name: "Tablet", price: 600}]

//5.Spread and Rest Operators: Functions that accepts multiple arrays and merges them into a single array without duplicates
function mergeArrays(...arrays) {
    return [...new Set(arrays.flat())];
}
console.log(mergeArrays([1, 2, 3], [3, 4, 5], [5, 6, 7])); // Output: [1, 2, 3, 4, 5, 6, 7]

//6. Sorting and Finding: Function that finds the second largest number in an array without using sort()
function secondLargest(arr) {
    let first = -Infinity, second = -Infinity;
    for (let num of arr) {
        if (num > first) {
            second = first;
            first = num;
        } else if (num > second && num < first) {
            second = num;
        }
    }
    return second;
}
console.log(secondLargest([3, 1, 4, 4, 5, 5, 2])); // Output: 4

//7.Higher Order Functions: Function where on operation such as square, double or negate is applied to every element of an array
function applyOperation(arr, operation) {
    const operations = {
        square: x => x * x,
        double: x => x * 2,
        negate: x => -x
    };
    return arr.map(operations[operation]);
}  
console.log(applyOperation([1, 2, 3, 4], "square")); // Output: [1, 4, 9, 16]

//8.Advanced Object Manipulation: Function that groups an array of objects by a  category property
function groupByCategory(items) {
    return items.reduce((group,item) => {
        const { category, name} = item;
        if (!group[category]) {
            group[category] = [];}
        group[category].push(name);
        return group;
    } ,{});
}
console.log(groupByCategory([
    { name: "Apple", category: "Fruit" },
    { name: "Carrot", category: "Vegetable" },
    { name: "Banana", category: "Fruit" }]));
// Output: { Fruit: ["Apple", "Banana"], Vegetable: ["Carrot"] }


//9.Default and Optional Chaining: Function that safely returns a user's city using optional chaining.If the city is missing, return "Unknown".
function getUserCity(user) {
    return user?.address?.city ?? "Unknown";
}
console.log(getUserCity({ name: "Palmer", address: { city: "London" } })); // Output: "London"
console.log(getUserCity({ name: "Mary" })); // Output: "Unknown"

//1o.Bous: Async/Await + Fetch: Asnc function that fetches posts from https://jsonplaceholder.typicode.com/posts and logs the titles of the first 5 posts
async function fetchPostTitles() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await response.json();
        const titles = posts.slice(0, 5).map(post => post.title);
        console.log(titles);
    } catch (error) {
        console.error('Error fetching posts:', error);
    }
}
fetchPostTitles(); // Output: Titles of the first 5 posts   