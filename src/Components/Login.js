import React from 'react'
import Sidenamv from './Sidenamv'

function Login() {
  return (
    <Sidenamv>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" id='Navbar'>
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Log-In Page</a>          
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                </a>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><hr className="dropdown-divider"></hr></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
                </li>
                <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
                </li>
            </ul>
            <form className="d-flex" role="search">
                <input className="form-control my-2" type="search" placeholder="Search" aria-label="Search"></input>
            </form>
            </div>
        </div>
        </nav>
        <div className='d-flex h-50 justify-content-center align-items-center'>
          <div className='border border-primary w-50 rounded-4 p-3'>
            <div className='text-center'>
              <h3>Log-In</h3>
            </div>
            <div class="input-group  mb-3">
              <span className="input-group-text" id="basic-addon1">@</span>
              <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"></input>
            </div>
            <div class="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">@</span>
              <input type="text" class="form-control" placeholder="Password" aria-label="Username" aria-describedby="basic-addon1"></input>
            </div>
            <div className='text-center'>
              <button className='btn btn-secondary'>Log In</button>
            </div>
          </div>
        </div>
    </Sidenamv>
  )
}

export default Login