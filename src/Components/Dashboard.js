import React from 'react';
import Sidenamv from './Sidenamv';

function Dashboard() {
  return (
    <Sidenamv>
        <nav className="navbar navbar-expand-lg bg-body-tertiary" id='Navbar'>
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Dashboard</a>          
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
        <div className='row d-flex justify-content-center'>
            <div className='col-xl-3 col-md-6 mb-4'>
                <div className='card border-left-primary shadow h-100 py-2'>
                    <div className='card-body'>
                        <div className='row no-gutters align-items-center'>
                            <div className='col mr-2'>
                                <div className='text-xs font-weight-bold text-primary text-uppercase mb-1'>
                                    Earnings (Monthly)
                                </div>
                                <div className='h5 mb-0 font-weight-bold text-gray-800'>
                                    $40,000
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-xl-3 col-md-6 mb-4'>
                <div className='card border-left-primary shadow h-100 py-2'>
                    <div className='card-body'>
                        <div className='row no-gutters align-items-center'>
                            <div className='col mr-2'>
                                <div className='text-xs font-weight-bold text-primary text-uppercase mb-1'>
                                    Earnings (Monthly)
                                </div>
                                <div className='h5 mb-0 font-weight-bold text-gray-800'>
                                    $40,000
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-xl-3 col-md-6 mb-4'>
                <div className='card border-left-primary shadow h-100 py-2'>
                    <div className='card-body'>
                        <div className='row no-gutters align-items-center'>
                            <div className='col mr-2'>
                                <div className='text-xs font-weight-bold text-primary text-uppercase mb-1'>
                                    Earnings (Monthly)
                                </div>
                                <div className='h5 mb-0 font-weight-bold text-gray-800'>
                                    $40,000
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </Sidenamv>
  )
}

export default Dashboard