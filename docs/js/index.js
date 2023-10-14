window.onload = (event) => {
  let p = document.createElement("p");
  p.setAttribute("id", "dateNow");
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };
  p.innerText = new Date().toLocaleTimeString(navigator.language, options);
  document.querySelector("main").appendChild(p);

  p = document.createElement("p");
  p.setAttribute("id", "weekNumber");
  const weekNumber = moment().format("W");
  p.innerText = `Week ${weekNumber}`;
  document.querySelector("main").appendChild(p);
};
