import { useQuery } from '@apollo/client';
import React, { useMemo } from 'react';
import { STORES } from './services/stores.query';
import { StoresView } from './stores.view';

export const Stores: React.FC = () => {
  const { data } = useQuery(STORES);
  const stores = useMemo(() => {
    if (data?.stores) {
      return data.stores;
    }
    return [];
  }, [data]);

  return <StoresView stores={stores} />;
};
