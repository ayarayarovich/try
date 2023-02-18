import styled from "styled-components"


export const Building = ({className = ""}) => {
  return (
    <Wrapper className={className}>
      <Image src="/building.avif"/>
      <Description>
        <div style={{width: "max-content"}}>
          <Heading>ЖК “Role Cheif”</Heading>
          <Address>
            Старокубанская 137 <br/>
            Краснодар
          </Address>
        </div>
        <div style={{width: "max-content"}}>
            2400m&sup2;
            <br/>
            7000 <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.0967 11.5833C12.3602 11.5833 14.1952 9.74113 14.1952 7.46871C14.1952 5.19629 12.3602 3.35413 10.0967 3.35413C7.83314 3.35413 5.99817 5.19629 5.99817 7.46871C5.99817 9.74113 7.83314 11.5833 10.0967 11.5833Z" fill="#292D32"/>
          <path d="M10.0967 11.9948C5.99002 11.9948 2.64563 14.7598 2.64563 18.1666C2.64563 18.397 2.82596 18.5781 3.05548 18.5781H17.138C17.3675 18.5781 17.5478 18.397 17.5478 18.1666C17.5478 14.7598 14.2034 11.9948 10.0967 11.9948Z" fill="#292D32"/>
        </svg>

        </div>
      </Description>
    </Wrapper>
  )
}


const Wrapper = styled.div`
  border-radius: 1rem;
  background-color: #fff;
  box-shadow: 0 0 1rem 0 rgba(0,0,0,0.25);
  transform-style: preserve-3d;
  transform: perspective(1000px);
  
  `

const Image = styled.img`
  border-radius: 1rem;
  height: 10rem;
  width: 100%;
  object-fit: cover;
  object-position: center;
  transform: translateZ(4rem) scale(0.87);
`

const Description = styled.div`
  display: flex;
  padding: 1rem;
  gap: 6rem;
  transform: translateZ(4rem) scale(0.87);
`

const Heading = styled.h3`
  margin-top: 0;
`

const Address = styled.div`
  color: grey;
`
