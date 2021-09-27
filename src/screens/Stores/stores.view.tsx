import React from 'react';
import { IStore } from '../../types/IStore';
import { AddNewStore } from './components/AddNewStore';
import { StoresWrapper } from './stores.styled';

type Props = {
  stores: IStore[]
};

export const StoresView: React.FC<Props> = props => (
  <StoresWrapper>
    <AddNewStore />
    <div>
      {props.stores.map((store) => {
        return <div>{store.name}</div>
      })}
    </div>
  </StoresWrapper>
);
