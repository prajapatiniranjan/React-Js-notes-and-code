import React, { useState } from 'react';

export default function Child5() {
  const [ordata, setOrdata] = useState(null); 
  
  return (
    <div>
      Child5
      {ordata && <p>{ordata}</p>} 
    </div>
  );
}
