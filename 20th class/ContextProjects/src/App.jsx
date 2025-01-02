import React, { createContext } from 'react';
import Child2 from './Child2';

export const DataContext = createContext();

let data = "New Year"

function App() {
  return (
    <DataContext.Provider value={data}>
      <Child2 />
    </DataContext.Provider>
  );
}

export default App;
