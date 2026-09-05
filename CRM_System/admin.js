const leads=JSON.parse(localStorage.getItem("leads"))||[];
const table=document.getElementById("leadTable");
function displayLeads(leads){
    table.innerHTML="";
 leads.forEach(lead=>{
    table.innerHTML+= `
    <tr>
     <td>${lead.name}</td>
     <td>${lead.email}</td>
     <td>${lead.phone}</td>
     <td>${lead.source}</td>
     <td>
     <select onchange="updateStatus(${lead.id},this.value)">
     <option value="New" ${lead.status==="New"? "selected":""}>New</option>
     <option value="Contacted"  ${lead.status==="Contacted"? "selected":""}>Contacted</option>
     <option value="Converted"  ${lead.status==="Converted"? "selected":""}>Converted</option>
     <option value="Lost"  ${lead.status==="Lost"? "selected":""}>Lost</option>
     </select>
     </td>
     <td>
     <input type="text" value="${lead.notes}" placeholder=" Add Notes" onchange="updateNotes(${lead.id},this.value)">
     </td>
     <td>
     <button onclick="editLead(${lead.id})">Edit</button>
     <button onclick="deleteLead(${lead.id})">Delete</button>
     </td>
    </tr>
    `;
});
}
function deleteLead(id){
    const confirmdel=confirm("Delete your lead?");
    if(!confirmdel) return;
    let leads=JSON.parse(localStorage.getItem("leads"))||[];
    leads=leads.filter(lead=>lead.id!==id);
    localStorage.setItem(
        "leads",JSON.stringify(leads)
    );
    location.reload();
}
function updateStatus(id,value){
    let leads=JSON.parse(localStorage.getItem("leads"))||[];
    const lead=leads.find(lead=>lead.id==id);
    if(lead){
        lead.status=value;
    }
    localStorage.setItem(
        "leads",JSON.stringify(leads)
    );
    location.reload();
}
function updateNotes(id,value){
    let leads=JSON.parse(localStorage.getItem("leads"))||[];
    const lead=leads.find(lead=>lead.id==id);
    if(lead){
        lead.notes=value;
    }
    localStorage.setItem(
        "leads",JSON.stringify(leads)
    );
    location.reload();
}
displayLeads(leads);
const searchInput=document.getElementById("search");
searchInput.addEventListener("input", function(){

    const value =
    searchInput.value.toLowerCase();

    const filtered =
    leads.filter(lead =>
        lead.name.toLowerCase().includes(value) ||
        lead.email.toLowerCase().includes(value)
    );

    displayLeads(filtered);

});

function editLead(id){

    let leads =
    JSON.parse(localStorage.getItem("leads")) || [];

    const lead =
    leads.find(lead => lead.id == id);

    const newName =
    prompt("Enter New Name", lead.name);

    const newEmail =
    prompt("Enter New Email", lead.email);

    if(newName) lead.name = newName;
    if(newEmail) lead.email = newEmail;

    localStorage.setItem(
        "leads",
        JSON.stringify(leads)
    );

    location.reload();
}