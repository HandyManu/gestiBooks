import { useState } from 'react'
import './App.css'

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Bienvenida from "./pages/Bienvenida";
import Home from "./pages/Home";
import NotFound from "./pages/pageNotFound";
import Books from "./pages/books";
//import Users from "./pages/Users";
import { Toaster } from "react-hot-toast";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Router>
        <Routes>
          <Route path="/" element={<Bienvenida />} />
          <Route path="/home" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          className: "bg-gray-800 text-white",
          duration: 3000,
          style: {
            fontSize: "16px",
          },
        }}
      />
      
      
    </>
  )
}

export default App
