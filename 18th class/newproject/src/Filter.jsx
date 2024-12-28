import React from "react";

function FilteredNumbers() {
  let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 66, 4, 4, 8];

  let arrayf = array.filter((e) => {
    return e > 6;
  });

  let newarr = arrayf.map((e, index) => {
    return <h1 key={index}>{e}</h1>;
  });

  return (
    <>{newarr}</>
  );
}

export default FilteredNumbers;
