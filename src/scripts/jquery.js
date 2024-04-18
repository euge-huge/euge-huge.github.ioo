// const createTodo = () => {
//   const text = $("#create-input").val();

//   console.log(text);
// };

// $("#create-btn").on("click", () => {
//     $("#create-btn").animate({left: "250px"});
// });

// selector
// $("#create-btn")

// event
// $("#create-btn").on("click"

// ajax
// $.ajax("").then().catch()

// Other Libraries
// GridJS
new gridjs.Grid({
  columns: ["Name", "Email", "Phone Number"],
  pagination: {
    limit: 2,
  },
  sort: true,
  search: true,
  data: [
    ["John", "john@example.com", "(353) 01 222 3333"],
    ["Mark", "mark@gmail.com", "(01) 22 888 4444"],
    ["Eoin", "eoin@gmail.com", "0097 22 654 00033"],
    ["Sarah", "sarahcdd@gmail.com", "+322 876 1233"],
    ["Afshin", "afshin@mail.com", "(353) 22 87 8356"],
  ],
}).render(document.getElementById("table"));

// ChartJS
const ctx = document.getElementById("myChart");

new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

// Fancybox slider
const container = document.getElementById("myCarousel");
const options = { infinite: true };

new Carousel(container, options);
