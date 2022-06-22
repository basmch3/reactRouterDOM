import React from 'react'

export default function Count({ count, setCount }) {
    console.log(count)
    return (
        <div>
            <h1 className='text-center display-1'>Count</h1>
            <div className="text-center">
                <h2>Count:{count}</h2>
            </div>
        </div>
    )
}
