import React, { useMemo } from 'react';
import { SideModalView } from './side-modal.view';

type Props = {
  show: boolean;
  onClickCloseModal: ()=> void
};

export const SideModal: React.FC<Props> = props => {
  const { show, onClickCloseModal } = props;
  return <SideModalView show={show} onClickCloseModal={onClickCloseModal}/>;
};
