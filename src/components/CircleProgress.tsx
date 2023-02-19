import styled from "styled-components"


export const CircleProgress = ({ all, current, className = "", strokeWidth = 15, strokeColor = "#8DFCAC" }) => {
  const percentage = Math.max(Math.min(Math.ceil(current/all * 100), 100), 0);
  return (
    <Wrap className={className}>
      <Label>{percentage}%</Label>
      {/*@ts-ignore*/}
      <svg width="140" height="140" viewBox="0 0 140 140">
        <circle cx="70" cy="70" r={60 - strokeWidth / 2} fill="none" stroke="transparent" strokeWidth={strokeWidth} />

        <circle strokeLinecap="round" style={{filter: `drop-shadow(0 0 5px ${strokeColor})`}} className="percent" cx="70" cy="70" r={60 - strokeWidth / 2} fill="none" stroke={strokeColor} strokeDashoffset={100 - percentage} strokeWidth={strokeWidth} strokeDasharray="100" pathLength="100" />

      </svg>
    </Wrap>
  )
}

const Label = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.2em;
`

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  height: 100%;
  width: auto;
  position: relative;

  svg {
    transform: rotate(-90deg);
    height: 100%;
    width: auto;
  }

  &:after {
    position: absolute;
    display: block;
    height: 160px;
    width: 160px;
    left: 50%;
    top: 50%;
    box-shadow: inset 0 0 1em black;
    color: #fff;
    margin-top: -80px;
    margin-left: -80px;
    border-radius: 100%;
    line-height: 160px;
    font-size: 2em;
    text-shadow: 0 0 0.5em black;
  }
`

