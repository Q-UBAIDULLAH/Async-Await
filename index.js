 /*async function herry(){//promise return kr raha he kiyu ke async laga ge
  return 5
}

herry()
  .then((value)=>{
console.log(value)
})*/

const { resolve } = require("dns");
const { checkServerIdentity } = require("tls");


async function herry(){

  let karachiweather=new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve("27 DEG")
    },4000)
  })
  let lahoreweather=new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve('21 DEG')
    },6000)
  })
  console.log("karachi weather please wait")
  let karachW=await karachiweather //ye rokdega neche nh jane dega jbtk fulfill na hojae
  console.log("fetch karachi weather "+karachW)
  console.log("lahore weather please wait")
  let lahoreW=await lahoreweather
  console.log(" fetch lahore weather "+lahoreW)
  return[karachW,lahoreW]
//   lahoreweather.then((value)=>{
//     console.log(value)
//   })
//   karachiweather.then((value)=>{
//     console.log(value)
//   })
 }
  /*const cherry=()=>{//sath chl jaega lekin beech me arha he lekin me bolo pehle herry chle phr cherry tw ose be ek function me dalna prega async await
    console.log("hey i am cherry")
  }
console.log("welcome to weather ROOM")
let a=herry()
a.then((value)=>{
  console.log(value)
})

let b=cherry()*/
const cherry=async ()=>{// ye pehle he
  console.log("hey i am cherry")
}
const main1=async()=>{
  let a= await herry()
  let b= await cherry()
  // a.then((value)=>{ //ye hata denge q ke isme ab value agae he promise nh he
  //   console.log(value)
  // })
}
main1()