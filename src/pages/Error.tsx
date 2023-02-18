import styled from "styled-components"
import { useRouteError } from 'react-router-dom';

export const Error = () => {
  const error = useRouteError() as any;
  console.error(error);

  return (
    <Wrap>
      <h1>Oops!</h1>

      <p>Сорян, друг, всё пошло по звезде...</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </Wrap>
  )

}

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: auto;
  height: 100dvh;
`

const Description = styled.p`
  
`

