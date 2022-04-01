// const daily = document.getElementById('daily');
// const weekly = document.getElementById('weekly');
// const monthly = document.getElementById('monthly');

// const filter = stats.filter((title) => title === title.id);
// stat options on user profile card
const statBtns = document.querySelectorAll(".stats");
console.log(statBtns);

// gets current and previous activity sections of activity cards
const activities = document.querySelectorAll("previous-activity");

// Fetching data from Json file
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

console.log(getData());
// adds event listener to each button
statBtns.forEach((statBtn) =>
  statBtn.addEventListener("click", () => {
    // activities.map((e) => e.currentTarget.add )
    // const currHrs = document.createElement('<h3>');
    // const prevHrs = document.createElement('p');
    const currHrs = document.querySelectorAll("currHrs");
    const prevHrs = document.querySelectorAll("prevHrs");

    const id = e.target.id;

    
    if (id === "daily") {
        getData().then(stats.forEach( stat => {
          activities.innerHTML = `
                  <h3> ${stat.timeframes.daily.current}</h3>;
                  <p>${stat.timeframes.daily.previous}</p>`;
        }));
      }
  
      
      

    

    if (id === "weekly") {
      getData().then(stats.forEach( stat => {
        activities.innerHTML = `
                <h3> ${stat.timeframes.weekly.current}</h3>;
                <p>${stat.timeframes.weekly.previous}</p>`;
      }));
    }

    if (id === "monthly") {
        getData().then(stats.forEach( stat => {
          activities.innerHTML = `
                  <h3> ${stat.timeframes.monthly.current}</h3>;
                  <p>${stat.timeframes.monthly.previous}</p>`;
        }));
      }
  })
);
// class Statistic {
//   constructor(title, timeframes) {
//     this.title = title;
//     this.timeframes = timeframes;
//   }
// }

// asynchronous call to json file

//

// getData().then(stats => {
//     const filter = stats.filter(stat => new Statistic(
//         stat.title,
//         stat.timeframes
//         )

//         // switch (state.title) {
//         //     case 'Work':
//         //     break;
//         //     case 'Play':
//         //     break;
//         //     case 'Study':
//         //     break;
//         //     case 'Exercise':
//         //     break;
//         //     case 'Social':
//         //     break;
//         //     case 'Self Care':
//         //     break;

//         // }
//     )

// })

// stats.map((stat) => {
//     stat.addEventListener("click", (e) => {

//         // const createElement
//       e.currentTarget.classList.add("active");

//     //   stat.innerHTML = createElement / appendChild
//     });
//   });

// OOP comparisons between variables and data

// onLoad function has default state

// const getActivityData = () => {
// const removeActivityData = () => document.querySelectorAll('curr-hrs, prev-hrs').style.display = "none";
// removeActivityData();
//     console.log(removeActivityData);

//     getData().then((stats) => {
//     // const filter = stats.filter(stat => stat === stat.id)
//      const currHrs = document.createElement('<h3>');
//      const prevHrs = document.createElement('p');

//      const id = e.currentTarget.id;
//     //  activities.classList.add('')

//         if (stat.id === "daily") {
//         currHrs.innerHTML = stat.timeframes.daily.current;
//         prevHrs.innerHTML = stat.timeframes.daily.previous;
//         };

//         if (stat.id === "weekly") {
//         //   return stat.timeframes.weekly;
//         currHrs.innerHTML = stat.timeframes.daily.current;
//         prevHrs.innerHTML = stat.timeframes.daily.previous;

//         }

//         if (stat.id === "monthly") {
//             currHrs.innerHTML = stat.timeframes.daily.current;
//         prevHrs.innerHTML = stat.timeframes.daily.previous;
//         }
// currHrs.appendChild(prevHrs);

//     });

// }

// getActivityData();

//         // const createElement
//       e.currentTarget.classList.add("active");

//     //   stat.innerHTML = createElement / appendChild
