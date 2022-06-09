// gets all stat buttons
const statBtns = document.querySelectorAll(".stats");
console.log(statBtns);

// Async await to fetch data from Json file
const getData = async () => {
  try {
    const response = await fetch("data.json");
    const stats = await response.json();
    // return await response.json();

    return stats;
  } catch (error) {
    console.log("There was an error fetching the data");
    console.log(error);
  }
};

console.log(getData());

// Gets all six activity cards and saves as variable
const activityCards = document.querySelectorAll(".activity");

// const btnStyles = (duration) => {
//   // const daily = document.querySelector("#daily");
//   // const weekly = document.querySelector("#weekly");
//   // const monthly = document.querySelector("#monthly");

//   if (duration === "daily") {
//     daily.style.opacity = "1";
//     daily.style.color = "white";
//     weekly.style.opacity = "0.3";
//     monthly.style.opacity = "0.3";
//   } else if (duration === "weekly") {
//     daily.style.opacity = "0.3";
//     weekly.style.opacity = "1";
//     weekly.style.color = "white";
//     monthly.style.opacity = "0.3";
//   } else if (duration === "monthly") {
//     daily.style.opacity = "0.3";
//     weekly.style.opacity = "0.3";
//     monthly.style.opacity = "1";
//     monthly.style.color = "white";
//   }
// };
// function that loads data in each activity card by making api call. Invoked in event listener further below
function showData(btn) {
  activityCards.forEach((activityCard, index) => {
    const prevActivity = activityCard.querySelector(".previous-activity");

    getData().then((data) => {
      const currHrs = data[index].timeframes[btn.dataset.btn].current;
      const prevHrs = data[index].timeframes[btn.dataset.btn].previous;

      switch (btn.dataset.btn) {
        case "daily":
          // btnStyles("daily");
          prevActivity.innerHTML = `<h3 class='curr-hrs'> ${currHrs} hrs</h3>
      <p class='previous-hrs'>Last Week - ${prevHrs} hrs</p>`;
        case "weekly":
          // btnStyles("weekly");
          prevActivity.innerHTML = `<h3 class='curr-hrs'> ${currHrs} hrs</h3>
      <p class='previous-hrs'>Last Week - ${prevHrs} hrs</p>`;
        case "monthly":
          // btnStyles("monthly");
          prevActivity.innerHTML = `<h3 class='curr-hrs'> ${currHrs} hrs</h3>
      <p class='previous-hrs'>Last Week - ${prevHrs} hrs</p>`;
        default:
      }
    });
  });
}
// function that applies opacity to buttons based on whether active or not

console.log(getData());

// adds event listener to each button

statBtns.forEach((statBtn) => {
  statBtn.addEventListener("click", (e) => {
    statBtns.forEach((statBtn) => statBtn.classList.remove("active"));

    statBtn.classList.add("active");
    showData(e.currentTarget);
  });
});

// loads default data
function defaultData() {
  // btnStyles("daily");
  const dailyData = document.querySelector("[data-tab='daily']");
  const daily = document.getElementById("daily");
  daily.classList.add("active");
  showData(dailyData);
}
document.addEventListener("DOMContentLoaded", defaultData);
