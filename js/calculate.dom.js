//calculate page variables
let tableBody = document.querySelector(".product-calc-container");
let calculateBtn = document.querySelector(".calculate-btn");
let budgetAmount = document.querySelector("#budget");
let canvasChartTwo = document.querySelector("#myChartTwo");
let canvasContainerTwo = document.querySelector(".canvas-container-two");

for (let data of changedPriceProducts) {
  let tr = document.createElement("tr");
  tr.innerHTML = `
    <td>
    <input type="checkbox" id="product-calc" name="product-calc" class="product-calc" value="${data[2022]}"/>
    <label for="rice">${data.itemName}</label>
    </td>
    <td>${data.desc}</td>
    <td>
    <select class="qty">
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    </select>
    </td>
    <td>R${data[2022]}</td>`;
  tableBody.appendChild(tr);
}

let checkbox = document.querySelectorAll(".product-calc");
let estimatedPrice = document.querySelector(".estim-price");
let remainCash = document.querySelector(".remain-cash");
let quantity = document.querySelectorAll(".qty");

function createBlankYearlyTotals() {
  return [
    { year: "2017", total: 0 },
    { year: "2018", total: 0 },
    { year: "2019", total: 0 },
    { year: "2020", total: 0 },
    { year: "2021", total: 0 },
    { year: "2022", total: 0 },
  ];
}

let yearlyTotals = createBlankYearlyTotals();

function showDefaultDataset() {
  yearlyTotals.forEach((yearlyTotal, k) => {
    yearlyTotal.total += Number(changedPriceProducts[k][yearlyTotal.year]) * 1;
  });
  graphData();
}

showDefaultDataset();

calculateBtn.addEventListener("click", () => {
  calcTotal();
});

function calcTotal() {
  totalPrice2022 = 0;
  let cashLeft = 0;
  yearlyTotals = createBlankYearlyTotals();

  const wasAnythingChecked = [...checkbox].some((c) => c.checked);

  if (!wasAnythingChecked) {
    showDefaultDataset();
    return;
  }

  checkbox.forEach((element, k) => {
    if (element.checked == true) {
      //looping through quantity

      let qtyTest = quantity[k].options[quantity[k].selectedIndex].value;

      yearlyTotals.forEach((yearlyTotal) => {
        yearlyTotal.total +=
          Number(changedPriceProducts[k][yearlyTotal.year]) * qtyTest;
      });

      totalPrice2022 += Number(changedPriceProducts[k][2022]) * qtyTest;
      // console.log("total", totalPrice2022);
    }
  });

  estimatedPrice.setAttribute("placeholder", totalPrice2022.toFixed(2));
  cashLeft = budgetAmount.value - totalPrice2022;
  remainCash.innerHTML = cashLeft.toFixed(2);

  graphData();
}

function graphData() {
  //remove and create canvas element
  canvasChartTwo.remove();
  canvasContainerTwo.innerHTML = `<canvas id="myChartTwo"></canvas>`;

  const labels = ["2017", "2018", "2019", "2020", "2021", "2022"];

  const data = {
    labels: labels,
    datasets: [
      {
        label: "see how much you have been spending over the years",
        backgroundColor: "rgb(0, 0, 132)",
        borderColor: "rgb(0, 99, 132)",
        data: yearlyTotals.map((t) => t.total),
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
}
graphData();

// function calcTotal(totalVar, year) {
//   totalVar = 0;
//   let cashLeft = 0;
//   checkbox.forEach((element, k) => {
//     if (element.checked == true) {
//       //looping through quantity
//       let qtyTest = 1;
//       qtyTest = quantity[k].options[quantity[k].selectedIndex].value;

//       totalPrice2022 += Number(changedPriceProducts[k][2017]) * qtyTest;
//       console.log("total", totalPrice2022);
//     }
//   });
//   console.log(totalPrice2022.toFixed(2));

//   estimatedPrice.setAttribute("placeholder", totalPrice2022.toFixed(2));

//   cashLeft = budgetAmount.value - totalPrice2022;
//   remainCash.innerHTML = cashLeft.toFixed(2);
//   return totalVar;
// }
