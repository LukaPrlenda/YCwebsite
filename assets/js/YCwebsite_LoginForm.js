function start_login_js(){
    document.getElementById("form_login").addEventListener("submit", function(event){login_form_submit();event.preventDefault();});

    async function login_form_submit(){
        const form_login=document.getElementById("form_login");
        const data= new FormData(form_login);
        let stat=0
        try{
            const response=await fetch ("https://jsonplaceholder.typicode.com/posts", {
                method: "POST",
                body: data,
            });
            const username_json=await data.get("username");
            const password_json=await data.get("password");
            const response2=await fetch("./assets/json/Ycwebsite_User_Info.json");
            const user_info_json=await response2.json();
            for(let i in user_info_json){
                if(user_info_json[i].username==username_json && user_info_json[i].password==password_json){
                    
                    if(response.ok){
                        console.log("Login data successfully sent!");
                        console.log("User found");
                        localStorage.setItem("username", username_json);
                        localStorage.setItem("login_status", "1");
                        window.location.href="#page_Main";
                        stat=1;
                    }
                }
            }
            if(response.ok && stat==0){
                console.log("Login data successfully sent!");
                console.log("User not found");
            }

        }
        catch(error){
            console.log("Error sending Login data: ",error);
        }
    }
}