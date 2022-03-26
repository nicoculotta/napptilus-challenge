import React, { createContext, useMemo, useState } from 'react';

export const AppContext = createContext();

function AppProvider({ children }) {
  const [number, setNumber] = useState(0);
  const [itemSelected, setItemSelected] = useState(null);

  const value = useMemo(
    () => ({ number, setNumber, itemSelected, setItemSelected }),
    [number, itemSelected]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export default AppProvider;
