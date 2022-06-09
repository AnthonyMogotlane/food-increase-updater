//calculate page variables
let tableBody = document.querySelector(".product-calc-container");
let calculateBtn = document.querySelector(".calculate-btn");
let budgetAmount = document.querySelector("#budget");


for(let data of changedPriceProducts) {
    
    let tr = document.createElement("tr");
    tr.innerHTML = `
    <td>
    <input type="checkbox" id="product-calc" name="product-calc" class="product-calc" value="${data[2022]}"/>
    <label for="rice">${data.itemName}</label>
    </td>
    <td>${data.desc}</td>
    <td>R${data[2022]}</td>`
    tableBody.appendChild(tr)
}

let checkbox = document.querySelectorAll(".product-calc");
let estimatedPrice = document.querySelector(".estim-price");
let remainCash = document.querySelector(".remain-cash");



calculateBtn.addEventListener("click", () => {
    let totalPrice = 0;
    let cashLeft = 0;
    checkbox.forEach(element => {
        
        if(element.checked == true) {
            totalPrice += Number(element.value);
        }
    });
    console.log(totalPrice.toFixed(2));
    
    estimatedPrice.setAttribute("placeholder", totalPrice.toFixed(2))
    console.log(budgetAmount.value)
    cashLeft = budgetAmount.value - totalPrice;
    remainCash.innerHTML = cashLeft.toFixed(2);

})



const labels = ["2017", "2018", "2019", "2020", "2021"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "this year you paid 22% more, check!",
      backgroundColor: "rgb(0, 0, 132)",
      borderColor: "rgb(0, 99, 132)",
      data: [
        10,
        20,
        30,
        40,
        50,
      ],
    },
  ],
};

const config = {
  type: "line",
  data: data,
  options: {
    maintainAspectRatio: false,
  },
};

const myChartTwo = new Chart(document.getElementById("myChartTwo"), config);
