function updateTime() {
  let londonElement = document.querySelector("#london");
  let londonDateElement = londonElement.querySelector(".date");
  let londonTimeElement = londonElement.querySelector(".timing");
  let londoncode = moment().tz("Europe/London");
  londonDateElement.innerHTML = londoncode.format("dddd, Do MMMM YYYY");
  londonTimeElement.innerHTML = londoncode.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let parisElement = document.querySelector("#paris");
  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".timing");
  let pariscode = moment().tz("Europe/Paris");
  parisDateElement.innerHTML = pariscode.format("dddd, Do MMMM YYYY");
  parisTimeElement.innerHTML = pariscode.format("H:MM:SS [<small>]A[</small>]");
}

updateTime();
setInterval(updateLondonTime, 1000);
