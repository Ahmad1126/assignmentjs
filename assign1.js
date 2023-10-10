//hello world
console.log("Hello Dr Ait");

//conditional
var a=1;
var b=2;
if(a+b > 4)
{
    console.log(a+b)
}
else if(a+b < 1)
{
    console.log(a+b)
}
else console.log("hi");

//switch
var nam='xyz';
switch(nam)
{
    case 'xyz':console.log('You Found Me');
    break;
    default:console.log("can't be found");
}
//loops
for(var i=0;i<5;i++)
console.log("val:"+i);

let fruits=['apple','peach','orange']
fruits.forEach(item => console.log(item));
for(item of fruits){
    console.log(item);
}
for(item in fruits){
    console.log(item);
}
 var i=0;
 while(i<5){
    console.log(i);
    i++;
 }
do{
    console.log(i);
    i++;
}while(i<10)

//operators
var i=5,j=7;
console.log(i++);
console.log(++i);
console.log(i--);
console.log(--i);

//hoisting
const p='hello';
console.log(p);

//let and const
let w='sunny';
let ww=function cw(){
    let w='rainy';
    console.log("cw"+w);
}
ww();
console.log(w);

const u='sunny';
function cu(){
    //u='rainy';
    console.log("cu"+u);
}
cu();
console.log(u);

for(var i=1;i<5;i++)
    }
    display(){console.log("I have "+this.name)}
    display(cost){console.log("I have "+this.name+" of cost "+cost)}
 }
 var v=new vehicle('Buggatti')
 v.display()
 v.display(200000)

 //overriding
 class bike extends vehicle{
    constructor(name){
        super(name);
    }
    display(){
        console.log("I love "+this.name);
    }
 }
 k=new bike("r15");
 k.display();

 //exception handling
 const err= new Error("yup it's error");
 err.message

 function aaa(){
    const b = new Error("Hi I'm error"); 
    return b;
}
aaa();

try{
    console.log(q);
}
catch(error){
    console.log("We got an error "+error)
}

function able(age){
if(age<18){
    try{
        throw new Error("You are under age.")
    }
    catch(error){
        console.log(error)
    }
    finally{
        console.log("Nobody can stop me!!")
    }
}
else{
    console.log("You can vote.")
}
}
able(17);

//Document
console.log(document);
console.dir(document);
console.log(document.domain);
console.log(document.URL);
console.log(document.body);
console.log(document.head);
console.log(document.title);
console.log(document.all)
document.title = 'holaa';
console.log(document.title);
var age=prompt("What is your age?")
if(age>18){
    alert("Valid to vote")
}
else{
    alert("Invalid")
}

//dom
console.dir(document.getElementById("1"))
console.log(document.getElementsByClassName("st"))
console.log(document.getElementsByTagName("h3"))
//console.log(document.querySelector(".st"))
//document.getElementById("2").style.color='blue'

function change(id){
    id.innerHTML="hehehe"
}

//var dd=document.getElementById('btn').addEventListener('click',function(){console.log("Welcome")})

/*var lis=document.querySelectorAll('li');
for(var i=0;i<lis.length;i++){
    lis[i].addEventListener('click',function(){
        this.style.color='blue';});}
for(var i=0;i<lis.length;i++){
    lis[i].addEventListener('mouseover',function(){
        this.style.color='red';});}*/

//closure
let amm=(gdad)=>(dad)=>(son)=>console.log(`${gdad}-->${dad}-->${son}`);
//amm("rmn")("nrn")("nnn");
let curriedMultiply=(a)=>(b)=>a*b;
let multiplyBy7=curriedMultiply(7);
//multiplyBy7(5);
let addd=(a)=>(b)=>console.log(a+b);
let aBy2=addd(2);
//aBy2(10);
const add=(a,b)=>a+b;
const mult=(a,b)=>a*b;
//add(2,mult(3,4))

const promise=new Promise((resolve,reject)=>{
    if(true)
    resolve("It worked!");
    else
    reject("It broken!");
})
//promise.then(result=>result+"!!").catch(result=>result+"!!")

//map
let arrrr=[1,2,3,4]
let narrrr=arrrr.map(num=>num*2)
console.log(narrrr)

let x=7
const adddd=(y)=>x+=y

//filter
let farrrr=arrrr.filter(num=>num>2)
console.log(farrrr)
