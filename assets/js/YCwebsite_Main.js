let prev=""
let prev_id=""
function add_description1(name,text,id1){
    event.preventDefault();
    const t1=document.getElementById(id1);
    const t2="<p>"+text+"</p>";
    if(prev!=name && prev!=""){
        document.getElementById(prev_id).innerHTML=prev;
    }
    if (t1.innerHTML==name+t2){
        t1.innerHTML=name;
    }
    else{
        t1.innerHTML=name+t2;
    }
    prev=name
    prev_id=id1
}



function show_modal(id1, id2, event){
    event.preventDefault();
    document.getElementById(id1).style.display="block";
    document.getElementById(id2).addEventListener("click", function(){document.getElementById(id1).style.display="none"});
}