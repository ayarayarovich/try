import styled from "styled-components"

export const Wrapper = styled.div`
  padding: 2rem;
  background-color: #f7f7f7;
  border-radius: 1rem;
`

export const FlexWrapper = styled(Wrapper)`
  display: flex;
`

export const FlexCenterWrapper = styled(FlexWrapper)`
  justify-content: center;
  align-items: center;
`

export const FlexColumnWrapper = styled(FlexWrapper)`
  flex-direction: column;
`

export const TextAlignCenter = styled.p`
  text-align: center;
`
