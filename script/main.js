let losAngelesElement = document.getElementById("los-angeles");
let londonElement = document.getElementById("london");

let losAngelesDateElement = losAngelesElement.querySelector(".date");
let losAngelesTimeElement = losAngelesElement.querySelector(".time");

let londonDateElement = londonElement.querySelector(".date");
let londonTimeElement = londonElement.querySelector(".time");

losAngelesDateElement.innerHTML = "June 23rd 2026";
losAngelesTimeElement.innerHTML = `7:40:15 <span class="meridiem">PM</span>`;

londonDateElement.innerHTML = "June 23rd 2026";
londonTimeElement.innerHTML = `11:40:15 <span class="meridiem">PM</span>`;