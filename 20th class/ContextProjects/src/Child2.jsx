import React, { useContext } from 'react';
import { DataContext } from './App';

const Child2 = () => {
  const data = useContext(DataContext); 
  return (
    <>
      <h1>Happy {data}</h1>
    </>
  );
};

export default Child2;
