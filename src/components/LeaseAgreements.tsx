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

export const LeaseAgreements = () => {
  const [open, setOpen] = useState(false)
  const [data, setData] = useState([])

  useEffect(() => {
    fetch(`http://10.2.0.34:8080/rent_documents/1.json`).then(
      (res) => res.json()
    ).then(data => {
      setData(data)
    })
  }, [])

  const accessors = [
    "agent", "phone", "document"
  ];
  const headers = [
    "Контрагент", "Телефон", "Договор"
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
        <svg width="106" height="106" viewBox="0 0 106 106" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M70.6667 100.479H35.3333C19.2125 100.479 9.9375 91.2042 9.9375 75.0833V30.9166C9.9375 14.7958 19.2125 5.52081 35.3333 5.52081H70.6667C86.7875 5.52081 96.0625 14.7958 96.0625 30.9166V75.0833C96.0625 91.2042 86.7875 100.479 70.6667 100.479ZM35.3333 12.1458C22.7017 12.1458 16.5625 18.285 16.5625 30.9166V75.0833C16.5625 87.715 22.7017 93.8542 35.3333 93.8542H70.6667C83.2983 93.8542 89.4375 87.715 89.4375 75.0833V30.9166C89.4375 18.285 83.2983 12.1458 70.6667 12.1458H35.3333Z" fill="#292D32"/>
          <path d="M81.7083 40.8542H72.875C66.1617 40.8542 60.7292 35.4217 60.7292 28.7083V19.875C60.7292 18.0642 62.2308 16.5625 64.0417 16.5625C65.8525 16.5625 67.3542 18.0642 67.3542 19.875V28.7083C67.3542 31.7558 69.8275 34.2292 72.875 34.2292H81.7083C83.5192 34.2292 85.0208 35.7308 85.0208 37.5417C85.0208 39.3525 83.5192 40.8542 81.7083 40.8542Z" fill="#292D32"/>
          <path d="M53 60.7291H35.3333C33.5225 60.7291 32.0208 59.2275 32.0208 57.4166C32.0208 55.6058 33.5225 54.1041 35.3333 54.1041H53C54.8108 54.1041 56.3125 55.6058 56.3125 57.4166C56.3125 59.2275 54.8108 60.7291 53 60.7291Z" fill="#292D32"/>
          <path d="sM70.6667 78.3959H35.3333C33.5225 78.3959 32.0208 76.8942 32.0208 75.0834C32.0208 73.2725 33.5225 71.7709 35.3333 71.7709H70.6667C72.4775 71.7709 73.9792 73.2725 73.9792 75.0834C73.9792 76.8942 72.4775 78.3959 70.6667 78.3959Z" fill="#292D32"/>
        </svg>

        <p>Арендные соглашения</p>
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
        </Bar>

        <Scrollable>
        <table>
          <thead>
          <tr>
            {headers.map((header) => (
              <th>{header}</th>
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
                      {accessor == "document" ? <a href={row[accessor]}>Договор.docx</a> : row[accessor]}
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
