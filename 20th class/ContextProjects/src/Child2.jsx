import React, { useContext } from 'react';
import { DataContext } from './App';
import Newchild1 from './Newchild1';

const Child2 = () => {
  const { data } = useContext(DataContext);

  return (
    <>
      <h1>Happy {data}</h1>
      <Newchild1 />
    </>
  );
};

export default Child2;
