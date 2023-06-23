import React, { useState } from 'react';
import "./App.css"

function Square() {
  const [value, setValue] = useState(null);
  function handleClick() {
    // alert('clicked')
    setValue('X')
  }
  return <button onClick={handleClick} className='square'>{value}</button>
}


function App() {
  return (
    <div className='app'>
      <div className='board-row'>
        <Square value='1' />
        <Square value='2' />
        <Square value='3' />
      </div>
      <div className='board-row'>
        <Square value='4' />
        <Square value='5' />
        <Square value='6' />
      </div>
      <div className='board-row'>
        <Square value='7' />
        <Square value='8' />
        <Square value='9' />
      </div>

    </div>
  )
}

export default App