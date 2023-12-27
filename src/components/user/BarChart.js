import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

function BarChart({ data }) {
  const chartRef = useRef();
  const chartInstance = useRef();

  useEffect(() => {
    console.log('Received data for chart:', data);

    const ctx = chartRef.current.getContext('2d');

    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    chartInstance.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: data.map((item) => item.type),
        datasets: [
          {
            label: 'Số lượng khách hàng',
            data: data.map((item) => item.count),
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Số lượng khách hàng',
            },
          },
          x: {
            title: {
              display: true,
              text: 'Loại khách hàng',
            },
          },
        },
      },
    });
  }, [data]);

  return <canvas ref={chartRef}></canvas>;
}

export default BarChart;
