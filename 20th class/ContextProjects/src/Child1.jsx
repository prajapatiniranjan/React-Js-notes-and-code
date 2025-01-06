import React, { useContext } from 'react';
import { DataContext } from './App';

function Child1() {
  const { data, newdata } = useContext(DataContext);  // Access the context values

  return (
    <div>
      <h1>{data}</h1>
      <p>{newdata}</p>
    </div>
  );
}

export default Child1;
