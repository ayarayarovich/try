
import styled from "styled-components"
import { useEffect, useRef } from 'react';
import HighChart from 'highcharts/es-modules/Core/Chart/Chart.js';

export const Chart = () => {
  const  containerRef = useRef(null);

  useEffect(() => {
    // Retrieved from https://www.ssb.no/jord-skog-jakt-og-fiskeri/jakt
    HighChart(containerRef.current, {
      chart: {
        type: 'areaspline'
      },
      legend: {
        enabled: false
      },
      tooltip: {
        shared: true,
        headerFormat: '<b>Hunting season starting autumn {point.x}</b><br>'
      },
      credits: {
        enabled: false
      },
      plotOptions: {
        series: {
          pointStart: 1
        },
        areaspline: {
          fillOpacity: 0.5
        }
      },
      series: [{
        name: 'Moose',
        data:
          [
            ...(Array.from(Array(12).keys()).sort((a, b) => 0.5 - Math.random()))
          ]
      }]
    });
  }, []);

  return (
    <div ref={containerRef}></div>
  )
}
