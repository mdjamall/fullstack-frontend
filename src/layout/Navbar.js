import React from 'react'
import {Link} from "react-router-dom";

export default function Navbar() {
  return (
    <div>
        <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
            <div className="container-fluid">
                <a href="/" className="navbar-brand">Full Stack Application</a>
                <button className='navbar-toggler' type='button'
                 data-bs-target='#navbarSupportedContent' data-bs-toggle='collapse' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation' >
                    <span className="navbar-toggler-icon"></span>
                 </button>
                 <Link className="btn btn-outline-light" to="/adduser">Add User</Link>
            </div>
        </nav>
    </div>
  )
}
