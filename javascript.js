//primitive

// 7 types:String,Number,Boolean,null,undefined,Symbol,BigInt

//Reference type : non-primitive
// Array,Objects,Functions

//memory

//stack memory  mein (primitive) k data type use hote hain
// aur heap memory  mein (non-premitive) k data type use hote hain

// jab hum variable mein value ko change krte hain to vo change ho jati hain
//example
// let a=10;
//a=b;
//b=20;
//console.log(a);
//console.log(b);
// to isme result a=10
//b=20; result aayega
//aur jab hum heap memory mein store krte hain tab uski value just like example
//const fun = Function (){ const a=10 ; a=b b=20; to consolo kr kr print krenge to uski value mein
// result jo last mein change kiya vahi aayega console.log(a) console.log(b) dono mein 20 hi print hoga }
//array ki method mein
//const getName= new String ('archana')
//to usme  r letter hain vo kitne number pe hain vo check krne k liye indexOf
//console.log (getName.indexOf('t'));
// to usme ye jo number hain us position pe konsa latter hain vo check krne k liye
// console.log(getName.charAt(2));
//archana

// sub string mein hum value (0,4) tak k print krte hain
//console.log (arch) itna hi print hoga

//slice mein hum negative value bi print kr skte hain means jo reverse latter bhi print kr skte hain
//trim mein latter k starting aur ending sapce ko bhi remove kr deta hain

//const url = "https://archu.com/archu%20patil"
// by default %20 hain to agar usko replace krna hain to usko replace method use hoti hain

//console.log(url.replace('%20' ,'-'))

// includes  se hum us url  mein vo name hain ki nahi vo check krte hain hoga to true nhi hoga to false

// console.log(my name is  ${archana } my education in ${b.tech})
// new codeing mein hum variable likhne k liye + use krte hain but modern way mein ${} mein likhna chhahiye

//toFixed(2) means number k baad (.) kr k uske baju mein kitne number likhne hain vo
// const balance= 100
//example= console.log(balance.toFixed(2)) to output aayega 100.00
//toPricision
//toLocaleString('en-IN') en-IN lagane se value indian rupees mein covert hoke dikhegi

// JavaScript में Data Types दो मुख्य categories में divide किए जाते हैं:

// 1. Primitive Data Types (7 Types)

// Primitive data types immutable (change नहीं होते) होते हैं।

// Data Type	Description	Example
// String	Text/String store करता है	"Archana"
// Number	Integer और Decimal दोनों	10, 3.14
// Boolean	True या False	true, false
// Undefined	Variable declare है लेकिन value assign नहीं हुई	let x;
// Null	Intentionally empty value	let y = null;
// BigInt	Very large integers	12345678901234567890n
// Symbol	Unique value create करने के लिए	Symbol("id")
// Example:
// let name = "Archana";      // String
// let age = 22;              // Number
// let isStudent = true;      // Boolean
// let city;                  // Undefined
// let phone = null;          // Null
// let bigNumber = 12345678901234567890n; // BigInt
// let id = Symbol("id");     // Symbol
// 2. Non-Primitive (Reference) Data Types

// ये objects होते हैं और memory में reference के रूप में store होते हैं।

// Data Type	Description	Example
// Object	Key-value pair	{ name: "Archana" }
// Array	Multiple values	[10, 20, 30]
// Function	Reusable block of code	function hello(){}
// Example:
// // Object
// let person = {
//   name: "Archana",
//   age: 22
// };

// // Array
// let colors = ["Red", "Blue", "Green"];

// // Function
// function greet() {
//   console.log("Hello");
// }
// typeof Operator

// typeof किसी variable का data type बताता है।

// console.log(typeof "Hello");     // string
// console.log(typeof 100);         // number
// console.log(typeof true);        // boolean
// console.log(typeof undefined);   // undefined
// console.log(typeof null);        // object (JavaScript का historical bug)
// console.log(typeof 123n);        // bigint
// console.log(typeof Symbol());    // symbol
// console.log(typeof {});          // object
// console.log(typeof []);          // object
// console.log(typeof function(){});// function

// Interview Tip: typeof null का output "object" आता है। यह JavaScript का एक पुराना (historical) behavior है, हालांकि null वास्तव में primitive data type है।

// Primitive vs Non-Primitive
// Primitive	Non-Primitive
// Value copy होती है	Reference copy होता है
// Immutable	Mutable
// Stack memory में store होते हैं	Heap memory में store होते हैं (reference stack में)
// 7 types	Object, Array, Function आदि
// Interview Answer (1 Minute)

// JavaScript में कुल 8 commonly used data types होते हैं। इन्हें दो categories में divide किया जाता है:

// Primitive: String, Number, Boolean, Undefined, Null, BigInt, Symbol (कुल 7)
// Non-Primitive (Reference): Object (जिसमें Array और Function भी objects ही हैं)

// Primitive types value द्वारा copy होते हैं, जबकि non-primitive types reference द्वारा copy होते हैं। typeof operator का उपयोग data type जानने के लिए किया जाता है। typeof null "object" return करता है, जो JavaScript का एक historical behavior है।

// numbers ya phir string ki jo methods hain vo kha pe dekh skte hain?

// Haan, JavaScript ki String, Number, Array, aur baaki objects ki methods dekhne ke liye ye best resources hain:

// 1. MDN Web Docs (Sabse Best ⭐)

