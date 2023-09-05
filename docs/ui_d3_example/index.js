/**
 * Charts using D3
 */
"use strict";

function _main() {
  const places = [
    { name: "Chesterfield", coords: [53.248, -1.471] },
    { name: "Hitchin", coords: [51.958, -0.283] },
  ];
  places.forEach((place) => processPlace(place));
}

function processPlace(place) {
  const url =
    "https://api.weather.com/v3/wx/forecast/hourly/15day?" +
    "apiKey=e1f10a1e78da46f5b10a1e78da96f525" +
    `&geocode=${place.coords[0]}%2C${place.coords[1]}` +
    "&units=m&language=en-US&format=json";
  fetch(url, { referrerPolicy: "no-referrer", credentials: "omit" })
    .then((response) => response.json())
    .then((apiData) => {
      const [svg, data] = parseApiData(apiData, place.name);
      generatePlots(svg, data);
    });
}

function parseApiData(apiData, placeName) {
  // Extract data to plot
  const tsParser = d3.timeParse("%s");
  const data = apiData.validTimeUtc.map((x, index) => {
    return { x: tsParser(x), y: apiData.qpf[index] };
  });
  data.length = 49; // limit to 48h

  // Create the SVG container
  const svg = d3.select("#chart").append("svg").attr("width", 500).attr("height", 300);

  data.title = `Precipitation in ${placeName}`;
  return [data, svg];
}

function generatePlots(data, svg) {
  const VERT_AXIS_THICKNESS = 32;
  const HORIZ_AXIS_THICKNESS = 24;

  // Define the scales
  const xScale = d3
    .scaleTime()
    .domain(d3.extent(data, (d) => d.x))
    .range([VERT_AXIS_THICKNESS, svg.attr("width") - VERT_AXIS_THICKNESS]);
  const yScale = d3
    .scaleLinear()
    .domain(d3.extent(data, (d) => d.y))
    .range([svg.attr("height") - HORIZ_AXIS_THICKNESS, HORIZ_AXIS_THICKNESS]);

  addPlotBar(svg, data, xScale, yScale, 0.8, VERT_AXIS_THICKNESS).attr("fill", "#28e");

  addPlotLine(svg, data, xScale, yScale).attr("stroke", "#f00").attr("stroke-width", "2px");

  addAxes(svg, data.title, xScale, yScale, HORIZ_AXIS_THICKNESS, VERT_AXIS_THICKNESS);
}

function addPlotLine(svg, data, xScale, yScale) {
  const lineGenerator = d3
    .line()
    .x((d) => xScale(d.x))
    .y((d) => yScale(d.y));
  return svg
    .append("path")
    .datum(data)
    .attr("d", lineGenerator)
    .attr("fill", "none")
    .attr("shape-rendering", "crispEdges");
}

function addPlotBar(svg, data, xScale, yScale, barWidthGain, VERT_AXIS_THICKNESS) {
  const barWidth =
    (barWidthGain * (svg.attr("width") - 2 * VERT_AXIS_THICKNESS)) / (data.length - 1);
  return svg
    .selectAll("mybar")
    .data(data)
    .enter()
    .append("rect")
    .attr("x", (d) => xScale(d.x) - barWidth / 2) // left of each bar
    .attr("y", (d) => yScale(Math.max(0, d.y))) // top of each bar
    .attr("width", barWidth)
    .attr("height", (d) => Math.abs(yScale(0) - yScale(d.y))); // bottom of bar
}

function addAxes(svg, title, xScale, yScale, HORIZ_AXIS_THICKNESS, VERT_AXIS_THICKNESS) {
  // Add the bottom x axis
  svg
    .append("g")
    .attr("class", "x-graph-axis")
    .attr("transform", `translate(0, ${svg.attr("height") - HORIZ_AXIS_THICKNESS})`)
    .call(d3.axisBottom(xScale));

  // Add the left y axis
  svg
    .append("g")
    .attr("class", "x-graph-axis")
    .attr("transform", `translate(${VERT_AXIS_THICKNESS}, 0)`)
    .call(d3.axisLeft(yScale));

  if (title) {
    svg
      .append("text")
      .attr("class", "x-graph-title")
      .attr("x", VERT_AXIS_THICKNESS + 30)
      .attr("y", HORIZ_AXIS_THICKNESS)
      .text(title);
  }
}

_main();
