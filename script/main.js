let losAngelesElement = document.getElementById("los-angeles");
let londonElement = document.getElementById("london");
function updateTime() {
    // LOS ANGELES
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    losAngelesDateElement.innerHTML = moment()
    .tz("America/Los_Angeles")
    .format("MMMM Do YYYY");
    let losAngelesTime = moment().tz("America/Los_Angeles");
    losAngelesTimeElement.innerHTML = losAngelesTime.format("h:mm:ss [<span class=\"meridiem\">]A[</span>]");
    
    // LONDON
    let londonTimeElement = londonElement.querySelector(".time");
    let londonDateElement = londonElement.querySelector(".date");
    
    londonDateElement.innerHTML = moment().tz("Europe/London").format("MMMM Do YYYY");
    let londonTime = moment().tz("Europe/London");
    londonTimeElement.innerHTML = londonTime.format("h:mm:ss [<span class=\"meridiem\">]A[</span>]");
}

updateTime()
setInterval(updateTime, 1000);