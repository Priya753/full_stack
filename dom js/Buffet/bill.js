const veg_adult = document.getElementById("vegAdult")
const veg_kid = document.getElementById("vegKids")
const nonveg_adult = document.getElementById("nonvegAdult")
const nonveg_kid = document.getElementById("nonvegKids")
const customer_name = document.getElementById("customerName");
function billCalculation(){
  event.preventDefault();
  console.log("hi");
  const vegAdultValue =Number(veg_adult.value);
  const vegKidValue = Number(veg_kid.value);
  const nonvegAdultValue = Number(nonveg_adult.value);
  const nonvegKidValue  = Number(nonveg_kid.value);
  const customerNameValue = customer_name.value;
  if(!customerNameValue ){
     res = "Add customer name";
    //console.log(res);
  }
  else{
    let people = vegAdultValue + vegKidValue + nonvegAdultValue  + nonvegKidValue;
  let sum = (vegAdultValue*599) +(vegKidValue*249) + (nonvegAdultValue*699) + (nonvegKidValue*349);
   res =   `Hai ${customerNameValue}, You have to pay Rs${(people<10? (sum*112)/100 : (sum*112)/100 *(90/100)).toFixed(2)}. Thanks for coming!!! `;
  //console.log(res);
  }
  let answer = document.getElementById("answer");
  answer.innerHTML = res; 
}

document.getElementById()

