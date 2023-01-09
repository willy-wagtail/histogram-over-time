import React, { FC } from "react";
import { MissingMigrantsEvent } from "../hooks/useMissingMigrantsData";

export type MarksProps = {
  data: MissingMigrantsEvent[];
  xScale: any;
  yScale: any;
  xValue: any;
  yValue: any;
  tooltipFormat: any;
  circleRadius: any;
};

const Marks: FC<MarksProps> = ({
  data,
  xScale,
  yScale,
  xValue,
  yValue,
  tooltipFormat,
  circleRadius,
}) => {
  return (
    <>
      {data.map((d, index) => (
        <circle
          key={index}
          className="mark"
          cx={xScale(xValue(d))}
          cy={yScale(yValue(d))}
          r={circleRadius}
        >
          <title>{tooltipFormat(xValue(d))}</title>
        </circle>
      ))}
    </>
  );
};

export default Marks;
