import { useMutation } from '@apollo/client';
import React, { useCallback, useState } from 'react';
import { ADD_STORE } from '../../services/add-store.mutation';
import { AddNewStoreView } from './add-new-store.view';



export const AddNewStore: React.FC<{}> = () => {
  const [show, setShow] = useState<boolean>(false);
  const [newStoreName, setNewStoreName] = useState<string>('');
  const [addStore] = useMutation(ADD_STORE);
  const onClickAddStore = useCallback(() => {
    setShow(true);
  }, []);

  const onClickSave = useCallback(() => {
    setShow(false);
    addStore({ variables: { store: { name: newStoreName } } });
    setNewStoreName('');
  }, [newStoreName, setShow, setNewStoreName, addStore]);

  return (
    <AddNewStoreView 
      show={show}
      setShow={setShow}
      setNewStoreName={setNewStoreName}
      onClickAddStore={onClickAddStore}
      onClickSave={onClickSave}
      newStoreName={newStoreName}
    />
  )
};
