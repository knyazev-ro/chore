import React, { useEffect, useRef } from "react";
import CalHeatmap, { type ICalHeatmap } from "cal-heatmap";
import Legend from "cal-heatmap/plugins/Legend";
import Tooltip from "cal-heatmap/plugins/Tooltip";
import CalendarLegend from "cal-heatmap/plugins/CalendarLegend";
import dayjs from "dayjs";
import localeData from "dayjs/plugin/localeData";
import "cal-heatmap/cal-heatmap.css";

dayjs.extend(localeData);

export default function CalendarHeatMap() {
  useEffect(() => {
    // Проверим, был ли уже создан календарь
    const cal = new CalHeatmap();

    // Форматированные данные для визуализации
    const generateLargeData = (startDate, numDays) => {
      const data = [];
      for (let i = 0; i < numDays; i++) {
        const date = new Date(startDate);
        date.setDate(date.getDate() + i);
        const value = Math.floor(Math.random() * 46) + 5; // Random value between 5 and 50
        data.push({ "date": date.toISOString().split('T')[0], "value": value });
      }
      return data;
    };
    
    const largeData = generateLargeData("2025-01-01", 1000);
    
    console.log(largeData.slice(0, 10)); // Displaying the first 10 entries as a sample
    
    // console.log("Formatted data:", largeData);  // Проверяем форматированные данные

    // Передаем данные в CalHeatmap
    cal.paint({
      data: {
        source: largeData,
        type: 'json',  // Используем тип json, так как данные уже в формате JSON
        x: 'date',
        y: 'value',
      },
      date: { start: new Date('2025-01-01') },
      range: 1,
      scale: { color: { type: 'linear', 
        range: ['#1f2254' , "#155DFC"],
        domain: [0, 40] } }, 
        // Поддержка шкалы цвета
      domain: {
        type: 'year',
        label: { text: null },
      },
      subDomain: { type: 'day', radius: 1 },
      itemSelector: '#cal-heatmap',
    }, [
      [
        Tooltip,
        {
          text: (_date: Date, value: number, dayjsDate: dayjs.Dayjs) => {
            return `${value !== undefined ? `${value}°C` : 'No data'} on ${dayjsDate.format('LL')}`;
          },
        },
      ],
      [
        Legend,
        {
          tickSize: 0,
          width: 150,
          itemSelector: '#ex-wind-legend',
          label: 'Max Temperature (°C)',
          attributes: {
            fill: '#666',
          },
          // Ручные подписи для легенды
          tickValues: [0, 10, 20, 30, 50, 100, 555],
          tickText: ['0', '10', '20', '30', '50', '100', '555+'],
        },
      ],
    ]
  );

    // Очистка при размонтировании компонента
    return () => {
      cal.destroy();
    };
  }, []); // Пустой массив зависимостей, значит, выполняется только один раз

  return <div id="cal-heatmap"></div>;
}
