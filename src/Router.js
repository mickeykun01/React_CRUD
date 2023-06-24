import { BrowserRouter,Routes,Route } from "react-router-dom";
import React from 'react'
import Home from "./Home";
import Create from "./Create";
import Update from "./Update";


const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
         <Route path="/" element={<Home/>}></Route>
         <Route path="/create" element={<Create/>}></Route>
         <Route path="/edit/:id" element={<Update/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Router
