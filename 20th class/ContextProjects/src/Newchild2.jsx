import React, { useContext } from 'react';
import { DataContext } from './App';

const Newchild2 = () => {
  const { newdata } = useContext(DataContext);

  return (
    <>
      <h1>New child: {newdata}</h1>
    </>
  );
};

export default Newchild2;
