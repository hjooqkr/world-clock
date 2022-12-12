function formattedTime() {
  let timeElementSeoul = document.querySelector("#seoul-time");
  let dateElementSeoul = document.querySelector("#seoul-date");
  timeElementSeoul.innerHTML = moment()
    .tz("Asia/Seoul")
    .format("[<strong>]hh:mm:ss[</strong>] [<small>]A[</small>]");
  dateElementSeoul.innerHTML = moment()
    .tz("Asia/Seoul")
    .format("dddd, Do MMMM YYYY");

  let timeElementParis = document.querySelector("#paris-time");
  let dateElementParis = document.querySelector("#paris-date");
  timeElementParis.innerHTML = moment()
    .tz("Europe/Paris")
    .format("[<strong>]hh:mm:ss[</strong>] [<small>]A[</small>]");
  dateElementParis.innerHTML = moment()
    .tz("Europe/Paris")
    .format("dddd, Do MMMM YYYY");

  let timeElementNy = document.querySelector("#newyork-time");
  let dateElementNy = document.querySelector("#newyork-date");
  timeElementNy.innerHTML = moment()
    .tz("America/New York")
    .format("[<strong>]hh:mm:ss[</strong>] [<small>]A[</small>]");
  dateElementNy.innerHTML = moment()
    .tz("America/New York")
    .format("dddd, Do MMMM YYYY");
}

function showSelectedCity(event) {
  let cityTimezone = event.target.value;
  if (cityTimezone === "current") {
    cityTimezone = moment.tz.guess();
  }
  let cityName = cityTimezone.replace("_", "").split("/")[1];
  let cityTime = moment().tz(cityTimezone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `<div class="city">
                <div>
                    <h2>
                       ${cityName}
                    </h2>
                    <div class="date">
${cityTime.format("dddd, Do MMMM YYYY")}
                    </div>
                </div>

                <div class="time">
<strong>${cityTime.format("hh:mm:ss")}</strong> 
<small>${cityTime.format("A")}</small>
                </div>
            </div>
            <a href="/" class="home">Go back to all cities</a>`;
}

setInterval(formattedTime, 1000);

let selectedCities = document.querySelector("#city");
selectedCities.addEventListener("change", showSelectedCity);
