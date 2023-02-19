import styled from "styled-components"
import { Link } from 'react-router-dom';
import { Dashboard } from './Dashboard';

export const Main = () => {
  return (
    <Wrapper>
      <Heading>Мой офис</Heading>
      <MyLink to="/dashboard">Войти</MyLink>
    </Wrapper>
  )
}

const Heading = styled.h1`
  color: #2A81D2;
  font-size: 7rem;
  margin-bottom: 3rem;
  `

const MyLink = styled(Link)`
  padding-block: 1em;
  padding-inline: 5em;
  background-color: #0084ff;
  border-radius: 0.5rem;
  color: #fff;
  transition: all 0.25s ease;
  
  &:hover {
    color: #fff;
    padding-inline: 10em;
    background-color: #2696ff;
  }
`

const Wrapper = styled.div`
  margin-top: 30dvh;
  text-align: center;
  transition: all 0.25s ease;
`
