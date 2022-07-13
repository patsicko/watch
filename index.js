
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



function sec(){
    setTimeout(()=>{
       sec();
    },1000)
    let timer=new Date();
    // console.log(timer); 
    let time=document.getElementById("time");
    time.firstElementChild.innerHTML=timer.getHours();
    time.firstElementChild.nextElementSibling.innerHTML=timer.getMinutes();
    time.lastElementChild.innerHTML=timer.getSeconds();

}
sec();

