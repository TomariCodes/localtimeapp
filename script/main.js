let losAngelesElement = document.getElementById("los-angeles");
let londonElement = document.getElementById("london");
function updateTime() {
    // LOS ANGELES
    if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    losAngelesDateElement.innerHTML = moment()
    .tz("America/Los_Angeles")
    .format("MMMM Do YYYY");
    let losAngelesTime = moment().tz("America/Los_Angeles");
    losAngelesTimeElement.innerHTML = losAngelesTime.format("h:mm:ss [<span class=\"meridiem\">]A[</span>]");
    }
    // LONDON
    if (londonElement) {
    let londonTimeElement = londonElement.querySelector(".time");
    let londonDateElement = londonElement.querySelector(".date");
    
    londonDateElement.innerHTML = moment().tz("Europe/London").format("MMMM Do YYYY");
    let londonTime = moment().tz("Europe/London");
    londonTimeElement.innerHTML = londonTime.format("h:mm:ss [<span class=\"meridiem\">]A[</span>]");
    }
}

function updateCity(event) {
    let cityTimeZone = event.target.value;
    let cityName = cityTimeZone.replace("_", "   ").split("/")[1];
    let cityDate = moment().tz(cityTimeZone).format("MMMM Do YYYY");
    let cityTime = moment()
      .tz(cityTimeZone)
      .format('h:mm:ss [<span class="meridiem">]A[</span>]');
    let citiesElement = document.getElementById("cities");
    let cityHTML = `
    <div class="city">
    <div class="city-info">
    <h2>${cityName}</h2>
    <div class="date">${cityDate}</div>
          </div>
          <div class="time">${cityTime}</div>
          </div>`;
    citiesElement.innerHTML = cityHTML;

    }

let citiesSelectElement = document.getElementById("select");

citiesSelectElement.addEventListener("change", updateCity);

updateTime();
setInterval(updateTime, 1000);

/*         <option value="America/Chicago">Chicago</option>
        <option value="America/Los_Angeles">Los Angeles</option>
        <option value="America/Boston">Boston</option>
        <option value="Pacific/Auckland">Auckland</option>
        <option value="Pacific/Honolulu">Honolulu</option>
        <option value="Pacific/Samoa">Samoa</option>
        <option value="Pacific/Apia">Apia</option>
        <option value="Asia/Tokyo">Tokyo</option>
        <option value="Asia/Seoul">Seoul</option>
        <option value="Asia/Busan">Busan</option>
        <option value="Asia/Bangkok">Bangkok</option> 
                <option value="Europe/Paris">Paris</option>
        <option value="Europe/London">London</option>
        <option value="Europe/Rome">Rome</option>
        <option value="Europe/Barcelona">Barcelona</option>
        <option value="America/New_York">New York</option>
        */