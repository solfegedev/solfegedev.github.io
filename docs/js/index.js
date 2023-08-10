window.onload = (event) => {
  const weekNumber = moment().format("W");
  const dateNow = new Date().toISOString();

  document.getElementById("dateNow").innerHTML = `${dateNow}`;
  document.getElementById("WeekNumber").innerHTML = `Week ${weekNumber}`;
};
