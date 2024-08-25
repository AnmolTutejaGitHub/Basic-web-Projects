'use script'

// below is not modern way of handling API calls 
// to make XML request
const request = new XMLHttpRequest();
// The XMLHttpRequest() function by itself does not make a request; it only creates a new XMLHttpRequest object, which you can use to send a request to a server.

// request is object to make request
request.open('GET', 'https://countries-api-836d.onrender.com/countries/India');
// (type of request , url to make request)
// this url is called API endpoint
// An API endpoint is a specific URL where an API (Application Programming Interface) interacts with another software application. It is a point of communication within a server or service where the API can receive requests and send responses.
// Example:
// Imagine you are working with a weather API to get the current weather for a city.
// 	•	API Endpoint: https://api.weather.com/v3/weather/forecast
// 	•	https://api.weather.com is the base URL for the API.
// 	•	/v3/weather/forecast is the specific endpoint that gives you the weather forecast.
// When you send a GET request to this endpoint (with necessary parameters like city name, API key, etc.), the server processes the request and returns the data you need, such as the weather forecast.



request.send(); // to send the request
// this will send the request to the url specified above
// cant do const data = request.send(); as the result is not here yet request call is sent and code contines running 

// we added event listner here as the callback func will only be execurted once the load (response has arrived)
request.addEventListener('load', function () {
    // console.log(this.responseText); // this is actullt request object here // can use request too instead of this
    // responsetext to text data
    const data = JSON.parse(this.responseText); // need to parse it into js object it is in json(String format)
    console.log(data);


    // the html we want to insert to our container div
    const html = `
  <article class="country">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span></span>${(
            +data.population / 1000000
        ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>
  `;

    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
})

// can make above request into a function 
// and make api call for the country we can do ${countname}






