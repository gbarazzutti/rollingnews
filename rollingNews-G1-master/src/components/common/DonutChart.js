import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = () => {
  const options = {
    responsive: true,
    radius: "50%",
    cutout: "80%",
    plugins: {
      legend: {
        legend: false,
      },
    },
  };

  const data = {
    type: "doughnut",
    datasets: [
      {
        label: "# of Votes",
        data: [86, 14],
        backgroundColor: ["rgb(53, 182, 83, 1)", "rgb(233, 236, 239,0.5)"],
        hoverOffset: 3,
      },
    ],
  };

  return (
    <>
      <Doughnut options={options} data={data}></Doughnut>
    </>
  );
};

export default DonutChart;
