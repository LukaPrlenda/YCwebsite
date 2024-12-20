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