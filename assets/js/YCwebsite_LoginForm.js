function start_login_js(){
    document.getElementById("form_login").addEventListener("submit", function(event){login_form_submit();event.preventDefault();});

    async function login_form_submit(){
        const form_login=document.getElementById("form_login");
        const data= new FormData(form_login);
        try{
            const response=await fetch ("https://jsonplaceholder.typicode.com/posts", {
                method: "POST",
                body: data,
            });
            const data_json=await data.get("username");
            if(response.ok){
                console.log("Login data successfully sent!");
                localStorage.setItem("username", data_json);
                localStorage.setItem("login_status", "1");
            }
        }
        catch(error){
            console.log("Error sending Login data: ",error);
        }
    }
}