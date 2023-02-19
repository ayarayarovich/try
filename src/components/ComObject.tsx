import styled from "styled-components"

export const ComObject = ({imgSrc, area, rentPrice, description, leaserId, onClick}) => {

  return (
    <Wrapper onClick={() => onClick(imgSrc)}>
      <LeftSide src={imgSrc}>

      </LeftSide>
      <RightSide>
        <Price>{rentPrice} ₽/месяц</Price> <br/>
        <Little>{area} м&sup2;</Little> <br/>
        <Little>{leaserId ? <span color="rgb(141, 252, 172)">В использовании</span> : <span color="#ff1744">Простаивает</span>}</Little>
      </RightSide>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  border: 3px solid #c0c0c0;
  box-sizing: border-box;
  display: flex;
  width: 100%;
  border-radius: 1rem;
  overflow: hidden;
  align-items: center;
  justify-content: space-between;
  text-align: end;
`

const LeftSide = styled.img`
  border-right: 3px solid #c0c0c0;
  width: 10rem;
  object-fit: cover;
  object-position: center;
`

const RightSide = styled.div`
  padding: 1rem;
`

const Price = styled.span`
  font-size: 1em;
`

const Little = styled.span`
  font-size: 0.9em;
`
