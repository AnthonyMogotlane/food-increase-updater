//DOM element references
let dropdown = document.querySelector(".food-items");
let canvasContainer = document.querySelector(".canvas-container");
let canvasChart = document.querySelector("#myChart");

//instance of PriceChecker function
let test = PriceChecker();

//dropdown event listener
dropdown.addEventListener("change", (e) => {
  e.preventDefault();

  //dropdown input value
  test.setProductDetails(dropdown.options[dropdown.selectedIndex].value);

  let theObj = test.getProductObj(); //selected object from the list of products

  //remove and create canvas element
  canvasChart.remove();
  canvasContainer.innerHTML = `<canvas id="myChart"></canvas>`;

  //product graph set up
  const labels = ["2017", "2018", "2019", "2020", "2021", "2022"];

  const data = {
    labels: labels,
    datasets: [
      {
        label: `${theObj.itemName}`,
        backgroundColor: "rgb(0, 0, 132)",
        borderColor: "rgb(0, 99, 132)",
        data: [
          theObj[2017],
          theObj[2018],
          theObj[2019],
          theObj[2020],
          theObj[2021],
          theObj[2022],
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

  const myChart = new Chart(document.getElementById("myChart"), config);
});
