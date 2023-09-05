window.onload = (event) => {
  // Add full date
  let p = document.createElement("p");
  p.setAttribute("id", "dateNow");
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZoneName: "short",
  };
  p.innerText = new Date().toLocaleTimeString(navigator.language, options);
  document.querySelector("#root").appendChild(p);

  // Add week number
  p = document.createElement("p");
  p.setAttribute("id", "weekNumber");
  const now = moment();
  const weekNumber = now.format("YYW");
  const dayNumber = now.day();
  p.innerText = `Week ${weekNumber}.${dayNumber}`;
  document.querySelector("#root").appendChild(p);
};
