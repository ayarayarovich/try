import styled from "styled-components"

import {FlexWrapper} from 'components/utils';
import {CircleProgress} from 'components/CircleProgress';

export const EstimatedValue = ({className = ""}) => {
  return (
    <FlexWrapper className={className}>
      <Chart>
        <CircleChart all={100} current={87} strokeColor="#F4C51D"/>
      </Chart>
      <StatsBlock>
        <Heading>
          Estimated value
        </Heading>

        <StatsList>
          <Stat>
            <Title>
              Выплаты контрагентов
            </Title>
            <Value>
              12,345₽
            </Value>
          </Stat>
          <Stat>
            <Title>
              Доп. услуги
            </Title>
            <Value>
              12,345₽
            </Value>
          </Stat>
          <Stat>
            <Title>
              Еще что-то
            </Title>
            <Value>
              12,345₽
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

const CircleChart = styled(CircleProgress)`
  height: 12rem;
`
