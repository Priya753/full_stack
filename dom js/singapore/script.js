const checkbox1 = document.getElementById("check1");
const checkbox2 = document.getElementById("check2");
const checkbox3 = document.getElementById("check3");
const checkbox4 = document.getElementById("check4");
const checkbox5 = document.getElementById("check5");
const checkbox6 = document.getElementById("check6");
const PersonsNo = document.getElementById("noOfPersons");
const daystay = document.getElementById("daysstay");
const preferstayyes  = document.getElementById("yes");
const preferstayNo = document.getElementById("no");
const result = document.getElementById("result");


function   calculateCost(){

//     PlacesOfPilgrimage :

//    let  totalCost=costForSelectedPlaces* noOfPersons; 

let noOfPersons_value  = PersonsNo.value;
console.log("hi");


let cost1=0,cost2=0,cost3=0,cost4=0,cost5=0,cost6=0;
let count = 0;
if(checkbox1.checked){
  cost1 = 350;
  count = count + 1;
     console.log(350);
}
if(checkbox2.checked){
    cost2 = 430;
    count = count + 1;
    console.log( 430);
}
if(checkbox3.checked){
    cost3 = 780
    count = count + 1;
    console.log( 780);
}
if(checkbox4.checked){
    cost4 = 1200
    count = count + 1;
    console.log( 1200)
}
if(checkbox5.checked){
    cost5 = 270
    count = count + 1;
    console.log( 270);
}
if(checkbox6.checked){
    cost6 = 4500
    count = count + 1;
    console.log( 4500);
}
console.log("noOfPersons_value",noOfPersons_value);
console.log(cost1 , cost2, cost3, cost4, cost5, cost6)
let selectedPlacesCost = cost1 + cost2 + cost3 + cost4 + cost5 + cost6;
console.log("selectedPlacesCost" , selectedPlacesCost);
let totalCost = selectedPlacesCost * noOfPersons_value;
console.log("totalCost",totalCost );
console.log("count" , count)
let discountedcost =0;

let daysstayvalue = Number(daystay.value);
console.log("daysstayvalue", daysstayvalue)


if(count > 3 ){
   discountedcost = totalCost -(totalCost *(15/100));
   console.log("discountedcost1",discountedcost);
   
}
else {
    discountedcost= totalCost;
console.log("discountedcost2",discountedcost);
}
let staycost =0;
if(preferstayyes.checked)
{
    staycost = daysstayvalue *noOfPersons_value*150 + discountedcost;
    console.log("staycost",staycost)
   result.innerHTML = `Your preferred package cost ${staycost}$`;
}
else{
    staycost = discountedcost;
    console.log("staycost",staycost);
    result.innerHTML = `Your preferred package cost ${staycost}$`;
}

}
