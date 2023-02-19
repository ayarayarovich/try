import styled from "styled-components"

import { Wrapper } from 'components/utils';

export const EmployeesPh = ({className = ""}) => {
  return (
    <Wrapper className={className}>
      <Heading>
        Дебеторские задолжености
      </Heading>

      <List>
        <ListItem>
          <Name>ООО "Ла-Почки"</Name>
          <Hours>1000000 ₽</Hours>
        </ListItem>
        <ListItem>
          <Name>ИП "ОДРОМ"</Name>
          <Hours>9509931 ₽</Hours>
        </ListItem>
        <ListItem>
          <Name>ООО "СТРОЙИНВЕСТ"</Name>
          <Hours>84285181 ₽</Hours>
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
