let dropdown = document.querySelector(".food-items");
console.log(dropdown.options[dropdown.selectedIndex].value);

let test = PriceChecker();

dropdown.addEventListener("change", (e) => {
  e.preventDefault();

  test.setProductDetails(dropdown.options[dropdown.selectedIndex].value);

  let theObj = test.getProductObj();

  const labels = ["2017", "2018", "2019", "2020", "2021"];

  const data = {
    labels: labels,
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "rgb(0, 0, 132)",
        borderColor: "rgb(0, 99, 132)",
        data: [
          theObj[2017],
          theObj[2018],
          theObj[2019],
          theObj[2020],
          theObj[2021],
        ],
      },
    ],
  };

  const config = {
    type: "bar",
    data: data,
    options: {
      maintainAspectRatio: false,
    },
  };

  const myChart = new Chart(document.getElementById("myChart"), config);
});
