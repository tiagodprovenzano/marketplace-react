import { useQuery } from '@apollo/client';
import React, { useCallback, useMemo, useState } from 'react';
import { STORES } from './services/stores.query';
import { StoresView } from './stores.view';

export const Stores: React.FC = () => {
  const {data, loading, error, refetch} = useQuery(STORES)
  const stores = useMemo(() => {
    if(data?.stores){
      return data.stores
    }
    return []
  }, [data])
  console.log(data);
  
  return <StoresView stores={stores} />;
};
