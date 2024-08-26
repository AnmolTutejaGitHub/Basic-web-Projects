//https://www.visualcrossing.com/resources/documentation/weather-api/timeline-weather-api/
//https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/London,UK/2020-12-15T13:00:00?key=YOUR_API_KEY 
let result = {}
fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/rajpura?unitGroup=us&key=3Q4A9VP2EMGWFJVS8R8PQPUUD&contentType=json
`).then(response => response.json()).then(function (data) {
    result = data;
    console.log(result);
    console.log(data);

    let date = document.querySelector('.date');
    date.textContent = result.days[0].datetime;

    const temp = document.querySelector('.temp');
    temp.textContent = result.days[0].temp + '°C';
});

let idx = 1;
function next() {
    while (!result);
    if (idx < result.days.length) {
        let date = document.querySelector('.date');
        date.textContent = result.days[idx].datetime;

        const temp = document.querySelector('.temp');
        temp.textContent = result.days[idx].temp + '°C';
        idx++;
    } else idx = 0;
}



