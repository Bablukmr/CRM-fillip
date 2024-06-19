import React from 'react'
import { Route, Routes } from 'react-router-dom'
import WebLeades from './WebLeades'

function Containts() {
  return (
    <Routes>
        <Route path='admin/abc' element={<WebLeades/>}/>
    </Routes>
  )
}

export default Containts