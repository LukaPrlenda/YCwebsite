async function captain_prices(){
    const table1=document.getElementById("captain_table");
    try{
        const response=await fetch("YCwebsite_Captain_Prices.json");
        const data=await response.json();

        let table_data="";
        for(let i in data){
            table_data+="<tr><td>"+data[i].name+"</td><td class='values'>"+data[i].per_hour+"</td><td class='values'>"+data[i].per_week+"</td></tr>";
        };
        table1.innerHTML=table_data;
    }
    catch (error){
        console.error("Error fetching data:", error);
    }
}

captain_prices();


let open1=0;
let open2=0;
let open3=0;

const acord =document.getElementById("more_services");
const acord0 =document.getElementById("our_yachts");
const acord1 =document.getElementById("waether");
const acord2 =document.getElementById("acord1_div");
const acord3 =document.getElementById("acord2_div");

document.getElementById("more_services").addEventListener("click", function(){acordian();});

function acordian(){
    event.preventDefault();

    if(open1===0){
        acord0.style.display="block";
        acord1.style.display="block";
        acord.innerHTML="More services <"

        open1=1;
    }
    else{
        acord0.style.display="none";
        acord1.style.display="none";
        acord2.style.display="none";
        acord3.style.display="none";
        acord.innerHTML="More services >";
        acord0.innerHTML="Our yachts >";
        acord1.innerHTML="Current weather >"
        open1=0;
        open2=0;
        open3=0;
    }

    acord0.addEventListener("click", function(){acordian1();});
    acord1.addEventListener("click", function(){acordian2();});
}

function acordian1(){
    if(open2===0){
        acord2.style.display="block";
        acord3.style.display="none";
        acord0.innerHTML="Our yachts <";
        acord1.innerHTML="Current weather >"
        open3=0;
        open2=1;
    }
    else{
        acord2.style.display="none";
        acord0.innerHTML="Our yachts >";
        open2=0;
    }
}

function acordian2(){
    if(open3===0){
        acord3.style.display="block";
        acord2.style.display="none";
        acord1.innerHTML="Current weather <"
        acord0.innerHTML="Our yachts >";
        open2=0;
        open3=1;

        punat_t();
    }
    else{
        acord3.style.display="none";
        acord1.innerHTML="Current weather >"
        open3=0;
    }
}



async function punat_t() {
    city(45.018848, 14.629300, "w1", "Punat");
    city(45.128319, 14.789270, "w2", "Novi Vinodolski");
    city(42.650661, 18.094423, "w3", "Dubrovnik");
    city(44.119370, 15.231365, "w4", "Zadar");
    city(45.081165, 13.638707, "w5", "Rovinj");
    city(45.440845, 12.315515, "w6", "Venice");
    city(37.599995, 14.015356, "w7", "Sicily");

    async function city(lat, lon, id, name) {
        
        try{
            const response = await fetch("https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&units=metric&appid=fec9a8f0fe5063b6a2d274219aa6285b");
            const data=await response.json();
            
            document.getElementById(id).innerHTML="~ "+name+": | Temperature: "+data["main"]["temp"]+"°C | Description: "+data["weather"][0]["description"];
        }
        catch (error){
            console.log("Error fetching weather for "+name+": ", error);
        }
    }
}