import styled from "styled-components"
import {useQuery} from '@tanstack/react-query';
import { BuildingModal } from '../components/BuildingModal';

export const ManageBuildings = () => {

  // @ts-ignore
  const { isLoading, error, data } = useQuery({
    queryKey: ['buildings'],
    queryFn: () =>
      fetch('http://10.2.0.34:8080/get_buildings/1/').then(
        (res) => res.json(),
      ),
  })

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) return 'An error has occurred: ' + (error as any).message;

  return (
    <div>
      <Heading>ООО "ПАЧКИ"</Heading>
      <SubHeading>Обьекты в пользовании</SubHeading>
      <Row>
        {(data as any).map((b) => {
          return <BuildingModal
            address={b.address}
            id={b.id}
            name={b.name_build}
            imageSrc={b.photo_build ? `http://10.2.0.34:8080/${b.photo_build}` : "/building.avif"}
          />
        })}
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
  
  > * {
    transition: transform 0.2s ease;
  }
  > *:hover {
    transform: scale(1.015);
  }
`
