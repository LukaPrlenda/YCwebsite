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




async function yacht_list(){
    const table1=document.getElementById("captain_table");
    try{
        const response=await fetch("YCwebsite_Captain_Prices.json");
        const data=await response.json();

        let table_data="";
        for(let i in data){
            table_data+="<tr><td>"+data[i].name+"</td><td>"+data[i].per_hour+"</td><td>"+data[i].per_week+"</td></tr>";
        };
        table1.innerHTML=table_data;
    }
    catch (error){
        console.error("Error fetching data:", error);
    }
}

yacht_list();
