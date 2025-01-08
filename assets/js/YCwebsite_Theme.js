let current_theme="light";
document.addEventListener("load", function(){if(current_theme==="dark"){theme_button();}});


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
            localStorage.setItem("theme", "0");
            colore_switch("navy");
            
        }
    
        else{
            t1.innerHTML="Light theme";
            t1.addEventListener("click",function(){light_theme_btn(t1,"burlywood",dark_bck_color);});
            
            css1.style.background=dark_bck_color;
            localStorage.setItem("theme", "1");
            colore_switch("lightblue");
            
        }
    }
    else{
        if(css1.style.background===dark_bck_color){
            t1.innerHTML="Dark theme";
            t1.addEventListener("mouseover",function(){light_theme_btn(t1,"burlywood","navy");});
            t1.addEventListener("click",function(){light_theme_btn(t1,"beige","rgb(5, 5, 100)");});
            t1.addEventListener("mouseout",function(){light_theme_btn(t1,"burlywood",dark_bck_color);})
    
            css1.style.background="white";
            localStorage.setItem("theme", "0");
            colore_switch("navy");
            
        }
    
        else{
            t1.innerHTML="Light theme";
            t1.addEventListener("mouseover",function(){light_theme_btn(t1,"burlywood","royalblue");});
            t1.addEventListener("click",function(){light_theme_btn(t1,"beige","rgb(5, 5, 100)");});
            t1.addEventListener("mouseout",function(){light_theme_btn(t1,"burlywood","white");})
            
            css1.style.background=dark_bck_color;
            localStorage.setItem("theme", "1");
            colore_switch("lightblue");
            
        }
    }
}

function light_theme_btn(t1,color1,color2){
    t1.style.color=color1;
    t1.style.backgroundColor=color2;
}

const theme1_id=["theme1,0","theme1,1","signup_h4","theme1,2","theme1,3","theme1,4","theme1,5","theme1,6","theme1,7","theme1,8","theme1,9","theme1,10","theme1,11","theme1,12","theme1,13","theme1,14",
    "locations",
]
const theme1_class=["title2_2",
    "section_line",
]

const theme2_id=["theme2.0","theme2.1","theme2.2","theme2.3","theme2.4","theme2.5","theme2.6",
    "table1_hed","table2_hed","table2_bdy","captain_table",
    "more_services", "our_yachts",  "waether",
    "feedback_table", "comments", "adding_com", "actions",
    "charter_button",
    "about_us",
]
const theme2_class=["theme2",
]

function colore_switch(color1){
    for(let i=0;i<theme1_id.length;i++){
        document.getElementById(theme1_id[i]).style.color=color1;

    }
    for(let i=0;i<theme1_class.length;i++){
        const theme_i=document.getElementsByClassName(theme1_class[i]);
        for(let j=0;j<theme_i.length;j++){
            theme_i[j].style.color=color1;
        }
    }

    for(let i=0;i<theme2_id.length;i++){
        document.getElementById(theme2_id[i]).style.backgroundColor=color1;
        if(theme2_id[i]!="about_us" && theme2_id[i]!="table1_hed" && theme2_id[i]!="table2_hed" && theme2_id[i]!="table2_bdy" && theme2_id[i]!="captain_table" && theme2_id[i]!="comments" && theme2_id[i]!="adding_com" && theme2_id[i]!="actions"){
            document.getElementById(theme2_id[i]).addEventListener("mouseover", function(){theme_btn_clicked_id(theme2_id[i],"burlywood")});
            document.getElementById(theme2_id[i]).addEventListener("click", function(){theme_btn_clicked_id(theme2_id[i],"rgb(214, 167, 105)")});
            document.getElementById(theme2_id[i]).addEventListener("mouseout", function(){theme_btn_clicked_id(theme2_id[i],color1)});
        }
    }
    for(let i=0;i<theme2_class.length;i++){
        const theme_i=document.getElementsByClassName(theme2_class[i]);
        for(let j=0;j<theme_i.length;j++){
            theme_i[j].style.backgroundColor=color1;
            theme_i[j].addEventListener("mouseover", function(){theme_btn_clicked_class(theme_i[j],"burlywood")});
            theme_i[j].addEventListener("click", function(){theme_btn_clicked_class(theme_i[j],"rgb(214, 167, 105)")});
            theme_i[j].addEventListener("mouseout", function(){theme_btn_clicked_class(theme_i[j],color1)});
        }
    }

    if(color1=="navy"){
        document.getElementById("table2_bdy").style.backgroundColor="whitesmoke";
        document.getElementById("captain_table").style.backgroundColor="whitesmoke";
        document.getElementById("comments").style.backgroundColor="whitesmoke";
        document.getElementById("adding_com").style.backgroundColor="whitesmoke";
        document.getElementById("actions").style.backgroundColor="whitesmoke";
    }
    else{
        document.getElementById("table2_bdy").style.backgroundColor="rgb(83, 107, 140)";
        document.getElementById("captain_table").style.backgroundColor="rgb(83, 107, 140)";
        document.getElementById("comments").style.backgroundColor="rgb(83, 107, 140)";
        document.getElementById("adding_com").style.backgroundColor="rgb(83, 107, 140)";
        document.getElementById("actions").style.backgroundColor="rgb(83, 107, 140)";
    }
}

function theme_btn_clicked_id(id,colore1){
    document.getElementById(id).style.backgroundColor=colore1;
}
function theme_btn_clicked_class(class1,colore1){
    class1.style.background=colore1;
}


function check_theme(){
    let past_theme=localStorage.getItem("theme");
    
    if(past_theme=="1"){
        theme_button();
    }
}

window.addEventListener("load", function(){check_theme();});