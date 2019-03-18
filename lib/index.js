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
    forecastHours(json);
    forecastDays(json);
  })
  .catch(error => console.log(error));
};

function currentWeather(json) {
  document.getElementById('current_weather').style.display = '';

  document.getElementById('city').innerHTML = json.data.attributes.city;
  document.getElementById('short_summary').innerHTML = json.data.attributes.current.icon;
  document.getElementById('temp').innerHTML = json.data.attributes.current.temperature + '&#176;';
  document.getElementById('current_high').innerHTML = 'High: ' + json.data.attributes.daily[0].temp_high + '&#176;';
  document.getElementById('current_low').innerHTML = 'Low: ' + json.data.attributes.daily[0].temp_low + '&#176;';
  document.getElementById('current_date').innerHTML = json.data.attributes.date;
  document.getElementById('current_time').innerHTML = json.data.attributes.time;
};

function currentWeatherDetails(json) {
  document.getElementById('current_weather_details').style.display = '';

  document.getElementById('short_summary').innerHTML = json.data.attributes.current.icon;
  document.getElementById('long_summary').innerHTML = json.data.attributes.current.summary;
  document.getElementById('feels_like').innerHTML = 'Feels Like: ' + json.data.attributes.current.feels_like + '&#176;';
  document.getElementById('humidity').innerHTML = 'Humidity: ' + json.data.attributes.current.humidity + '%';
  document.getElementById('visibility').innerHTML = 'Visibility: ' + json.data.attributes.current.visibility;
  document.getElementById('uv_index').innerHTML = 'UV Index: ' + json.data.attributes.current.uv_index;
};

function forecastHours(json) {
  document.getElementById('forecast').style.display = '';

  document.getElementById('hour_one').innerHTML = json.data.attributes.hourly[0].hour;
  document.getElementById('temp_one').innerHTML = json.data.attributes.hourly[0].temperature + '&#176;';

  document.getElementById('hour_two').innerHTML = json.data.attributes.hourly[1].hour;
  document.getElementById('temp_two').innerHTML = json.data.attributes.hourly[1].temperature + '&#176;';

  document.getElementById('hour_three').innerHTML = json.data.attributes.hourly[2].hour;
  document.getElementById('temp_three').innerHTML = json.data.attributes.hourly[2].temperature + '&#176;';

  document.getElementById('hour_four').innerHTML = json.data.attributes.hourly[3].hour;
  document.getElementById('temp_four').innerHTML = json.data.attributes.hourly[3].temperature + '&#176;';

  document.getElementById('hour_five').innerHTML = json.data.attributes.hourly[4].hour;
  document.getElementById('temp_five').innerHTML = json.data.attributes.hourly[4].temperature + '&#176;';

  document.getElementById('hour_six').innerHTML = json.data.attributes.hourly[5].hour;
  document.getElementById('temp_six').innerHTML = json.data.attributes.hourly[5].temperature + '&#176;';

  document.getElementById('hour_seven').innerHTML = json.data.attributes.hourly[6].hour;
  document.getElementById('temp_seven').innerHTML = json.data.attributes.hourly[6].temperature + '&#176;';

  document.getElementById('hour_eight').innerHTML = json.data.attributes.hourly[7].hour;
  document.getElementById('temp_eight').innerHTML = json.data.attributes.hourly[7].temperature + '&#176;';
};

function forecastDays(json) {
  document.getElementById('day_one').innerHTML = json.data.attributes.daily[1].day;
  document.getElementById('day_icon_one').innerHTML = json.data.attributes.daily[1].icon;
  document.getElementById('precip_one').innerHTML = 'Chance of Percipitation: ' +json.data.attributes.daily[1].percipitation + '%';
  document.getElementById('day_high_one').innerHTML = 'High: ' + json.data.attributes.daily[1].temp_high + '&#176;';
  document.getElementById('day_low_one').innerHTML = 'Low: ' + json.data.attributes.daily[1].temp_low + '&#176;';

  document.getElementById('day_two').innerHTML = json.data.attributes.daily[2].day;
  document.getElementById('day_icon_two').innerHTML = json.data.attributes.daily[2].icon;
  document.getElementById('precip_two').innerHTML = 'Chance of Percipitation: ' +json.data.attributes.daily[2].percipitation + '%';
  document.getElementById('day_high_two').innerHTML = 'High: ' + json.data.attributes.daily[2].temp_high + '&#176;';
  document.getElementById('day_low_two').innerHTML = 'Low: ' + json.data.attributes.daily[2].temp_low + '&#176;';

  document.getElementById('day_three').innerHTML = json.data.attributes.daily[3].day;
  document.getElementById('day_icon_three').innerHTML = json.data.attributes.daily[3].icon;
  document.getElementById('precip_three').innerHTML = 'Chance of Percipitation: ' +json.data.attributes.daily[3].percipitation + '%';
  document.getElementById('day_high_three').innerHTML = 'High: ' + json.data.attributes.daily[3].temp_high + '&#176;';
  document.getElementById('day_low_three').innerHTML = 'Low: ' + json.data.attributes.daily[3].temp_low + '&#176;';

  document.getElementById('day_four').innerHTML = json.data.attributes.daily[4].day;
  document.getElementById('day_icon_four').innerHTML = json.data.attributes.daily[4].icon;
  document.getElementById('precip_four').innerHTML = 'Chance of Percipitation: ' +json.data.attributes.daily[4].percipitation + '%';
  document.getElementById('day_high_four').innerHTML = 'High: ' + json.data.attributes.daily[4].temp_high + '&#176;';
  document.getElementById('day_low_four').innerHTML = 'Low: ' + json.data.attributes.daily[4].temp_low + '&#176;';

  document.getElementById('day_five').innerHTML = json.data.attributes.daily[5].day;
  document.getElementById('day_icon_five').innerHTML = json.data.attributes.daily[5].icon;
  document.getElementById('precip_five').innerHTML = 'Chance of Percipitation: ' +json.data.attributes.daily[5].percipitation + '%';
  document.getElementById('day_high_five').innerHTML = 'High: ' + json.data.attributes.daily[5].temp_high + '&#176;';
  document.getElementById('day_low_five').innerHTML = 'Low: ' + json.data.attributes.daily[5].temp_low + '&#176;';
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
