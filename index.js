function updateTime() {
  let londonElement = document.querySelector("#london");
  if (londonElement) {
    let londonDateElement = londonElement.querySelector(".date");
    let londonTimeElement = londonElement.querySelector(".timing");
    let londoncode = moment().tz("Europe/London");
    londonDateElement.innerHTML = londoncode.format("dddd, Do MMMM YYYY");
    londonTimeElement.innerHTML = londoncode.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
  let parisElement = document.querySelector("#paris");
  if (parisElement) {
    let parisDateElement = parisElement.querySelector(".date");
    let parisTimeElement = parisElement.querySelector(".timing");
    let pariscode = moment().tz("Europe/Paris");
    parisDateElement.innerHTML = pariscode.format("dddd, Do MMMM YYYY");
    parisTimeElement.innerHTML = pariscode.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}
function selectCity(event) {
  let countryTimezone = event.target.value;
  if (countryTimezone === "current") {
    countryTimezone = moment.tz.guess();
  }
  let countryName = countryTimezone.split("/")[1];
  let countryTime = moment().tz(countryTimezone);
  let countryElement = document.querySelector("#cities");
  countryElement.innerHTML = `
   <div class="city">
          <div>
            <div>${countryName}</div>
            <div class="date">${countryTime.format("Do, MMMM YYYY")}</div>
          </div>
          <div class="timing">${countryTime.format(
            "h:mm:ss"
          )}<small>${countryTime.format("A")}</small></div>
        </div>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let countrySelectElement = document.querySelector("#country");
countrySelectElement.addEventListener("change", selectCity);
