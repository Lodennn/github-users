// Include react
import React from "react";

// Include the chart type
import Chart from "../UI/Chart";

const Bar2D = (props) => {
  return (
    <Chart
      config={{
        type: "bar2d", // The chart type
        width: "100%", // Width of the chart
        height: "400", // Height of the chart
        dataFormat: "json", // Data type
        dataSource: {
          // Chart Configuration
          chart: {
            caption: "Most Forked",
            xAxisName: "Forks",
            yAxisName: "Repos",
            xAxisNameFontSize: "16px",
            xAxisNameFontSize: "16px",
            theme: "fusion",
          },
          // Chart Data
          data: props.chartdata,
        },
      }}
    />
  );
};

export default Bar2D;
