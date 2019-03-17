// This file is in the entry point in your webpack config.
import './styles.css';

function getBackgroundImage(event) {
  event.preventDefault();
  const location = document.getElementById('search_field').value;
  fetch(`https://mighty-tor-63466.herokuapp.com//api/v1/backgrounds?location=${location}`)
  .then(result => {
    return result.json();
  })
  .then(json => {
    backgroundImage(json);
  })
  .catch(error => console.log(error));
};

function backgroundImage(json) {
  // document.body.style.backgroundImage = `url(#{json.data.attributes.photo_url})`;
  document.body.style.backgroundImage = 'url(' + json.data.attributes.photo_url + ')';
  document.body.style.backgroundSize = 'contain';
  document.body.style.backgroundPosition = 'center center';
  document.body.style.backgroundAttachment = 'fixed';
  document.body.style.backgroundRepeat = 'no-repeat';
};

function getLocation(event) {
  event.preventDefault();
  const location = document.getElementById('search_field').value;
  fetch(`https://mighty-tor-63466.herokuapp.com//api/v1/forecast?location=${location}`)
  .then(result => {
    return result.json();
  })
  .then(json => {
    currentWeather(json);
    currentWeatherDetails(json);
    forecast(json);
  })
  .catch(error => console.log(error));
};

function currentWeather(json) {
  document.getElementById('current_weather').style.display = '';

  document.getElementById('city').innerHTML = json.data.attributes.city;
  document.getElementById('short_summary').innerHTML = json.data.attributes.current.icon;
  document.getElementById('temp').innerHTML = json.data.attributes.current.temperature;
  document.getElementById('current_high').innerHTML = 'High: ' + json.data.attributes.daily[0].temp_high;
  document.getElementById('current_low').innerHTML = 'Low: ' + json.data.attributes.daily[0].temp_low;
  document.getElementById('current_date').innerHTML = json.data.attributes.date;
  document.getElementById('current_time').innerHTML = json.data.attributes.time;
};

function currentWeatherDetails(data) {
    document.getElementById('current_weather_details').style.display = '';
};

function forecast(data) {
    document.getElementById('forecast').style.display = '';
};

function changeLocation() {
  document.getElementById('current_weather').style.display = 'none';
  document.getElementById('current_weather_details').style.display = 'none';
  document.getElementById('forecast').style.display = 'none';
  document.body.style.background = '';
};


document.getElementById('current_weather').style.display = 'none';
document.getElementById('current_weather_details').style.display = 'none';
document.getElementById('forecast').style.display = 'none';
document.getElementById('search-btn').addEventListener('click', getLocation);
document.getElementById('search-btn').addEventListener('click', getBackgroundImage);
// document.getElementById('search-btn').addEventListener('click', () => {
//     getLocation;
//     getBackgroundImage;
// });
document.getElementById('change_location-btn').addEventListener('click', changeLocation);
