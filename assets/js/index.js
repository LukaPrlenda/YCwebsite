var app=$.spapp({
    defaultView: "#page_Login",
    templateDir: "../../views/"
});
  
app.run();




app.route({
    view: "page_Signup",
    onCreate: function(){console.log("it is created 2"); start_signup_js();},
    onReady: function() {console.log("page is reday 2"); curent_page_navi("pg1"); url1(); go_to_id();}
});

app.route({
    view: "page_Login",
    onCreate: function(){start_login_js();},
    onReady: function() {console.log("page is reday Login"); curent_page_navi("pg2"); url2(); go_to_id();}
})

app.route({
    view: "page_Services",
    onCreate: function(){console.log("it is created 1"); start_services_js();},
    onReady: function() {console.log("page is reday 1"); curent_page_navi("pg3"); check_stsus(); url3(); go_to_id();}
});

app.route({
    view: "page_Main",
    onReady: function() {console.log("page is reday Main"); curent_page_navi("last_a"); check_stsus(); url4(); go_to_id();}
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
        pages_id.addEventListener("click", function(){pages_id.style.color="royalblue";});
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

function check_stsus(){
    const status=localStorage.getItem("login_status");
    if(status=="1"){
        const cur_user=localStorage.getItem("username");
        document.getElementById("hello_user").innerHTML="~Hello "+cur_user+"~";
    }
    else{
        window.location.href="#page_Login";
        console.log("Error, not logged in!");
        document.getElementById("hello_user").innerHTML="";
        document.getElementById("login_status_red").style.display="block";
        setTimeout(()=>{document.getElementById("login_status_red").style.display="none"}, 3000);
    }
}

const cur_user=localStorage.getItem("username");
if(cur_user!=null){
    document.getElementById("hello_user").innerHTML="~Hello "+cur_user+"~";
}


function url1(){
    window.history.pushState({page: "pg1"}, "Signup","/Signup");
}
function url2(){
    window.history.pushState({page: "pg2"}, "Login", "/Login");
}
function url3(){
    window.history.pushState({page: "pg3"}, "Services", "/Services");
}
function url4(){
    window.history.pushState({page: "last_a"}, "Main", "/Main");
}



localStorage.setItem("scroll_to", "");
function scrole_to(id){
    document.getElementById(id).scrollIntoView();
}
function go_to(id, id2){
    localStorage.setItem("scroll_to", id)
    window.location.href=id2;
    console.log("TEST1");
}
function go_to_id(){
    const to_id=localStorage.getItem("scroll_to");
    console.log("TEST1, "+to_id);
    if(to_id!=""){
        setTimeout(()=>{
            console.log("TEST2, "+to_id);
            document.getElementById(to_id).scrollIntoView();
            localStorage.setItem("scroll_to", "");
            console.log("TEST2");
        }, 200);
    }
}