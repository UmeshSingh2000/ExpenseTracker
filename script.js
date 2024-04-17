let form = document.getElementById("expenseSubmit");
let table = document.getElementById("table");
let description = document.getElementById("description");
let category = document.getElementById("category");
let amount = document.getElementById("amount");

let total_amount=0;
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let row = document.createElement("tr");
    row.innerHTML = 
    `<tr>
            <td>${description.value}</td>
            <td>${category.value}</td>
            <td>${amount.value}</td>
        </tr>`
    table.appendChild(row)
    total_amount=total_amount+parseInt(amount.value);
    total.innerHTML="Total:"+total_amount;



    description.value = "";
    category.value = "";
    amount.value = "";
    
})

