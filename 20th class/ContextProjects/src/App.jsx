import React, { createContext } from 'react';
import Child1 from './Child1';

export const DataContext = createContext();

let data = "New Year";
let newdata = "New child 1 to new child 2";

function App() {
  const contextValue = { data, newdata };

  return (
    <DataContext.Provider value={contextValue}>
      <Child1 />
    </DataContext.Provider>
  );
}

export default App;
