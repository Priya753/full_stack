const cleaning = document.getElementById("cleaning")
const gasrefill = document.getElementById("gas")
const filter = document.getElementById("filter")
const repair = document.getElementById("repair")
const relocation = document.getElementById("relocation")
const maintenance = document.getElementById("maintenance")
const result = document.getElementById("result")

function bookAppointment(){
    event.preventDefault();
    console.log("hi");
 let count = 0;
 let cost =0 ;
 if(cleaning.checked){
    count = count+1;
    cost = cost + 500;
 }
 if(gasrefill.checked){
    count = count+1;
    cost = cost +2500;
 }
 if(filter.checked){
    count = count+1;
    cost=cost + 750;
 }
 if(repair.checked){
    count = count+1;
    cost = cost + 1500;
 }
 if(relocation.checked){
    count = count+1;
    cost = cost + 250;
 }
let servicecost = 0;
console.log(count);
servicecost = cost; 
console.log(servicecost);
let calculateDiscount =0;
// discount 
if(count> 2 ){
calculateDiscount = servicecost -(servicecost*(15/100));
console.log("calculateDiscount",calculateDiscount);
}
else{
calculateDiscount = servicecost;
console.log("calculateDiscount" , calculateDiscount);
}
let totalcost = 0;
if(maintenance.checked){
    totalcost = Math.round(1500 + calculateDiscount);
    console.log("totalcost",totalcost);
    result.innerHTML ="Your booking for Window AC service is successful "+ "<br>" + "The estimated service cost with maintenance is  Rs."+ totalcost;
    
}
else {
    totalcost = Math.round(calculateDiscount);
    console.log("totalcost",totalcost);
    result.innerHTML ="Your booking for Window AC service is successful "+ "<br>" + "The estimated service cost is Rs."+ totalcost;

}

}