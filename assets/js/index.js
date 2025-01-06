var app=$.spapp({
    defaultView: "#page_Main",
    templateDir: "../../views/"
});
  
app.run();




app.route({
    view: "page_Signup",
    onCreate: function(){console.log("it is created 2"); start_signup_js();},
    onReady: function() {console.log("page is reday"); curent_page_navi("pg1");}
});

app.route({
    view: "page_Login",
    onReady: function() {console.log("page is reday"); curent_page_navi("pg2");}
})

app.route({
    view: "page_Services",
    onCreate: function(){console.log("it is created 1"); start_services_js();},
    onReady: function() {console.log("page is reday"); curent_page_navi("pg3");}
});

app.route({
    view: "page_Main",
    onReady: function() {console.log("page is reday"); curent_page_navi("last_a");}
})


const pages=["pg1","pg2","pg3","last_a"];

function curent_page_navi(id){
    
    localStorage.setItem("current_page_id", id);

    let current=document.getElementById(id);
    let past_theme=localStorage.getItem("theme");

    for(let i=0; i<pages.length; i++){
        let pages_id = document.getElementById(pages[i]);
        pages_id.style.backgroundColor="navy";
        pages_id.style.color="";
        pages_id.addEventListener("mouseout", function(){pages_id.style.backgroundColor="navy";});
        pages_id.addEventListener("click", function(){pages_id.style.backgroundColor="rgb(214, 167, 105)";});
        pages_id.addEventListener("mouseover", function(){pages_id.style.backgroundColor="burlywood";});

        pages_id.addEventListener("mouseout", function(){pages_id.style.color="burlywood";});
        pages_id.addEventListener("click", function(){pages_id.style.colorr="royalblue";});
        pages_id.addEventListener("mouseover", function(){pages_id.style.color="navy";});

        if(past_theme=="1"){
            pages_id.style.backgroundColor="lightblue";
            pages_id.addEventListener("mouseout", function(){pages_id.style.backgroundColor="lightblue";});
        }
    }

    current.style.backgroundColor="burlywood";
    current.style.color="navy";
    current.addEventListener("mouseout", function(){current.style.backgroundColor="burlywood";});
    current.addEventListener("click", function(){current.style.backgroundColor="burlywood";});
    current.addEventListener("mouseover", function(){current.style.backgroundColor="burlywood";});
    current.addEventListener("mouseout", function(){current.style.color="navy";});
    current.addEventListener("click", function(){current.style.color="navy";});
    current.addEventListener("mouseover", function(){current.style.color="navy";});
}