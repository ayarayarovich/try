import styled from 'styled-components';
import { EstimatedValue } from 'components/EstimatedValue';
import { ExpencesDynamic } from 'components/ExpencesDynamic';
import { EmployeesPh } from 'components/EmployeesPh';
import { YandexReviews } from 'components/YandexReviews';
import { Chart } from 'components/Chart';

export const Dashboard = () => {

  return (
    <MyGrid>
      <EstimatedValuePlaced/>
      <EmployeesPhPlaced/>
      <ExpencesDynamicPlaced/>
      <YandexReviewPlaced/>
    </MyGrid>
  )

}


const MyGrid = styled.div`
  display: grid;
  padding-inline: 5rem;
  grid-template-columns: repeat(6, 1fr);
  grid-auto-flow: row;
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 1rem;
  
  > * {
    transition: transform 0.25s ease;
  }
  > *:hover {
    transform: scale(1.02);
  }
`

const EstimatedValuePlaced = styled(EstimatedValue)`
  grid-column: span 3;
  grid-row: span 1;
`

const ExpencesDynamicPlaced = styled(ExpencesDynamic)`
  grid-column: span 4;
  grid-row: span 1;
`

const EmployeesPhPlaced = styled(EmployeesPh)`
  grid-column: span 3;
  grid-row: span 1;
`

const YandexReviewPlaced = styled(YandexReviews)`
  grid-column: span 2;
  grid-row: span 1;
`

const ChartPlaced = styled(Chart)`
  grid-column: 4;
`