// Ye JavaScript ki official aur sabse trusted documentation hai.

// String Methods: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// Number Methods: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
// Array Methods: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// Yahan har method ke:

// Explanation
// Syntax
// Parameters
// Return Value
// Examples

// sab kuch detail mein milta hai.

// 2. Browser Console (Practice ke liye Best)

// Chrome kholo → F12 → Console

// let str = "Archana";

// console.dir(str);

// Ya:

// Object.getOwnPropertyNames(String.prototype)

// Ye String ki almost saari methods ki list dikha dega.

// Number methods:

// Object.getOwnPropertyNames(Number.prototype)

// Array methods:

// Object.getOwnPropertyNames(Array.prototype)
// 3. VS Code IntelliSense

// Agar VS Code mein likho:

// let name = "Archana";

// name.

// Jaise hi . lagaaogi, VS Code saari available methods dikha dega:

// toUpperCase()
// toLowerCase()
// slice()
// substring()
// replace()
// includes()
// startsWith()
// endsWith()
// trim()
// split()
// aur bahut saari.

// Number ke liye:

// let num = 123;

// num.

// To methods dikhenge jaise:

// toFixed()
// toString()
// toPrecision()
// valueOf()
// Frontend Interview ke liye sabse important String Methods
// length
// toUpperCase()
// toLowerCase()
// slice()
// substring()
// replace()
// replaceAll()
// includes()
// startsWith()
// endsWith()
// trim()
// split()
// charAt()
// indexOf()
// lastIndexOf()
// concat()
// Important Number Methods
// toString()
// toFixed()
// toPrecision()
// valueOf()
// Number()
// parseInt()
// parseFloat()
// isNaN()
// isFinite()
// Meri advice (Frontend Interview ke liye)

// MDN ko reference ke liye use karo, lekin methods VS Code aur browser console mein khud run karke practice karo. Jab tum examples likhkar output dekhogi, tab methods jaldi yaad rahengi aur interview mein bhi confidently explain kar paogi.

// Agar tum React/Frontend job ki preparation kar rahi ho, to main 50 sabse important String, Number aur Array methods ekdum interview-oriented examples ke saath bhi de sakta hoon.

// console.log(Math); Math ye ek kud mein ek libarray hain
// console.log(Math.abs(-4)) is number ko negetive ka positive mein kr k deta hain
// console.log(Math.round(4.3)) iska decimal point hata deta hai ye
//console.log(Math.ceil(4.3)) means iska decimal point hat kr bada ho jayega 5 ans aayega
//console.log(Math.floor(4.3)) means iska decimal point kam hokar aayega 4 ans aayega
// console.log(Math.random()); random ki value hamesha 0 to 1 k bich me hi rehti hain
// console.log((Math.random()*10)+1);

// const min = 10;
// const max = 20;

// console.log(Math.floor(Math.random() * (max - min + 1)) + min);

// let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

//console.log(typeOf myDate); Date ka type object hi hain

// let myCreateDate = new Date(2026,2,26); isme month 0 index se start hoga
// let myCreateDate = new Date("2-14-2026");
// let myCreateDate = new Date("2026-2-26"); isme month 1 index se start hoga
// console.log(myCreateDate.toDateString());

// let myCreateDate = new Date(2026, 2, 26);
// let myTimeStamp = Date.now();

// console.log(Math.floor(Date.now() / 1000));
//getMonth()+1 month get krne k liye (+1 bcz ki 0 index se start hoga month iske liye )
//getDay day janane k liye
// newDate.toLocalString("default", {
//   weekday: "long",
// });

// ARRAY METHOD

//JOIN Arr.join() means jo array k [] brackets hain usko hatkar string value return krta hain

//slice mein range include nahi hoti //splice mein range include hoti hain

//multiple array k under array aa rha hain to usko ek array mein merge krne k liye flat(infinity) likhna chahiye
//(from) method se kuch bhi object ko array mein convert kr skte hain

//  isme vo aapko sirf khali array hi return krega
console.log(Array.from({ name: "Hitesh" }));

//Array.of krenge to usme sabhi variables ki value ek  array mein ek  jagah pe merge ho jaynge

// let score1=100
// let score2=200
// let score3 =300

// console.log(Array.of(score1,score2,score3))

//symbol ko object key value pair mein declare krne k liye just example
//const mysym = symbol("key1")

// const object = {
//   name: archana,
//   [mysym]: "mykey1",
//   "full name": "archana patil",
// };

//aur jab hum object k name value mein jane tak object.name likhte hain vaise nahi likhna hain hume usko
//console.log(object["name"]) ese hi syntax mein likho abhi full name ko agar object.full name kr k output layenge to vo ayega hi nhi 
//uske liye hume console.log(object["full name"]) ese hi likhna padega
//object.freeze () krne se vo value freeze ho jati hain aur change nhi hoti agar hum change kr to bi

//jsuser.greeting=function(){
//     console.log("hello js user")
// }

//jsuser.greetings2 = function(){

//     console.log(`hello js user ${this.name}`);

// }

// isme agar hum output dekho to greetings 2 vale mein us note k sath sath object ki bhi value access hoti hain

// const tinderUser = new Object() singletoneobject
// const tinderUser = {} nonsingletone object hain 
// 2 object ko combine krne k liye Object.assign({},obj1,obj2)iske under ye {}
//usko result object k under object hi aaye
