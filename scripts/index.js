// const daily = document.getElementById('daily');
// const weekly = document.getElementById('weekly');
// const monthly = document.getElementById('monthly');

const stats = document.querySelectorAll('.stats');
console.log(stats);
console.log("hello world");


// const getData = async () => {
// const fetchData =  await fetch(data.json);
// }


const getData = async () => {
    try {
        const response = await fetch('data.json');
        const stats = await response.json();

        return stats;
        
    }
    catch (error) {
        console.log('There was an error fetching the data');
        console.log(error);
    }
}

console.log(getData());

getData().then(stats => {
    return stats;
})

// OOP comparisons between variables and data