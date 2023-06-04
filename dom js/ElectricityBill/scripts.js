let formdate = document.getElementById("date");
let currentMeterReading = document.getElementById("current");
let oldMeterReading = document.getElementById("old");
let response = document.getElementById("result");
let arrears = document.getElementById("arrears");
let name  = document.getElementById("cons_name");
let reset = document.getElementById("reset");
function res(){
    event.preventDefault();
    let customerName = name.value; 
     const currdate = new Date().toISOString();
     //console.log(currdate);
     const date = formdate.value
     //console.log(date);
     // Meter Reading 
    const curr_Reading = Number(currentMeterReading.value);
     const old_Reading = Number(oldMeterReading.value);
     //console.log(curr_Reading , old_Reading);
     let  balance = arrears.value;
     let bill;
     let reading = (old_Reading -curr_Reading)
     // Arrear
     if(date > currdate){
        alert("The Bill date can't be greater than today!")
     }
     else if (curr_Reading < old_Reading){
       alert(" sorry!!current reading cant be less than old reading");
     }
   else{

if(reading >= 1 && reading <= 100 ){
     bill =10 + balance //10 
    // console.log(bill);
}
else if(reading > 100 && reading <= 200){
  bill =15+ balance //15
 // console.log(bill);
}
else if(reading > 200 && reading <= 300 ){
  bill =20 + balance //20
  //console.log(bill);
}
else{
  bill = 25 + balance //25
 // console.log(bill);

}

    //  billpaybydate  = currdate + 15
      let date = new Date().getDate()+15;
      let month = new Date().getMonth();
      let year = new Date().getFullYear();
    let paydate = date + "/" + month + "/"+year ;
  //  console.log(new Date().getDate+15 + "/" + new Date().getMonth() + "/"+ new Date().getFullYear);
   //  console.log("Dear " +customerName+"," +"<br>"+"Your electricity bill is " +  bill  +" and Pay BY Date[DD/MM/YYYY]"+"<br>"+paydate);
        response.innerHTML ="Dear " +customerName+"," +"<br>"+"Your electricity bill is " + bill +" and Pay BY Date[DD/MM/YYYY]"+"<br>"+paydate;   
        
 }
   }
  

// function clear(){
//    reset.reset();
// }
 