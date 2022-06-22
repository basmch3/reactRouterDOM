import React from 'react'
import { Link } from 'react-router-dom'
import '../header.css'
export default function Header() {
  return (
    <div className='container-fluid bg-danger p-3'>
        <div className="container">
            <nav>
                <Link to="/">Home</Link>
                <Link to="/brothers">Brothers</Link>
            </nav>
        </div>
    </div>
  )
}
