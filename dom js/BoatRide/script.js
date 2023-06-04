const btype = document.getElementById("boatTypes")
const noOfPersons = document.getElementById("person_no")
const duration = document.getElementById("duration")
const response = document.getElementById("result")

// Counting of Boat
function getBoatCount(btype, noOfPersons){

//     let noOfPersonsValue = Number(noOfPersons.value);
//  //   console.log(noOfPersonsValue);
//   let typeOfBoatValue = btype.value;
//   let str = typeOfBoatValue.match(/\d+/)[0] ;
//   console.log( typeof str);
 let boatvalue = Number(btype);
  let boatCount;
  boatCount =Math.ceil(noOfPersons/boatvalue);
  //console.log("boatCount" ,boatCount); 
     return boatCount;   
}


 function getBoatPrice(btype, boatCount){
  // let typeOfBoatValue = btype.value;
  // let str = typeOfBoatValue.match(/\d+/)[0] ;
  // console.log( typeof str);
  let boatvalue = Number(btype);
    let boatPrice;
   if(boatvalue === 2){
     boatPrice = boatCount * 240;
   //  console.log(boatPrice);
    return boatPrice;
   }
    else if(boatvalue === 4){
         boatPrice = boatCount * 260;
       //  console.log(boatPrice);
          return boatPrice;
    }
    else if(boatvalue === 8){
         boatPrice = boatCount * 560;
          return boatPrice;
    }
    else if(boatvalue === 15){
        boatPrice = boatCount * 990;
           return boatPrice;
    }
    else{
        return boatPrice =  1;
    }
   // console.log(boatPrice);
}

 function calculateBill(boatPrice,duration){
    // let durationValue = Number(duration.value);
  return totalPrice = boatPrice * duration;
  //console.log(totalPrice);
}

function bookRide(){
    event.preventDefault();
    let noOfPersonsValue = Number(noOfPersons.value);
  console.log(noOfPersonsValue);
  let boatValue = btype.value;// 2 seater
  let boatTypeValue = boatValue.match(/\d+/)[0] ;
  // console.log( typeof boatTypeValue);
  // let boatvalue = Number(str);
  let durationValue = Number(duration.value);
    let boatCount = getBoatCount(boatTypeValue, noOfPersonsValue);
    console.log("boatCount",boatCount);
    let boatPrice = getBoatPrice(boatTypeValue, boatCount);
    console.log("boatPrice",boatPrice);
    let total = calculateBill(boatPrice,durationValue);
    console.log("result",total);
    let str = `You need to pay Rs. ${total}`
    response.innerHTML = str;
}