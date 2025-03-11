// Data Types and Operators Duration: 
// 1.
// ///////Ratio//////
function Ratio(cash, currentLiabilities) {
  return cash / currentLiabilities;
}
console.log(Ratio(1000,500))

// /////// netincome//////
function netincome (revenues,expenses) {
 return revenues-expenses;
}
console.log(netincome(1000,500))

// ////////assets/////
 function  assets( liabilities, equity){
  return   liabilities+equity;
 }
 console.log(assets(1000,500))
 
//  ////////NetIncome////////
 function NetIncome(profitMargin, sales) {
  return profitMargin * sales;
}
console.log(NetIncome(1000,500))

// //////////averge//////////
function averge(){
  let sum=0;
  let count=0;

  function addnumber(num){
    sum+=num;
    count++;
    return sum/count;
  }

  return addnumber;

}

let avgCalculator = averge();
avgCalculator(7);
avgCalculator(9);
console.log(avgCalculator(2));

///////////////Discount///////////////////

function Discount(price,discount){

  let discountAmount=(price*discount)/100;
  let finalPrice = price - discountAmount;
  return  finalPrice;
}
console.log(Discount(150,30))

/////////////AgeLimit///////////////////////
function AgeLimit(age) {
  if (age > 18 && age < 30) {
      return true;
  }
   else {
      return false;
  }
}
console.log(AgeLimit(20)); 

///////////////////exponential///////////////
function exponential(base, exponent) {
  let result = 1;

  for (let i = 0; i < exponent; i++) {
      result *= base;
  }

  return result;
}
console.log(exponential(2, 3)); 


////2.
console.log(typeof(100));           
console.log(typeof(73.9));          
console.log(typeof(NaN));           
console.log(typeof("Water"));       
console.log(typeof(false));        
console.log(typeof(9 != 11));      
console.log("Orang" + "e");         
console.log("Orange" - "s");        
console.log("4" + "8");           
console.log("4" - "8");             
console.log("name" + 3);            
console.log("name" - 3);            
console.log(82 * "word");          
console.log(1 + "hello");           
console.log("hello" + 1);           
console.log(1 + true);              
console.log("hello" + true);        
console.log(typeof(Infinity));      
console.log(1 == '1');              
console.log(1 === '1');             


// // Strings Duration
let str = "Welcome to Orange";

// // Output: WELCOME TO ORANGE
console.log(str.toUpperCase());

// // Output: TO
console.log(str.split(' ')[1]);

// // Output: Hello from Orange
console.log("Hello from " + str.split(' ')[2]);

// // Output: welcome to orange
console.log(str.toLowerCase());

// // Output: 17 Orange
console.log(str.length )

// // Output: Welcome to "Orange"
console.log('Welcome to "' + str.split(' ')[2] + '"');

// // Output: Welcome to Orange Jordan
console.log(str + " Jordan");



let word = "cactus";

let first = word[0];
let newWord = word.slice(1);
console.log(first + newWord.replaceAll(first, "*"));


// Arrays//
//1.
let arr =["Coding", "Academy", "By", "Orange"]

arr.push("Jordan")
console.log(arr)
//
console.log(arr.slice(0,2));
//
arr.unshift(...["Welcome","To"])
console.log(arr);
//
arr.pop()
console.log(arr.slice(3));
//
console.log(arr.slice(2).join(" "));
//
console.log(arr.slice(2));
//
arr.shift()
arr.shift()
console.log(arr.toSpliced(1,2));

//2.

var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

vegetables.pop()
console.log(vegetables);

fruit.shift()
console.log(fruit);

console.log(fruit.indexOf("orange"));

fruit.push(fruit.indexOf("orange"));
console.log(fruit);

console.log(vegetables.length);

vegetables.push(vegetables.length)
console.log(vegetables);

var food=fruit.concat(vegetables);
console.log(food);

console.log(food.toSpliced(4,2));

console.log(food.reverse())

console.log(food.join(" "));

//////Functions////////////////////////

function stringToArray(str) {
  return str.split(" "); 
}
console.log(stringToArray("Orange Jordan"));

/////////////////////////////////////////////
function hidden(num) {
  num = num.slice(7);
  num = "*".concat(num);
  return console.log(num);
}
hidden("0785473827");

