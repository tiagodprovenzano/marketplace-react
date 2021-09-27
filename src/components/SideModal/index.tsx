import React, { useCallback, useEffect, useState } from 'react';
import { SideModalView } from './side-modal.view';

type Props = {
  show: boolean;
  setShow: (show: boolean) => void;
};

export const SideModal: React.FC<Props> = props => {
  const { show, setShow } = props;
  const [leave, setLeave] = useState(false);
  const onClickCloseModal = useCallback(() => {
    setLeave(true)
  }, [setLeave])

  useEffect(() => {
    if(leave){
      setTimeout(() => {
        setShow(false)
        setLeave(false)
      }, 180)
    }
  }, [leave, setShow])

  return (
    <SideModalView
      show={show}
      leave={leave}
      onClickCloseModal={onClickCloseModal}
    >
      {props.children}
    </SideModalView>
  );
};
