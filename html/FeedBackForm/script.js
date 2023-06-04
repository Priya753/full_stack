const names = document.getElementById("name");
const email = document.getElementById("email");
const course = document.getElementById("course");
const female = document.getElementById("female");
const male = document.getElementById("male");
const other = document.getElementById("other");
const comment = document.getElementById("area");
const result = document.getElementById("result");
function details(){
    event.preventDefault();
    console.log("hi");
    let namevalue = names.value;
    let emailvalue = email.value;
    let coursevalue = course.value;
    let commentvalue = comment.value;
   let  gender;
    if(female.checked){
        gender = "female";
    }
    if(male.checked){
        gender = "male";
    }
    if(other.checked){
        gender = "other";
    }
    let detail = {
        name : namevalue,
        email:emailvalue,
        course: coursevalue,
        gender:gender,
        comment:commentvalue
    }
    let str = JSON.stringify(detail);
    console.log(detail);
    result.innerHTML = str;
    

}