//Write a code to display the multiplication table of a given integer.
const number = 9;
for (let i = 1; i <= 10; i++) {
  const result = i * number;
  console.log(`${number}*${i}=${result}`);
}

//Write a code to check whether a string is a palindrome or not.
let A = "racecar";
let newWord = "";
for (let i = A.length - 1; i >= 0; i--) newWord += A[i];
console.log(newWord, A == newWord ? "palindrome" : "not palindrome");
//Write a code to convert centimeter to kilometer.
let cm = 100000;
console.log(cm, "cm ->", cm / 10 ** 5, "km");

//Write a code to format number as currency (IDR)
const val = 1000;
console.log("Rp.", val.toLocaleString("id-ID") + ",00");

//Write a code to remove the first occurrence of a given “search string” from a string
let str = "hello world";
const search = "ell";
console.log(str.replace(search, ""));

//Write a code to capitalize the first letter of each word in a string
let kata = "hello world";
let words = kata.split(" ");

for (let i = 0; i < words.length; i++) {
  words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
}
let newstring = words.join(" ");
console.log("the new string is: " + newstring);

//Write a code to reverse a string.
let B = "hello";
let reversed = "";
for (let j = B.length - 1; j >= 0; j--) {
  reversed += B[j];
}
console.log(B, "->", reversed);

//Write a code to swap the case of each character from string
//○ Example : ‘The QuiCk BrOwN Fox’ -> ‘ tHE qUIcK bRoWn fOX’
let Kalimat = "The QuiCk BrOwN Fox";
let swapcaseString = "";

for (let j = 0; j < Kalimat.length; j++) {
  let char = Kalimat[j];

  if (char === char.toUpperCase()) {
    swapcaseString += char.toLowerCase();
  } else {
    swapcaseString += char.toUpperCase();
  }
}
console.log(swapcaseString);

//Write a code to find the largest of two given integers
//○ Example : num1 = 42, num2 = 27 → 42
let num1 = 42;
let num2 = 27;
let largest = num1 > num2 ? num1 : num2;
console.log("the Largest is: " + largest);

//Write a conditional statement to sort three numbers
//○ Example : num1 = 42, num2 = 27, num3 = 18 → 18, 27, 42
let number1 = 87;
let number2 = 83;
let number3 = 100;

if (number1 > number2) {
  let temp = number1;
  number1 = number2;
  number2 = temp;
}
if (number1 > number3) {
  let temp = number1;
  number1 = number3;
  number3 = temp;
}
if (number2 > number3) {
  let temp = number2;
  number2 = number3;
  number3 = temp;
}
console.log(number1, number2, number3);

//Write a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for others data
//type.
//○ Example : “hello” → 1
let input = "hai";
switch (typeof input) {
  case "string":
    console.log(1);
    break;
  case "number":
    console.log(2);
    break;
  default:
    console.log(3);
    break;
}

//Write a code to change every letter a into * from a string of input
//○ Example : ‘An apple a day keeps the doctor away’ -> `*n *pple * d*y keeps the doctor *w*y`
word = "an apple a day keeps the docter away";
console.log(word.replace(/a/gi, "*"));
