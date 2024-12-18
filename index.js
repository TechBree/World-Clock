let londonElement = document.querySelector("#london");
let londonDateElement = londonElement.querySelector(".date");
let londonTimeElement = londonElement.querySelector(".timing");
londonDateElement.innerHTML = moment().format("dddd, Do MMMM YYYY");
londonTimeElement.innerHTML = "1:30:45 <small>PM</small";
