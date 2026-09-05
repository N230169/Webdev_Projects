const form = document.getElementById("admissionForm");

form.addEventListener("submit", function(event) {

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    if(name === "") {
        alert("Please enter your full name.");
        event.preventDefault();
        return;
    }

    if(email === "") {
        alert("Please enter your email.");
        event.preventDefault();
        return;
    }

    alert("Application submitted successfully!");
});