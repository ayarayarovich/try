import styled from "styled-components"

import { Wrapper } from 'components/utils';

export const EmployeesPh = ({className = ""}) => {
  return (
    <Wrapper className={className}>
      <Heading>
        Employees P/H
      </Heading>

      <List>
        <ListItem>
          <Name>A. Mitrovic (наладчик оборудования)</Name>
          <Hours>26ч (+7)</Hours>
        </ListItem>
        <ListItem>
          <Name>E. Mendes (уборщица хз)</Name>
          <Hours>11ч</Hours>
        </ListItem>
        <ListItem>
          <Name>P. Alexandrov (электрик)</Name>
          <Hours>3ч</Hours>
        </ListItem>
      </List>
    </Wrapper>
  )
}

const Heading = styled.p`
  font-size: 1.2em;
`

const List = styled.div`
    
  `

const ListItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`

const Name = styled.span`
  color: hsl(0,0%,60%);
  text-decoration: underline;
`

const Hours = styled.span`
  
`
