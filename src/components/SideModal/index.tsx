import React, { useCallback } from 'react';
import { SideModalView } from './side-modal.view';

type Props = {
  show: boolean;
  setShow: (show: boolean) => void;
};

export const SideModal: React.FC<Props> = props => {
  const { show, setShow } = props;

  const onClickCloseModal = useCallback(() => {
    setShow(false)
  }, [setShow])

  return (
    <SideModalView
      show={show}
      onClickCloseModal={onClickCloseModal}
    >
      {props.children}
    </SideModalView>
  );
};
