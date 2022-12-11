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

  let timeElementSydney = document.querySelector("#sydney-time");
  let dateElementSydney = document.querySelector("#sydney-date");
  timeElementSydney.innerHTML = moment()
    .tz("Australia/Sydney")
    .format("[<strong>]hh:mm:ss[</strong>] [<small>]A[</small>]");
  dateElementSydney.innerHTML = moment()
    .tz("Australia/Sydney")
    .format("dddd, Do MMMM YYYY");
}
setInterval(formattedTime, 1000);
