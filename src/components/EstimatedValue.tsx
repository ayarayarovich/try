import styled from "styled-components"

import {FlexWrapper} from 'components/utils';
import {CircleProgress} from 'components/CircleProgress';
import { DoubleCircleProgress } from './DoubleCircleProgress';
import { useEffect, useState } from 'react';

export const EstimatedValue = ({className = ""}) => {
  const [expence, setExpence] = useState(1);
  const [incomer, setIncomer] = useState(1);
  useEffect(() => {
    fetch(`http://10.2.0.34:8080/get_board/1/`).then(
      (res) => res.json()
    ).then(data => {
      setExpence(Number(data.expence));
      setIncomer(Number(data.incomer));
      console.log(data.expence);
      console.log(data.incomer);
    })
  }, [])

  const STAT_COLORS = [
    "hsl(137deg 100% 41%)",
    "mediumpurple",
  ]

  return (
    <FlexWrapper className={className}>
      <Chart>
        <CircleChart all={incomer + expence} current1={incomer} current2={expence} strokeColor1={STAT_COLORS[0]} strokeColor2={STAT_COLORS[1]}/>
      </Chart>
      <StatsBlock>
        <Heading>
          Доходы/расходы
        </Heading>

        <StatsList>
          <Stat style={{color: STAT_COLORS[0]}}>
            <Title>
              Доход
            </Title>
            <Value>
              {incomer}₽
            </Value>
          </Stat>
          <Stat style={{color: STAT_COLORS[1]}}>
            <Title>
              Расход
            </Title>
            <Value>
              {expence}₽
            </Value>
          </Stat>
        </StatsList>
      </StatsBlock>
    </FlexWrapper>
  )
}

const Chart = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 1rem;
  `

const StatsBlock = styled.div`
    flex-grow: 1;
  `

const Heading = styled.p`
  font-size: 1.2em;
  `

const Stat = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`

const StatsList = styled.div`
  
`

const Title = styled.span`
  color: hsl(0, 0%, 60%);
  text-decoration: underline;
`

const Value = styled.span`
    
`

const CircleChart = styled(DoubleCircleProgress)`
  height: 12rem;
`
