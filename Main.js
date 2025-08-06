import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Products from './Products';
import Logout from './Logout';
export default class Main extends Component {
  render() {
    return (
      <Router>
        <div>
          {/* 🌐 Top Navbar with Horizontal Gapping */}
          <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#234972ff' }}>
            <div className="container-fluid">
              {/* Brand Title */}
              <NavLink className="navbar-brand text-white me-4" to="/">Shopping Collection</NavLink>

              {/* Toggle for mobile view */}
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarTabs"
                aria-controls="navbarTabs"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              {/* Horizontal Tabs with Gaps */}
              <div className="collapse navbar-collapse" id="navbarTabs">
  <div className="d-flex flex-row align-items-center gap-4">
    <NavLink className="nav-link text-white" to="/home">Home</NavLink>
    <NavLink className="nav-link text-white" to="/login">Login</NavLink>
    <NavLink className="nav-link text-white" to="/register">Register</NavLink>
    <NavLink className="nav-link text-white" to="/products">Product</NavLink>
    <NavLink className="nav-link text-white" to="/logout">Logout</NavLink>
  </div>
</div>

            </div>
          </nav>

          {/* 📦 Main Routing Content */}
          <div className="container mt-4 mb-5">
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/products" element={<Products />} />
              <Route path="/logout" element={<Logout />} />
            </Routes>
          </div>
        </div>
      </Router>
    );
  }
}