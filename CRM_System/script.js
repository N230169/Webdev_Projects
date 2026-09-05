let leads=JSON.parse(localStorage.getItem("leads"))||[];
const form=document.getElementById("leadForm");
form.addEventListener("submit",function(e){
    e.preventDefault();
    const lead={
        id:Date.now(),
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        source:document.getElementById("source").value,
        phone:document.getElementById("phone").value,
        status:"New",
        notes:""
    };
    leads.push(lead);
    localStorage.setItem("leads",JSON.stringify(leads));
    alert("Lead Added Successfully");
    form.reset();
});
