import { useState } from 'react';
import './App.css'


function MyButton() {
    console.log('component renders')
    // let count = 0;
    let [count, setCount] = useState(0);
    console.log(count)
    function handleClick() {
        // count = count + 1;
        setCount(count + 1)


    }

    return (
        <button onClick={handleClick}>
            Clicked {count} times
        </button>
    )
}

function App() {


    return (
        <div className='app'>

            <MyButton />
        </div>
    )
}

export default App
