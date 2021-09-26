import React, { useCallback, useState } from 'react';
import { StoresView } from './stores.view';

export const Stores: React.FC = () => {
  const [show, setShow] = useState<boolean>(false);

  const onClickNewStore = useCallback(() => {
    console.log('clicando aqui');
    setShow(true)
  }, [])

  const onClickCloseModal = useCallback(() => {
    setShow(false)
  }, [])

  return <StoresView show={show} onClickCreateStore={onClickNewStore} onClickCloseModal={onClickCloseModal}/>;
};
