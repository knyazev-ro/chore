import { Doughnut as Dough } from "react-chartjs-2"
import { Chart, Tooltip, ArcElement, Legend  } from "chart.js"

Chart.register(
    Tooltip,
    ArcElement,
    Legend,
);

export default function Doughnut({doughData}:{doughData:Array<any>})
{
    const data = {
        labels: [
          'somw',
          'some0',
          'some1',
          'some2'

        ],
        datasets: [{
          label: 'My First Dataset',
          data: [300, 50, 100, 150],
          backgroundColor: [
            'rgb(34, 197, 94)',   // Зеленый
            'rgb(134, 239, 172)', // Светло-зеленый
            'rgb(244, 114, 182)', // Розовый (комплиментарный)
            'rgb(168, 85, 247)'   // Фиолетовый (комплиментарный)
          ],
          
          
          hoverOffset: 4
        }]
      };

    const options = {

      };

    return <>
    <Dough data={data} options={options}/>
    </>
}