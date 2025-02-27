import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement, Filler } from 'chart.js';

// Регистрация компонентов Chart.js
ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement, Filler);



export default function Linear({linearData}:{linearData:Array<any>})
{
    
  const grad = (context: { chart: any; }, grad1: string, grad2: string) => {
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
        color: 'rgba(96, 207, 255, 0.4)', // Цвет вертикальной сетки
      },
      ticks: {
        color: '#FFFFFF', // Цвет подписей оси X
      },
    },
    y: {
      grid: {
        color: 'rgba(96, 207, 255, 0.4)', // Цвет горизонтальной сетки
      },
      ticks: {
        color: '#FFFFFF', // Цвет подписей оси Y
      },
    },
  },
};



    return <>
    <Line data={data} options={options}/>
    </>
}