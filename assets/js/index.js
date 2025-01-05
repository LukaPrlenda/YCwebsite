var app=$.spapp({
    defaultView: "#page_Main",
    templateDir: "../../views/"
});
  
app.run();

app.route({
    view: "page_Services",
    onCreate: function(){console.log("it is created 1"); start_services_js();}
});

app.route({
    view: "page_Signup",
    onCreate: function(){console.log("it is created 2"); start_signup_js();}
});