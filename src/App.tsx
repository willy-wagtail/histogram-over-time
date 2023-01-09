import React from "react";
import { timeFormat, scaleTime, extent, scaleLinear } from "d3";

import "./App.css";
import {
  MissingMigrantsEvent,
  useMissingMigrantsData,
} from "./hooks/useMissingMigrantsData";
import Marks from "./components/Marks";
import AxisLeft from "./components/AxisLeft";

const width = 960;
const height = 500;
const margin = {
  top: 20,
  right: 30,
  bottom: 65,
  left: 90,
};
const xAxisLabelOffset = 50;
const yAxisLabelOffset = 45;

function App() {
  const data = useMissingMigrantsData();

  if (!data) {
    return <pre>Loading...</pre>;
  }

  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;

  const xValue = (d: MissingMigrantsEvent) => d.date;
  const xAxisLabel = "Time";
  const xAxisTickFormat = timeFormat("%a");
  const xScale = scaleTime()
    .domain(extent(data, xValue) as any)
    .range([0, innerWidth])
    .nice();

  const yValue: any = (d: MissingMigrantsEvent) => d.totalDeadAndMissing;
  const yAxisLabel = "Total Dead and Missing";
  const yScale = scaleLinear()
    .domain(extent(data, yValue) as any)
    .range([innerHeight, 0]);

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${margin.left},${margin.top})`}>
        <AxisLeft yScale={yScale} innerWidth={innerWidth} tickOffset={5} />

        <Marks
          data={data}
          xScale={xScale}
          xValue={xValue}
          yScale={yScale}
          yValue={yValue}
          tooltipFormat={xAxisTickFormat}
          circleRadius={2}
        />
      </g>
    </svg>
  );
}

export default App;
