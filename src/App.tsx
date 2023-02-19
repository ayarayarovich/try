import styled from 'styled-components';

import { Topbar } from 'components/Topbar';
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
      <motion.div
        key={location.key}
        initial="initial"
        animate="in"
        variants={pageVariants}
        transition={pageTransition}
      >
        <Outlet/>
      </motion.div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
`;

const TopbarWithMarginBottom = styled(Topbar)`
  margin-bottom: 4rem;
`

export default App;
