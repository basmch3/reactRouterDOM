import React, { useState } from 'react'
import Buttons from './buttons';
import Count from './count';
export default function Brothers() {
    const [count, setCount] = useState(5)
    console.log(count)
    return (
      <div className='d-flex flex-column align-items-center'>
        <Count
          count={count}
        />
  
        <Buttons 
          count={count}
          setCount={setCount}
        />
      </div>
    );
  }