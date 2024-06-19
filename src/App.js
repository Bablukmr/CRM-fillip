// src/App.js
import React from "react";
import "./App.css";
import Contact from "./page/ContactLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./admin/Login";
import Protected from "./Protected";
import { AuthProvider } from "./AuthContext";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin/*" element={<Protected />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
