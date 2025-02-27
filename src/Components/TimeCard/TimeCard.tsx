import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';

// Регистрация компонентов Chart.js
ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement);


export default function TimeCard() {

// <block:setup:1>
const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'], // Метки на оси X
  datasets: [
    {
      label: 'shit and giggles', // Подпись к графику
      data: [65, 59, 80, 81, 56, 55, 40], // Данные для отображения
      borderColor: '#00C950', // Цвет линии
      tension: 0.1, // Скругление линии
      fill: false, // Не заполнять область под графиком
    },
  ],
};


const options = {
  responsive: true,
  maintainAspectRatio: false, 
  scales: {
    x: {
      grid: {
        color: '#D3D3D3', // Цвет вертикальной сетки
      },
      ticks: {
        color: '#FFFFFF', // Цвет подписей оси X
      },
    },
    y: {
      grid: {
        color: '#D3D3D3', // Цвет горизонтальной сетки
      },
      ticks: {
        color: '#FFFFFF', // Цвет подписей оси Y
      },
    },
  },
};


  return (
    <>
      <div className="z-10 flex flex-col w-full h-full bg-slate-800 border-slate-900 p-4">
        <div className="gap-6 w-full h-full flex items-center justify-start px-4">
          <div className='flex flex-col h-full py-2 gap-1'>
          <div className="min-w-20 min-h-20 bg-slate-900 rounded-full border-double border-slate-950 border-2"></div>
          <div className='border h-full bg-slate-900'>

          </div>
          </div>

          <div className="flex flex-col py-4 px-2 h-48 w-full bg-slate-900 rounded-lg border-b-2 border-green-200 border-dashed">
          <Line data={data} options={options} />
          </div>
        </div>
        <div className="flex flex-col h-5/6">
        </div>
      </div>
    </>
  );
}
