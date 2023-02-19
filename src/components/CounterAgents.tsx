import styled from "styled-components"

import ModalUnstyled from '@mui/base/ModalUnstyled';

import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';

const BackdropUnstyled = React.forwardRef<
  HTMLDivElement,
  { open?: boolean; className: string }
>((props, ref) => {
  const { open, className, ...other } = props;
  return (
    <div
      className={clsx({ 'MuiBackdrop-open': open }, className)}
      ref={ref}
      {...other}
    />
  );
});

const Modal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled(BackdropUnstyled)`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  -webkit-tap-highlight-color: transparent;
`;

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
  ease: 'ease',
  duration: 0.25
};

export const CounterAgents = () => {
  const [open, setOpen] = useState(false)
  const [excelLink, setExcelLink] = useState("")
  const [data, setData] = useState([])

  useEffect(() => {
    fetch(`http://10.2.0.34:8080/counter_agents.json`).then(
      (res) => res.json()
    ).then(data => {
      setData(data)
    });
    fetch(`http://10.2.0.34:8080/counter_agents/`).then(
      res => res.json()
    ).then(data => setExcelLink(data.path))
  }, [])

  const columns = [
    {
      Header: "Контрагент",
      accesssor: "agent"
    },
    {
      Header: "ФИО",
      accesssor: "name"
    },
    {
      Header: "Адресс",
      accesssor: "address"
    },
    {
      Header: "Почта",
      accesssor: "email"
    },
    {
      Header: "Телефон",
      accesssor: "phone"
    },
  ]

  const accessors = [
    "agent", "name", "address", "email", "phone"
  ];
  const headers = [
    "Контрагент", "ФИО", "Адресс", "Почта", "Телефон"
  ];


  const handleOpen = () => {
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false);
  }

  return (
    <>
    <Item onClick={handleOpen}>
      <svg width="131" height="131" viewBox="0 0 131 131" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M49.9962 63.4258C49.8325 63.4258 49.7233 63.4258 49.5595 63.4258C49.2866 63.3713 48.9045 63.3713 48.577 63.4258C32.7479 62.9346 20.7941 50.4896 20.7941 35.1517C20.7941 19.5409 33.512 6.82294 49.1229 6.82294C64.7337 6.82294 77.4516 19.5409 77.4516 35.1517C77.397 50.4896 65.3887 62.9346 50.16 63.4258C50.1054 63.4258 50.0508 63.4258 49.9962 63.4258ZM49.1229 15.0104C38.0425 15.0104 28.9816 24.0713 28.9816 35.1517C28.9816 46.0684 37.4966 54.8563 48.3587 55.2383C48.6862 55.1838 49.3958 55.1838 50.1054 55.2383C60.8037 54.7471 69.2095 45.9592 69.2641 35.1517C69.2641 24.0713 60.2033 15.0104 49.1229 15.0104Z" fill="#BA433B"/>
        <path d="M90.2787 64.1354C90.1149 64.1354 89.9512 64.1354 89.7874 64.0808C87.5495 64.2991 85.257 62.7162 85.0387 60.4783C84.8204 58.2404 86.1849 56.2208 88.4229 55.9479C89.0779 55.8933 89.7874 55.8933 90.3879 55.8933C98.357 55.4566 104.58 48.9066 104.58 40.8829C104.58 32.5862 97.8658 25.8725 89.5691 25.8725C87.3312 25.9271 85.4754 24.0712 85.4754 21.8333C85.4754 19.5954 87.3312 17.7396 89.5691 17.7396C102.342 17.7396 112.767 28.165 112.767 40.9375C112.767 53.4916 102.942 63.6441 90.4424 64.1354C90.3879 64.1354 90.3333 64.1354 90.2787 64.1354Z" fill="#BA433B"/>
        <path d="M50.0508 123.085C39.3524 123.085 28.5995 120.356 20.4666 114.898C12.8795 109.876 8.7312 102.999 8.7312 95.5209C8.7312 88.043 12.8795 81.1109 20.4666 76.0346C36.8416 65.1725 63.3691 65.1725 79.6349 76.0346C87.1674 81.0563 91.3704 87.9338 91.3704 95.4117C91.3704 102.89 87.222 109.822 79.6349 114.898C71.4474 120.356 60.7491 123.085 50.0508 123.085ZM24.997 82.9121C19.757 86.4055 16.9187 90.8813 16.9187 95.5755C16.9187 100.215 19.8116 104.691 24.997 108.13C38.5883 117.245 61.5133 117.245 75.1045 108.13C80.3445 104.636 83.1829 100.16 83.1829 95.4663C83.1829 90.8267 80.2899 86.3509 75.1045 82.9121C61.5133 73.8513 38.5883 73.8513 24.997 82.9121Z" fill="#BA433B"/>
        <path d="M100.104 113.26C98.1933 113.26 96.5012 111.95 96.1191 109.985C95.6825 107.747 97.1016 105.619 99.285 105.127C102.724 104.418 105.89 103.053 108.346 101.143C111.457 98.7958 113.149 95.8483 113.149 92.7371C113.149 89.6258 111.457 86.6783 108.4 84.3858C105.999 82.53 102.997 81.22 99.4487 80.4012C97.2654 79.91 95.8462 77.7266 96.3375 75.4887C96.8287 73.3054 99.012 71.8862 101.25 72.3775C105.944 73.4146 110.038 75.2704 113.367 77.8358C118.444 81.6566 121.337 87.0604 121.337 92.7371C121.337 98.4137 118.389 103.817 113.313 107.693C109.929 110.313 105.671 112.223 100.977 113.151C100.65 113.26 100.377 113.26 100.104 113.26Z" fill="#BA433B"/>
      </svg>
      <p>Контрагенты</p>
    </Item>

  <Modal
    open={open}
    onClose={handleClose}
    slots={{backdrop: Backdrop}}
  >
    <motion.div
      initial="initial"
      animate="in"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Surface>
        <Bar>
          <Heading>Контрагенты</Heading>
          <A href={excelLink}>Выгрузить в Excel</A>
        </Bar>

        <Scrollable>
        <table>
          <thead>
          <tr>
            {columns.map((name) => (
              <th>{name.Header}</th>
            ))}
          </tr>
          </thead>
          <tbody>
          {
            data.map(row =>
              <tr>
                {
                  accessors.map(accessor =>
                    <td>
                      {row[accessor]}
                    </td>
                  )
                }
              </tr>
            )
          }
          </tbody>
        </table>
        </Scrollable>
      </Surface>
    </motion.div>
  </Modal>
      </>
  )

}

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  background-color: #e8e8e8;
  transition: transform 0.25s ease;
  color: #000;

  &:hover {
    color: inherit;
    cursor: pointer;
    transform: scale(1.02);
  }

  > svg {
    height: 8rem;
  }
  > p {
    text-transform: uppercase;
  }

  border-radius: 1rem;

  font-size: 1.4em;
  padding: 2rem;

  grid-column: span 1;
  grid-row: span 1;
`

const Surface = styled.div`
  box-sizing: border-box;
  width: 90dvw;
  height: 90dvh;
  background-color: #ffffff;
  box-shadow: 0 0 1.5rem 0 rgba(0, 0, 0, 0.5);
  border-radius: 1rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  
  table {
    width: 100%;
    border-collapse: collapse;
    
  }
  
  
  
  th, td {
    border: 1px solid;
    border-collapse: collapse;
    
  }
  
  th, td {
    padding: 1em;
  }
  
`

const Heading = styled.h2`
  margin-bottom: 2rem;
`

const Scrollable = styled.div`
  height: 80%;
  width: 100%;
  overflow-y: scroll;
  padding-block: 2rem;

  * {
    transition: background-color 0.25s ease;
  }

  > * + * {
    margin-top: 1rem;
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;

const Bar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const A = styled.a`
    
  `
