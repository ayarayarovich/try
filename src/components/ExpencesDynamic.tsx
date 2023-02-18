import styled from "styled-components"

import {Wrapper} from 'components/utils';
import { useEffect, useRef } from 'react';

export const ExpencesDynamic = ({className = ""}) => {
  const containerRef = useRef(null);

  useEffect(() => {

    // Highchart will be included via CDN
    // @ts-ignore
    new Highcharts.chart(containerRef.current, {
      chart: {
        type: 'areaspline',
        backgroundColor: 'transparent',
      },
      title: {
        style: {display: "none"}
      },
      yAxis: {
        title: {
          style: {display: "none"}
        }
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
        color: "#0080ff",
        marker: {
          enabled: false,
          symbol: 'circle'
        },
        fillColor: {
          linearGradient: {x1: 0, x2: 0, y1: 0, y2: 1},
          stops: [
            [0, 'rgb(0,170,255)'],
            [1, 'rgba(0, 208, 255, 0)']
          ]
        },
        data:
          [
            ...(Array.from(Array(12).keys()).sort((a, b) => 0.5 - Math.random()))
          ]
      }]
    });
  }, []);

  return (
    <Wrapper className={className}>
      <Heading>
        Динамика расходов ЖКХ <Badge>+24.32</Badge>
      </Heading>
      <div style={{height: "150px"}} ref={containerRef}></div>
    </Wrapper>
  )
}

const Heading = styled.p`
  font-size: 1.2em;
`

const Badge = styled.span`
  background-color: #F3FFEE;
  font-size: 0.7em;
  color: #59CB00;
  padding-block: 0.5em;
  padding-inline: 1em;
  border-radius: 0.5rem;
  margin-left: 1rem;
`

