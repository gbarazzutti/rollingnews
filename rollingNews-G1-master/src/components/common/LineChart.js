import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
  
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  
const LineChart = () => {
    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Vistas Mensuales',
          },
        },
      };

       const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']; 

        const data = {
        labels,
        color: "blue",
        ticksColor: "blue",
        datasets: [
            {
              label: "2021",
              data: [30, 50, 40, 61, 45, 35, 45, 75, 55, 77, 95, 85],
              min: 30,
              max: 95,
              fill: true,
              backgroundColor: ["rgba(54, 162, 235, 0.8)"],
              tension: 0.2,
            },
            {
              label: "2020",
              data: [5, 45, 50, 40, 55, 40, 60, 65, 75, 70, 85, 90],
              min: 30,
              max: 95,
              fill: true,
              backgroundColor: ["rgba(154, 112, 135, 0.8)"],
              tension: 0.3,
            },
          ],
      };  
      
    return (
        <>
            <Line options={options}  data={data}  />;
        </>
    );
};

export default LineChart;