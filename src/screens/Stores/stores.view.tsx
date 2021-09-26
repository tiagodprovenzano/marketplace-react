import React from 'react';
import { Button } from '../../components/Button';
import { SideModal } from '../../components/SideModal';

type Props = {
  show: boolean;
  onClickCreateStore: () => void
  onClickCloseModal: () => void
}

export const StoresView: React.FC<Props> = (props) => (
  <div>
    <SideModal onClickCloseModal={props.onClickCloseModal} show={props.show}/>
    <Button
      label={'New Store'}
      onClick={props.onClickCreateStore}
    />
  </div>
);
