// gets all stat buttons
const statBtns = document.querySelectorAll(".stats");

// console.log(daily);
console.log(statBtns);

// document.querySelector("#daily").addEventListener("click", () => {
// document.querySelector("#weekly").style.color = "red";

// })

// Async await to fetch data from Json file
const getData = async () => {
  try {
    const response = await fetch("data.json");
    const stats = await response.json();

    return stats;
  } catch (error) {
    console.log("There was an error fetching the data");
    console.log(error);
  }
};

const btnStyles = (duration) => {
  const daily = document.querySelector("#daily");
  const weekly = document.querySelector("#weekly");
  const monthly = document.querySelector("#monthly");

  if (duration === "daily") {
    daily.style.opacity = "1";
    weekly.style.opacity = "0.3";
    monthly.style.opacity = "0.3";
  } else if (duration === "weekly") {
    daily.style.opacity = "0.3";
    weekly.style.opacity = "1";
    monthly.style.opacity = "0.3";
  } else if (duration === "monthly") {
    daily.style.opacity = "0.3";
    weekly.style.opacity = "0.3";
    monthly.style.opacity = "1";
  }
};

// const getData = fetch("data.json")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//     return data
//   })

console.log(getData());
// adds event listener to each button

statBtns.forEach((statBtn) =>
  statBtn.addEventListener("click", (e) => {
    const activities = document.querySelectorAll(".previous-activity");
    console.log(activities);

    const id = e.target.id;
    console.log(id);

    if (id === "daily") {
      btnStyles("daily");
      getData().then((stats) =>
        stats.forEach((stat) => {
          activities.innerHTML = `
                <h3> ${stat.timeframes.daily.current} hrs</h3>;
                <p>${stat.timeframes.daily.previous} hrs</p>`;
          return stats;
        })
      );
    } else if (id === "weekly") {
      btnStyles("weekly");

      getData().then((stats) =>
        stats.forEach((stat) => {
          activities.innerHTML = `
                <h3> ${stat.timeframes.weekly.current} hrs</h3>;
                <p>${stat.timeframes.weekly.previous} hrs</p>`;

          return stats;
        })
      );
    } else if (id === "monthly") {
      btnStyles("monthly");

      getData().then((stats) =>
        stats.forEach((stat) => {
          console.log(`${stat.timeframes.monthly.previous} hours`);
          activities.innerHTML = `
                <h3> ${stat.timeframes.monthly.current} hrs</h3>;
                <p>${stat.timeframes.monthly.previous} hrs</p>`;

          return stats;
        })
      );
    }
  })
);
