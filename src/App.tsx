import { useState } from 'react';
import styled, { keyframes } from 'styled-components';

import {Topbar} from 'components/Topbar';
import {Dashboard} from 'pages/Dashboard';
import { Outlet, useLocation } from 'react-router-dom';

import { motion } from "framer-motion"

const pageVariants = {
  initial: {
    opacity: 0
  },
  in: {
    opacity: 1
  },
  out: {
    opacity: 0
  }
};

const pageTransition = {
  type: 'tween',
  ease: 'linear',
  duration: 0.5
};

function App() {
  const location = useLocation();

  return (
    <Wrapper>
      <TopbarWithMarginBottom className={""}/>
      {/*<TransitionGroup>*/}
      {/*  <CSSTransition key={location.key} classNames={"fade"} timeout={300}>*/}
      <motion.div
        key={location.key}
        initial="initial"
        animate="in"
        variants={pageVariants}
        transition={pageTransition}
      >
        <Outlet/>
      </motion.div>
      {/*  </CSSTransition>*/}
      {/*</TransitionGroup>*/}
    </Wrapper>
  );
}

// const logoSpinAnime = keyframes`
// 	from { transform: rotate(0deg); }
// 	to { transform: rotate(360deg); }
// `;


const Wrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
`;

const TopbarWithMarginBottom = styled(Topbar)`
  margin-bottom: 4rem;
`

//
// const Logo = styled.img`
//   height: 6em;
//   padding: 1.5em;
//   will-change: filter;
//
//   &:hover {
//     filter: drop-shadow(0 0 2em #646cffaa);
//   }
// `;
//
// const ReactLogo = styled(Logo)`
//   &:hover {
//     filter: drop-shadow(0 0 2em #61dafbaa);
//   }
// `;
//
// const LogoLink = styled.a`
//   @media (prefers-reduced-motion: no-preference) {
//     &:nth-of-type(2) ${Logo} {
//       animation: ${logoSpinAnime} infinite 20s linear;
//     }
//   }
// `;
//
// const Card = styled.div`
//   padding: 2em;
// `;
//
// const ReadTheDocs = styled.p`
//   color: #888;
// `;

export default App;
