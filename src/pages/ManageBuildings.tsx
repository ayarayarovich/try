import styled from "styled-components"
import { Building } from 'components/Building';
import { useEffect } from 'react';
import {Hover3D} from 'lib/hover3D';

export const ManageBuildings = () => {

  useEffect(() => {
    let my3dHover = new Hover3D('.for-hover-3d')
  })

  return (
    <div>
      <Heading>ООО "УК-1"</Heading>
      <SubHeading>Обьекты в пользовании</SubHeading>

      <Row>
        <Building className='for-hover-3d'/>
        <Building className='for-hover-3d'/>
        <Building className='for-hover-3d'/>
        <Building className='for-hover-3d'/>
        <Building className='for-hover-3d'/>
        <Building className='for-hover-3d'/>
        <Building className='for-hover-3d'/>
      </Row>
    </div>
  )
}


const Heading = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 0;
`

const SubHeading = styled.h3`
  color: hsla(0, 0%, 41%);
`

const Row = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 3rem;
  padding: 1rem;
  overflow-x: auto;
  -ms-overflow-style: none; /* IE 11 */
  scrollbar-width: none; /* Firefox 64 */
  &::-webkit-scrollbar {
    display: none;
  }
`
