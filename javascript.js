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
