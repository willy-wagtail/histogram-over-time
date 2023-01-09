import React, { FC } from "react";

import styles from "./Marks.module.css";

export type MarksProps = {
  binnedData: any[];
  xScale: any;
  yScale: any;
  innerHeight: any;
  tooltipFormat: any;
};

const Marks: FC<MarksProps> = ({
  binnedData,
  xScale,
  yScale,
  tooltipFormat,
  innerHeight,
}) => {
  return (
    <>
      {binnedData.map((d: any, index: any) => (
        <rect
          key={index}
          className={styles.mark}
          x={xScale(d.x0)}
          y={yScale(d.y)}
          width={xScale(d.x1) - xScale(d.x0)}
          height={innerHeight - yScale(d.y)}
        >
          <title>{tooltipFormat(d.y)}</title>
        </rect>
      ))}
    </>
  );
};

export default Marks;
