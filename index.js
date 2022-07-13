setTimeout(()=>{
let sum=2+2;
console.log(sum);
},2000);

// setInterval(()=>{

//     setTimeout(()=>{
//         console.log(new Date());   
//     },40000);
//     console.log("waiting set timout....");

// },2000);


function recursive(){

    setTimeout(()=>{
        recursive();
    },4000);
    console.log(new Date());
}

recursive();