////////////////////////////////////////////
function hidden2(email){
  emailhide= email.slice(6, email.indexOf("@"));
  return console.log(email.replaceAll(emailhide,"..."));
}
hidden2("orange_academy@orange.jo");
//////////////////////////////////////////////


function capitalizeFirstLetter(str) {
  return str
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1));  
}

console.log(capitalizeFirstLetter("coding academy by orange"));  



function upperCase(string) {
  let arr = string.split(" ");
  arr.forEach((element, index) => {
    arr[index] = element.charAt(0).toUpperCase() + element.slice(1);
  })
  return console.log(arr.join(" "));
}
upperCase("coding academy by orange");


// 1. If someone is applying to the academy’s website, create the conditional to cover these situations:  
// ● If the candidate is older than 30, print out: “You are not eligible. You may join other programs.”  
// ● If the candidate is between 18 and 30, print out: “You are eligible. Start your application.”  
// ● If the candidate is younger than 18, print out: “You may join the kids' program.” 
// ● If the candidate is older than 60, print out: “You may join the seniors’ program.” 
// ● Calculate the age using the year of birth dynamically. 

function academy(age_year) {
  age_year = String(age_year);
  let age 
  if (age_year.length === 4) {
    age =  (new Date().getFullYear() - age_year);
  }
  if (age > 30 && age <= 60) {
    console.log("You are not eligible. You may join other programs.");
  } else if (age >= 18 && age <= 30) {
    console.log("You are eligible. Start your application.");
  } else if (age < 18) {
    console.log("You may join the kids' program.");
  } else if (age > 60) {
    console.log("You may join the seniors program.");
  } else {
    console.log("Invalid age.");
  }
}
academy(2005);

// 2. Write a function that takes a string and switches the letters' case from upper to lower and vice versa.  
function versa(word) {
  word = word.split("").map((char) => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()).join("")
  return console.log(word);
}
versa("OrAnGe");

// Write a function that takes a string, capitalizes each word's first letter, and removes all spaces (Camel Case). 
function camelCase(string) {
  let arr = string.split(" ");
  arr.forEach((element, index) => {
    arr[index] = element.charAt(0).toUpperCase() + element.slice(1);
  })
  arr = arr.join("")
  return console.log(arr);
}
camelCase("Coding Academy by Orange");

//  4. Write a function that removes a specific element in an array. 
function removeElement(arr, ele) {
  arr.splice(arr.indexOf(ele), 1);
  return console.log(arr);
}
removeElement( ["Coding", "Academy", "By", "Orange"], "By" )


// 5. Write a function that checks if a number is odd or even. 
function oddOrEven(number) {
  number % 2 === 0 ? console.log("Even") : console.log("Odd");
}
oddOrEven(5);
oddOrEven(4);

// 6. Write a function that checks whether an input variable is a number. 
function numberCheck(input) {
  if (typeof input === "number") {
    console.log("Number");
  } else {
    console.log("Not a number");
  }
}
numberCheck(5);
numberCheck("Coding");

// 7. Write a function that finds the largest of two numbers. 
function largest(n1 , n2) {
   if (n1 == n2)  return console.log("equal");
  n2 > n1 ? console.log(`${n2} Larger than ${n1}`) : console.log(`${n1} Larger than ${n2}`);
}
largest(5, 10);
largest(20, 10);
largest(20, 20);

// 8. Write a function that checks if a triangle is equilateral, scalene, or isosceles. 
function triangle(a, b, c) {
  if (a === b && b === c) {
    console.log("Equilateral");
  } else if (a === b || b === c || a === c) {
    console.log("Isosceles");
  } else {
    console.log("Scalene");
  }
}
triangle(5, 5, 5);
triangle(5, 5, 6);
triangle(5, 6, 7);

// 9. Write a function that finds if a number is present in a given range.  
function findInRange(from , to , num) {
  if (num >= from && num <= to) {
    console.log("in range"); 
  } else {
    console.log("not in range");
  }
}
findInRange(1, 10, 5);
findInRange(1, 10, 15);

// 10. Write a function that checks whether a year is a leap year.  
function leapYear(year) {
  if (year % 4 === 0) {
    console.log("Leap year");
  } else {
    console.log("Not a leap year");
  }
}
leapYear(2020);
leapYear(2021);






