import styled from "styled-components"

import { Building } from 'components/Building';
import {ComObject} from 'components/ComObject';

import ModalUnstyled from '@mui/base/ModalUnstyled';

import React, { useState } from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';

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

export const BuildingModal = ({className = "", name, address, imageSrc, id}) => {
  const [open, setOpen] = useState(false)
  const [currentImageUrl, setCurrentImageUrl] = useState(imageSrc);

  const { isLoading, error, data } = useQuery({
    queryKey: [`building__${id}`],
    queryFn: () =>
      fetch(`http://10.2.0.34:8080/get_com_objects/${id}/`).then(
        (res) => res.json(),
      ),
  })

  const handleOpen = () => {
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false);
  }

  return (
    <>
      <Building name={name} address={address} imageSrc={imageSrc} onClick={handleOpen} />
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
            <LeftSidebar src={currentImageUrl}/>
            <RightSidebar>
              <Heading>{name}</Heading>
              <Scrollable>
                {isLoading ? <p>Loading...</p>
                :
                  data.map(comObject => <ComObject imgSrc={`http://10.2.0.34:8080/${comObject.photo_com_obj}`}
                                                   area={comObject.square}
                                                   rentPrice={comObject.rent_price}
                                                   description={comObject.description}
                                                   leaserId={comObject.leaser_id}
                                                   onClick={setCurrentImageUrl}/>
                  )
                }
              </Scrollable>


            </RightSidebar>
          </Surface>
          </motion.div>
        </Modal>
    </>
  )
}


const Surface = styled.div`
  box-sizing: border-box;
  width: 90dvw;
  height: 90dvh;
  background-color: #ffffff;
  box-shadow: 0 0 1.5rem 0 rgba(0, 0, 0, 0.5);
  border-radius: 1rem;
  display: flex;
  overflow: hidden;
`

const LeftSidebar = styled.img`
  width: 50%;
  background-color: green;
  object-fit: cover;
  object-position: center;
`

const RightSidebar = styled.div`
  padding: 2rem;
  flex-grow: 1;
  > * + * {
    margin-top: 1rem;
  }
  
`

const Heading = styled.h2`
  margin: 0;
`

const Scrollable = styled.div`
  height: 80%;
  overflow-y: scroll;
  padding-block: 2rem;
  
  * {
    transition: background-color 0.25s ease;
  }
  *:hover {
    background-color: #eaeaea;
    cursor: pointer;
  }

  > * + * {
    margin-top: 1rem;
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;
