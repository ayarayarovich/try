import styled from "styled-components"

import {Wrapper} from 'components/utils';

export const ExpencesDynamic = ({className = ""}) => {
  return (
    <Wrapper className={className}>
      <Heading>
        Динамика расходов ЖКХ <Badge>+24.32</Badge>
      </Heading>
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

