import React, { createContext } from 'react';
import Child1 from './Child1';

export const DataContext = createContext();

let data = "New Year";
let newdata = "It's 2025 ";

function App() {
  // Define contextValue to provide both data and newdata
  const contextValue = { data, newdata };

  return (
    <DataContext.Provider value={contextValue}>
      <Child1 />
    </DataContext.Provider>
  );
}

export default App;
