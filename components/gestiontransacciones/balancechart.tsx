import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface BalanceData {
  date: string;
  balance: number;
}

interface BalanceChartProps {
  data: BalanceData[];
}

const BalanceChart: React.FC<BalanceChartProps> = ({ data }) => {
  const chartData = {
    labels: data.map(entry => entry.date),
    datasets: [
      {
        label: 'Saldo Diario',
        data: data.map(entry => entry.balance),
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Evolución de los Saldos Diarios',
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default BalanceChart;
