import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = (props)=>{
    return (
    <>
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" style = {{fontSize : "25px"}} to="/">QusarNews</Link >
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                 <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/business">Business</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/entertainment">Entertainment</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/health">Health</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/science">Science</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/sports">Sports</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/technology">Technology</Link>
                    </li>
                </ul>
                </div>
                <div className="form-check form-switch">
                    {/* <input className="form-check-input" onClick={props.ToggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/> */}
                    <button type='button' className='btn' onClick={props.ToggleMode} htmlFor="flexSwitchCheckDefault">🌓</button>
                </div>
            </div>
        </nav>
      </div>
    </>
    )
}

export default Navbar
