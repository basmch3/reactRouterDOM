import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Brothers from './comps/brothers'
import Header from './comps/header'
import Home from './comps/home'

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route index element={<Home />} />
                <Route path='/brothers' element={<Brothers />} />
            </Routes>
        </BrowserRouter>
    )
}
