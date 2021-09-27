import React from 'react';
import { Button } from '../../../../components/Button';
import { FormField } from '../../../../components/FormField';
import { SideModal } from '../../../../components/SideModal';
import { AddNewStoreWrapper } from './add-new-store.styled';

type ViewProps = {
  onClickAddStore: () => void;
  onClickSave: () => void;
  show: boolean;
  newStoreName: string;
  setShow: (show: boolean) => void;
  setNewStoreName: (name: string) => void;
};

export const AddNewStoreView: React.FC<ViewProps> = props => (
  <AddNewStoreWrapper>
    <Button onClick={props.onClickAddStore} label={'New Store'} />
    <SideModal setShow={props.setShow} show={props.show}>
      <div className={'add-new-store-form'} style={{ flexGrow: 1 }}>
        <FormField
          placeholder={'Nome da loja'}
          text={props.newStoreName}
          onChangeText={props.setNewStoreName}
          type={'text'}
        />
        <Button label={'Salvar'} onClick={props.onClickSave} />
      </div>
    </SideModal>
  </AddNewStoreWrapper>
);
