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


function theme_button(){
    event.preventDefault();
    const css1=document.querySelector("*");
    const css2=document.getElementsByClassName("theme_button")
    const t1=document.getElementById("theme_btn");
    const dark_bck_color="rgb(10, 29, 56)"
    
    if(window.innerWidth<=750){
        if(css1.style.background===dark_bck_color){
            t1.innerHTML="Dark theme";
            t1.addEventListener("click",function(){light_theme_btn(t1,"burlywood","white");});
    
            css1.style.background="white";
        }
    
        else{
            t1.innerHTML="Light theme";
            t1.addEventListener("click",function(){light_theme_btn(t1,"burlywood",dark_bck_color);});
            
            css1.style.background=dark_bck_color;
        }
    }
    else{
        if(css1.style.background===dark_bck_color){
            t1.innerHTML="Dark theme";
            t1.addEventListener("mouseover",function(){light_theme_btn(t1,"burlywood","navy");});
            t1.addEventListener("click",function(){light_theme_btn(t1,"beige","rgb(5, 5, 100)");});
            t1.addEventListener("mouseout",function(){light_theme_btn(t1,"burlywood",dark_bck_color);})
    
            css1.style.background="white";
        }
    
        else{
            t1.innerHTML="Light theme";
            t1.addEventListener("mouseover",function(){light_theme_btn(t1,"burlywood","royalblue");});
            t1.addEventListener("click",function(){light_theme_btn(t1,"beige","rgb(5, 5, 100)");});
            t1.addEventListener("mouseout",function(){light_theme_btn(t1,"burlywood","white");})
            
            css1.style.background=dark_bck_color;
        }
    }
}

function light_theme_btn(t1,color1,color2){
    t1.style.color=color1;
    t1.style.backgroundColor=color2;
}