import styled from "styled-components"
import { FlexCenterWrapper, FlexColumnWrapper, FlexWrapper, TextAlignCenter } from 'components/utils';
import { CircleProgress } from 'components/CircleProgress';

export const YandexReviews = ({className = ""}) => {
  return (
    <FlexColumnWrapper className={className}>
      <CircleProgress current={67} all={100}/>
      <TextAlignCenter>Yandex.Review</TextAlignCenter>
    </FlexColumnWrapper>
  )
}
