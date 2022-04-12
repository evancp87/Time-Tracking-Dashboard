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
}

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

// const getData = () => fetch("data.json")
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
// const timeframes = ["daily", "weekly", "monthly"];
    if (id === "daily") {
      btnStyles("daily");
      getData().then((stats) =>
        stats.forEach((stat) => {
          activities.forEach((activity) => {
            activity.innerHTML = `
                      <h3 class='curr-hrs'> ${stat.timeframes.daily.current} hrs</h3>
                      <p class='previous-hrs'>Last Week - ${stat.timeframes.daily.previous} hrs</p>`;
            // return activity;
          });
        })
      );
    } else if (id === "weekly") {
      btnStyles("weekly");

      getData().then((stats) =>
        stats.forEach((stat) => {
          activities.forEach((activity) => {
              console.log(activity)
            activity.innerHTML = `
                      <h3 class='curr-hrs'> ${stat.timeframes.weekly.current} hrs</h3>
                      <p class='previous-hrs'>Last Week - ${stat.timeframes.weekly.previous} hrs</p>`;

            // return activity;
          });
        })
      );
    } else if (id === "monthly") {

    
      btnStyles("monthly");

      getData().then((stats) =>
        stats.map((stat) => {
          console.log(`${stat.timeframes.monthly.previous} hours`);
        
            //   console.log(activity);
               activities.innerHTML = `
              <h3 class='curr-hrs'> ${stat.timeframes.monthly.current} hrs</h3>
              <p class='previous-hrs'>Last Week - ${stat.timeframes.monthly.previous} hrs</p>`;

            console.log(activities.innerHTML);
            // return activities.forEach((activity => activity.innerHTML));
            // let content = activities.innerHTML
            // console.log(content);

         
        })
      );
    }
  })
);
