setInterval(() => {
  let hourHand = document.querySelector(".hour-hand");
  let minuteHand = document.querySelector(".minute-hand");
  let secondHand = document.querySelector(".second-hand");
  let d = new Date();
  let hour = d.getHours();
  let minute = d.getMinutes();
  let second = d.getSeconds();
 
  let hourAngle = (30 * hour + minute / 2);
  let minuteAngle = (6 * minute);
  let secondAngle = (6 * second);

  hourHand.style.transform = `rotate(${hourAngle}deg)`;
  minuteHand.style.transform = `rotate(${minuteAngle}deg)`;
  secondHand.style.transform = `rotate(${secondAngle}deg)`;
}, 1000);
