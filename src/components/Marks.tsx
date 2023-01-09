import React, { FC } from "react";
import { MissingMigrantsEvent } from "../hooks/useMissingMigrantsData";

import styles from "./Marks.module.css";

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
          className={styles.mark}
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
