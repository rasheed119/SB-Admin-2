import React from 'react'
import Sidenamv from './Sidenamv'

function SignIn() {
  return (
    <Sidenamv>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" id='Navbar'>
        <div className="container-fluid">
            <a className="navbar-brand">Sign-In Page</a>          
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link">Link</a>
                </li>
                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                </a>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item">Action</a></li>
                    <li><a className="dropdown-item">Another action</a></li>
                    <li><hr className="dropdown-divider"></hr></li>
                    <li><a className="dropdown-item">Something else here</a></li>
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
            <div className='text-center m-2'>
              <h3>Create an Account</h3>
            </div>
            <div className="input-group  mb-3">
              <span className="input-group-text" id="basic-addon1">@</span>
              <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"></input>
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">@</span>
              <input type="text" className="form-control" placeholder="E-mail" aria-label="Username" aria-describedby="basic-addon1"></input>
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">@</span>
              <input type="text" className="form-control" placeholder="Password" aria-label="Username" aria-describedby="basic-addon1"></input>
            </div>            
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">@</span>
              <input type="text" className="form-control" placeholder="Re-Enter Password" aria-label="Username" aria-describedby="basic-addon1"></input>
            </div>            
            <div className='text-center'>
              <button className='btn btn-secondary'>Sign In</button>
            </div>
          </div>
        </div>       
    </Sidenamv>
  )
}

export default SignIn