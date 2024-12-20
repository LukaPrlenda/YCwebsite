const sb = document.getElementById("submit_btn");
sb.addEventListener("click" , function(){form_submission()})
const check=document.getElementById("passwordcheck").value;

document.getElementById("password").addEventListener("input", function(){password_strenght();});

function password_strenght(){
    const password1=document.getElementById("password").value;
    const bar=document.getElementById("strenght_bar");

    if(password1.length>=5){
        
        bar.className = "progress-bar bg-danger";
        bar.style.width="10%";
        document.getElementById("password_strength").innerHTML="Not strong enough";
        document.getElementById("password_txt").innerHTML="(Password needs to be at least 5 characters long)";
    }
}




function form_submission(){


    if(password1!=check){

    }
}

