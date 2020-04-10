import React from 'react';
import { Provider as StoreProvider } from 'mobx-react';

// Stores
import AppStore from './store/appStore';

const stores = {
  AppStore
}

function App() {
  return (
    <StoreProvider {...stores} >
      Hos Tokolos
    </StoreProvider>
  );
}

export default App;
