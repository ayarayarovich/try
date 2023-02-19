import styled from "styled-components"
import { FlexCenterWrapper, FlexColumnWrapper, FlexWrapper, TextAlignCenter } from 'components/utils';
import { CircleProgress } from 'components/CircleProgress';
import { useEffect, useState, useReducer } from 'react';

export const Stats = ({className = ""}) => {

  const [peopleCount, setPeopleCount] = useState(0);
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

  useEffect(() => {
    setInterval(() => {
      fetch('http://10.2.0.34:8080/get_peoples/')
        .then(res => res.json())
        .then(data => setPeopleCount(data.count))
    }, 1000)
  }, [])

  return (
    <FlexColumnWrapper className={className}>
      <Stat><img src="/lightning.png"/>{peopleCount > 0 ? printRandomBetween(10, 16) / 1000 : 0} КВт</Stat>
      <Stat><img src="/water-drop.png"/>{peopleCount > 0 ? printRandomBetween(50, 100) / 100 : 0} м&sup3;</Stat>
      <Stat><img src="/thermometer.png"/>+ 24,{printRandomBetween(1,3)}°</Stat>
      <Stat><img src="/user.png"/>{peopleCount}</Stat>
    </FlexColumnWrapper>
  )
}


const Stat = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2em;
    img {
      height: 2em;
    }
  `

const printRandomBetween = (lowerBound, upperBound) => {
  return Math.floor(lowerBound + (upperBound - lowerBound)*Math.random());
}
