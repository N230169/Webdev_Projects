const theme= document.getElementById('theme');
const amount=document.getElementById('amount');
const transaction=document.getElementById('transcation');
const category=document.getElementById('category');
const date=document.getElementById('date');
const time=document.getElementById('time');
const submission=document.getElementById('submit')
const table1=document.getElementById('table1');
theme.addEventListener("click",()=>{
    document.body.classList.toggle("light");
    if(document.body.classList.contains("light")){
        theme.textContent="☀️Light";
    }
    else{
        theme.textContent="🌙Dark";
    }
});

submission.addEventListener("click",(event)=>{
    event.preventDefault();
    const transactionData = {
        amount: amount.value,
        type: transaction.value,
        category: category.value,
        date: date.value,
        time: time.value
    };
    let transactions = JSON.parse(localStorage.getItem("transactions")) || [];
    transactions.push(transactionData);
    localStorage.setItem("transactions", JSON.stringify(transactions));
    alert("Transaction added successfully!");
    displayTransactions();
    document.getElementById("expenseForm").reset();
});
function displayTransactions() {
    let transactions = JSON.parse(localStorage.getItem("transactions")) || [];
    table1.innerHTML = "";
    transactions.forEach((item, index) => {
        table1.innerHTML += `
            <tr>
                <td>${item.amount}</td>
                <td>${item.type}</td>
                <td>${item.category}</td>
                <td>${item.date}</td>
                <td>${item.time}</td>
                <td>
                  <div class="actions">
                    <button onclick="edit(${index})">Edit</button>
                    <button onclick="deletion(${index})">Delete</button>
                  </div>
                </td>
            </tr>
        `;
    });
}

function deletion(index) {
    let transactions =
        JSON.parse(localStorage.getItem("transactions")) || [];
    transactions.splice(index, 1);
    localStorage.setItem(
        "transactions",
        JSON.stringify(transactions)
    );
    displayTransactions();
}

function edit(index) {
    let transactions =
        JSON.parse(localStorage.getItem("transactions")) || [];
    let item = transactions[index];
    let newAmount = prompt("Enter amount:", item.amount);
    let newType = prompt("Enter type (Earnings/Expenses):", item.type);
    let newCategory = prompt("Enter category:", item.category);
    let newDate = prompt("Enter date:", item.date);
    let newTime = prompt("Enter time:", item.time);
    if (
        newAmount === null ||
        newType === null ||
        newCategory === null ||
        newDate === null ||
        newTime === null
    ) {
        return;
    }
    item.amount = newAmount;
    item.type = newType;
    item.category = newCategory;
    item.date = newDate;
    item.time = newTime;
    transactions[index] = item;
    localStorage.setItem(
        "transactions",
        JSON.stringify(transactions)
    );
    displayTransactions();
}
function updateDashboard() {
    let transactions =
        JSON.parse(localStorage.getItem("transactions")) || [];
    let totalEarnings = 0;
    let totalExpenses = 0;
    transactions.forEach((item) => {
        if (item.type === "Earnings") {
            totalEarnings += Number(item.amount);
        }
        if (item.type === "Expenses") {
            totalExpenses += Number(item.amount);
        }
    });
    let totalSavings = totalEarnings - totalExpenses;
    let savingsPercentage = 0;
    if (totalEarnings > 0) {
        savingsPercentage =
            (totalSavings / totalEarnings) * 100;
    }
    // Existing dashboard values
    document.getElementById("plus").textContent =
        `Rs.${totalEarnings.toFixed(2)}`;
    document.getElementById("minus").textContent =
        `Rs.${totalExpenses.toFixed(2)}`;
    document.getElementById("balanceAmount").textContent =
        `Balance: Rs.${totalSavings.toFixed(2)}`;
    // New Dashboard
    document.getElementById("dashboardEarnings").textContent =
        `Rs.${totalEarnings.toFixed(2)}`;
    document.getElementById("dashboardExpenses").textContent =
        `Rs.${totalExpenses.toFixed(2)}`;
    document.getElementById("dashboardSavings").textContent =
        `Rs.${totalSavings.toFixed(2)}`;
    document.getElementById("savingsPercentage").textContent =
        `${savingsPercentage.toFixed(2)}%`;
}
displayTransactions();
updateDashboard();
