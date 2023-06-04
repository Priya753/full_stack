const submit = document.getElementById("submit");
let col = ["blue","darkblue","white", "pink"]
submit.onclick =   function changeColor(){
   let color =  selectColor();
    submit.style.backgroundColor = color;
}
   

    function selectColor(){
        let color;
     col = ["red","blue", "green"]
     for(let i in col){
        color = col[i];
     }
     return color;
 }
    