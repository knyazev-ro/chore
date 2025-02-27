import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement, Filler } from 'chart.js';

// Регистрация компонентов Chart.js
ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement, Filler);


export default function TimeCard() {


  const grad = (context, grad1, grad2) => {
    const chart = context.chart;
    const { ctx, chartArea } = chart;
    
    // Проверка, чтобы градиент создавался только после загрузки графика
    if (!chartArea) {
      return null;
    }

    const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
    gradient.addColorStop(0, grad1);
    gradient.addColorStop(1, grad2);

    return gradient;
  }

  const gradIntegral = (context) => grad(context, "#16a436", "rgba(0, 137, 152, 0.4)")
  
  const gradLine = (context) => grad(context, "rgba(61, 255, 60, 1)", "rgba(61, 200, 255, 1)")
  

// <block:setup:1>
const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Dataset 1',
      data: [420, 430, 680, 560, 790, 240, 395, 830, 810, 430, 500, 700],
      borderColor: gradLine,
      tension: 0.4,
      borderWidth: 2,
      fill: true,
      backgroundColor: gradIntegral,
    
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
