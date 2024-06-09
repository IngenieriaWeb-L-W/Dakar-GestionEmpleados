import React, { useState, useEffect } from 'react';
import BalanceChart from './balancechart';

interface BalanceData {
  date: string;
  balance: number;
}

const Dashboard: React.FC = () => {
  const [balanceData, setBalanceData] = useState<BalanceData[]>([]);
  const [showChart, setShowChart] = useState<boolean>(true); // Estado para controlar la visibilidad de la gráfica

  useEffect(() => {
    // Simulación de datos de saldo
    const simulatedData: BalanceData[] = [
      { date: '2023-06-01', balance: 1000 },
      { date: '2023-06-02', balance: 1050 },
      { date: '2023-06-03', balance: 1025 },
      { date: '2023-06-04', balance: 1100 },
      { date: '2023-06-05', balance: 1150 },
      { date: '2023-06-06', balance: 1200 },
      { date: '2023-06-07', balance: 1250 },
    ];
    setBalanceData(simulatedData);
  }, []);

  const toggleChart = () => {
    setShowChart(!showChart);
  };

  return (
    <div>
      <h1>Dashboard de Saldos</h1>
      <button onClick={toggleChart} className='flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600'
            >
        {showChart ? 'Ocultar Gráfica' : 'Mostrar Gráfica'}
      </button>
      {showChart && <BalanceChart data={balanceData} />}
    </div>
  );
};

export default Dashboard;
