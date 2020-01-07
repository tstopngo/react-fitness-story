import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = (props) => {
    return(
        <div className="NavBar">
            <Link to="/" style={{ paddingRight: '40px'}}> Home </Link>
            <Link to="/logs/new" style={{ paddingRight: '40px' }}> New Log</Link>
            <Link to="/logs">See Logs</Link>
        </div>
    )
}

export default NavBar;
