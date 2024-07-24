function getName(name){
    return name;
}

let a = false;
let b = true;
console.log(a || getName("Bhagyashree"));

//Template Literal
let name1 = "John";
let name2 = "Doe";
console.log(name1 + " " + name2);
//Template Literal
console.log(`${name1} ${name2}`);

// Ternary Operator 
const showRecipeOne = false;

function getRecipeOneName(recipeName){
    return recipeName;
}
function getRecipeTwoName(recipeName){
    return recipeName;
}
if(showRecipeOne) {
    console.log(getRecipeOneName("Pizza"));
} else {
    console.log(getRecipeTwoName("Coke"));
}

showRecipeOne
? console.log(getRecipeOneName("pizza"))
: console.log(getRecipeTwoName("Coke"))

//default parameters, spread and rest operators
function mulOfTwoNumbers(num1 = 1, num2 = 2){
    console.log(num1, num2);
    return num1 * num2;
}
console.log(mulOfTwoNumbers(10));

//spread
const array2 = [2,3,4];
const array3 = [10,20,30];
console.log([...array2, ...array3]);

//rest operator
function getInfo(a, ...c){
console.log(a,c);
return "Bhgyashree Thakur";
}
console.log(getInfo(1,2,3,4));

//Map, filter, find, some, every, includes, indexOf, findIndex

const personsArray = [
    {
        name : 'Person1',
        age : 23,
        country : 'USA'
    },
    {
        name : 'Person2',
        age : 28,
        country : 'INDIA'
    },
    {
        name : 'Person3',
        age : 25,
        country : 'RUSSIA'
    },
    {
        name : 'Person4',
        age : 23,
        country : 'USA'
    },
];

//Map
const getAllNames = personsArray.map((singlePerson, index) => {
    console.log(singlePerson, index);
    return `${singlePerson.name} age is ${singlePerson.age}`;
});
console.log(getAllNames);

//find
let getPersonFromUSA = personsArray.find((singlePerson, index)=>{
    return singlePerson.country === 'USA';
});
console.log(getPersonFromUSA);

//filter
let getAllPersonsFromUSA = personsArray.filter((singlePerson, index)=>{
    return singlePerson.country === 'USA';
});
console.log(getAllPersonsFromUSA);

//some
//some check according to our condition one of the element or statisfied our condition then it will return true if all conditions if false then it will return false
let checkSomeArrayMethodWithExample = personsArray.some(singlePerson => {
    return singlePerson.age > 22;
});
console.log(checkSomeArrayMethodWithExample);

//Every
//every check all elements in the array if our condition is true of all element then it will return true otherwise it will return false
let checkEveryMethodWithExample = personsArray.every(singlePerson => {
    return singlePerson.age > 20;
})
console.log(checkEveryMethodWithExample);

//Includes and indexOf
//includes check the element is present or not if it is in the array it wil return true otherwise it will return false
// indexOf return -1 if not match the element in the array otherwise it will return current index of element 
const fruitsArray = ["apple", "banana", "Orange"];
console.log(fruitsArray.includes("banana"), fruitsArray.indexOf("banana"));

//findIndex
let getIndexOfPersonWhoIsFromRussia = personsArray.findIndex((singlePerson, index)=>{
    return singlePerson.country === 'RUSSIA';
});
console.log(getIndexOfPersonWhoIsFromRussia);

let getListOfProductsElement = document.querySelector(".list-of-products");

function renderProducts(getProducts){
    getListOfProductsElement.innerHTML = getProducts.map((singleProductItem, index)=>{
        return `<p>${singleProductItem.title}</p>`
    }).join(" ");
}

async function fetchListOfProducts(){
    try {
        const apiRespose = await fetch('https://dummyjson.com/products', {
            method : 'GET'
        });
        const result = await apiRespose.json();
        console.log(result);
        if(result?.products?.length > 0) renderProducts(result?.products);
    } catch(e){
        console.log(e);
    }
}
fetchListOfProducts();