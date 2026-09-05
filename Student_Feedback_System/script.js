const form = document.getElementById("feedbackForm");

form.addEventListener("submit", function(event) {

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    if(name === "") {
        alert("Please enter your name.");
        event.preventDefault();
        return;
    }

    if(email === "") {
        alert("Please enter your email.");
        event.preventDefault();
        return;
    }

    alert("Feedback submitted successfully!");
});