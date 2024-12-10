function li_punat_text() {
    const punat =document.getElementById("li_punat");
    const text_punat="Punat "+"~City on Krk island~";
    if (punat.innerHTML==text_punat){
        punat.innerHTML="Punat";
    }
    else{
        punat.innerHTML=text_punat
    }
}


function add_description1(name,text,id1){
    event.preventDefault();
    const t1=document.getElementById(id1);
    const t2="<p>"+text+"</p>";
    if (t1.innerHTML==name+t2){
        t1.innerHTML=name;
    }
    else{
        t1.innerHTML=name+t2;
    }
}