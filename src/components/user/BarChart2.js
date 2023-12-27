import React from 'react';
import { Bar } from 'react-chartjs-2';
import { useRef } from 'react';
const BarChart2 = ({ data }) => {
  console.log('Test bar chart 2 nam nũ:', data);
  const chartInstance = useRef();
  if (chartInstance.current) {
    chartInstance.current.destroy();
  }
  const chartData = {
    labels: data.map((item) => item.ageGroup),
    datasets: [
      {
        label: 'Nữ',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: data.map((item) => item.female),
      },
      {
        label: 'Nam',
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75,192,192,0.4)',
        hoverBorderColor: 'rgba(75,192,192,1)',
        data: data.map((item) => item.male),
      },
    ],
  };
  
  const chartOptions = {
    scales: {
      x: {
        stacked: false,
      },
      y: {
        stacked: false,
      },
    },
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
  };
  

  return <Bar data={chartData} options={chartOptions} />;
};

export default BarChart2;
