import React from 'react'

export default function Buttons({setCount,count}) {
    const minus = () => {

        setCount(--count)
    }
    const plus = () => {
        setCount(++count)
    }

    return (
        <div>
            <button onClick={minus} className='btn btn-dark'>Minus</button>
            <button onClick={plus} className='btn btn-danger ms-2'>Plus</button>
        </div>
    )
}
