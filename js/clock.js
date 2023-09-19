//clock의 h1 가져오기
const clock = document.querySelector(".clock");
const clockTitle = clock.querySelector("h1");

function getClockTitle() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clockTitle.innerText = `${hours}:${minutes}:${seconds}`;
}

getClockTitle();
setInterval(getClockTitle, 1000);
