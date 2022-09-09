"use strict";
// setInterval(()=>{

//     setTimeout(()=>{
//         console.log(new Date());   
//     },40000);
//     console.log("waiting set timout....");

// },2000);


// function recursive(){

//     setTimeout(()=>{
//         recursive();
//     },4000);
//     console.log(new Date());
// }

// // recursive();



// function dates(){
//     const date=new Date();
//     console.log(date);

//     const today=new Date(2000,0,2,20,45,23);
//     console.log(today);

//     const day=new Date(1657722774417);
//     console.log(day);
    
//     const dy=new Date().getMilliseconds();
//     console.log(dy);

//     console.log(new Date(914));

//     const d = new Date("July 21, 1983 01:15:00:526");
// let ms = d.getMilliseconds();
// console.log(d.getMonth());

// console.log(Date.parse(d));


// }
// dates();

// console.log(new Date(427590900000));
// console.log(Date.parse("July 21, 1983 01:15:00:526"));

// console.log(new Date(427590900526));

// console.log(new Date());

// console.log(new Date().getFullYear());
// console.log(new Date().getMonth());
// console.log(new Date().getDate());
// console.log(new Date().getDay());
// console.log(new Date().getTime());

// let aday=new Date();
// console.log(aday);
// aday.setDate(aday.getDate()+5);

// console.log(aday);


// let timer=new Date();

// setInterval(()=>{
//     let timer=new Date();
//     console.log(timer.getSeconds());
// },1000)

function watch(){

    setTimeout(()=>{
       watch();
       
    },1000)
    let timer=new Date();
    
    let time=document.getElementById("time");
    time.firstElementChild.innerHTML=timer.getHours();
    time.firstElementChild.nextElementSibling.nextElementSibling.innerHTML=timer.getMinutes();
    time.lastElementChild.innerHTML=timer.getSeconds();

}
watch();

function calendar(){
setTimeout(()=>{
    calendar();
},1000)

let days=["Sunday","Monday","Tuesday","Wednesday","Thusday","Friday","Saturday"];

let months=["January","February","March","April","May","June","July","August","September","October","November","December"]

document.getElementById("day").innerHTML=days[new Date().getDay()];

document.getElementById("month").innerHTML=months[new Date().getMonth()];
document.getElementById("year").innerHTML=new Date().getFullYear();

}
calendar();

// function display(something){
//     console.log(something);
// }

// function add(n,m,callback){ 
//     let result=n+m; callback(result);
// } 
//  add(3,5,display);



//  let promise=new Promise((resolve,reject)=>{
//     let x=5;
//     let y=3;
//     let result=x+y;

//     if(result==8){
//         resolve("promise successfull");
//     }
//     else{
//         reject("habaye ikibazo");
//     }
//  });



//  promise.then((result)=>{
//     console.log(result);
//  }).catch((error)=>{
//     console.log(error);
//  });


//  let otherPromise=new Promise((resolve,reject)=>{
//     const message="this is a new promise";
//     resolve(message);
    
//  })
//  otherPromise.then((message)=>{
//     console.log(message);
// })


//  promise.then((result)=>{
//     console.log(result);
//  }).catch((error)=>{
//     console.log("error");

//  })





// let numbers=(arr)=>{let promise=new Promise((resolve,reject)=>{
//     if(!Array.isArray(arr)){
//         reject("not an array!");
//     }
    
// let even=arr.filter(item=>item%2===0)


// console.log(even);

// let mult=even.map(item=>
//     item*2
// )


// resolve(mult);

// })

// promise.then((data)=>{
//     console.log(data.map(item=>item+100))
// }).catch((error)=>{
//     console.log(error);
// })

// }

// let myArr=[3,6,7,8,12,14,18,19];
// let x=[1,3,5,7,9];
// let y=26;

// numbers(myArr);
// numbers(x);
// numbers(y);

// const wait=time=>new Promise((resolve,reject)=>
//     setTimeout(()=>resolve(),time)).then((message)=>console.log("wait a bit")) ;
//      wait(4000);






// check the age to determine the eligibility to vote
// let age = 15;
// let result;

// if (age >= 18) {
//       result = "You are eligible to vote.";
// } else {
//       result = "You are not eligible to vote yet.";
// }

// console.log(result);

// ternary operator to check the eligibility to vote


// let age = 15;
// let result =
//     (age >= 18) ? "You are eligible to vote." : "You are not eligible to vote yet";
// console.log(result);


// function Person(name,age,profession){
//     this.name=name;
//     this.age=age;
//     this.profession=profession;
    
//     this.all=function(){
//         // console.log(this.name+" "+this.age+" "+this.profession);

//       for(let address in this){
//         console.log(`${address}:${Person[address]}`)
//        }
//     }
    
// }



// Person.prototype=fn();
// const fn=()=>{
//     for(const add in Person){
//         console.log(`${add}:${Person[add]}`);
//     }
// }

// const person1=new Person("Rusanganwa","25","IT");

// person1.all();



// const universities=fetch('http://universities.hipolabs.com/search?country=Rwanda')
// // console.log(data);
//   .then((universities) => universities.json())
//   .then((data) => console.log(data));

//  const tm=()=>{
//     setTimeout(()=>{
//       tm();
//       },1000)
//       console.log(new Date())
//       console.log("this")
//  }
    

// // tm();
  

// const today=new Date();
// //    today.setDate(today.getDate()+15)
//    console.log(today.getDay())

  



// function Address(name,age){
 
// this.name=name;
// this.age=age

// }

// const person=new Address("peter",20);
// const man=new Address("Smith",30)

// console.log(person);
// console.log(man);



// console.log(Address);
// Date();
// const time=new Date();


// console.log(time);

// console.log(time.getFullYear())
// console.log(time.getMonth());
// console.log(time.getDay())
// console.log(time.getHours())
// console.log(time.getMinutes())
// console.log(time.getDate())

// time.setDate(time.getDate()+2);

// console.log(time)
// console.log(time.getDay())

// console.log(new Date().getDay())


// const days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","saturday"];

// console.log(days[new Date().getDay()]);

// const myPromise=new Promise((resolve,reject)=>{

//     const a=3,b=9;
//     const res=b/a;

//     if(res==3){
//         resolve("promise is resolved with response of"+" "+res)
//     }else{
//         reject(err)
//     }


// }).then(res=>console.log(res)).catch((err)=>{
//     // console.log("something went wrong");
// })


const fetchData=async()=>{
    const data=await (await fetch("https://picsum.photos/v2/list")).json();
    console.log(data)
   
   
    
}
// fetchData();




const Adress={
    contry:"Rwanda",
    province:'western',
    district:'musanze',
    sector:'muhoza',
    all(){
       
        console.log(this);
        
        setTimeout(()=>{
            
            console.log(this);
        },1000)
        
    }


}

Adress.all()






// const all=Adress.all;
// all();


