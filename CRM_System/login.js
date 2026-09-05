function login(){
    const password =document.getElementById("password").value;
    if(password === "admin123"){
        window.location.href =
        "admin.html";
    }
    else{
        alert("Access Denied");
    }
}