import styled from "styled-components"


export const DoubleCircleProgress = ({ all, current1, current2, className = "", strokeWidth = 15, strokeColor1 = "#8DFCAC", strokeColor2 = "greenyellow"}) => {
  const percentage1 = Math.max(Math.min(Math.ceil(current1/all * 100), 100), 0);
  const percentage2 = Math.max(Math.min(Math.ceil(current2/all * 100), 100), 0);

  // console.log(`percentage1: ${percentage1}`, `percentage2: ${percentage2}`)
  return (
    <Wrap className={className}>
      {/*@ts-ignore*/}
      <svg width="140" height="140" viewBox="0 0 140 140">
        <circle cx="70" cy="70" r={60 - strokeWidth / 2} fill="none" stroke="transparent" strokeWidth={strokeWidth} />

        <circle style={{filter: `drop-shadow(0 0 5px ${strokeColor1})`}} className="percent" cx="70" cy="70" r={60 - strokeWidth / 2} fill="none" stroke={strokeColor1} strokeDashoffset={100 - percentage1} strokeWidth={strokeWidth} strokeDasharray="100" pathLength="100" />
        <circle style={{filter: `drop-shadow(0 0 5px ${strokeColor2})`}} className="percent" cx="70" cy="70" r={60 - strokeWidth / 2} fill="none" stroke={strokeColor2} strokeDashoffset={percentage2 - 100} strokeWidth={strokeWidth} strokeDasharray="100" pathLength="100" />

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
    * {
      transition: all 1s ease;
    }
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

