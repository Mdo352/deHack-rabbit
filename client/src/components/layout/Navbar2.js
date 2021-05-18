import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';


const Navbar2 = ({ title, icon }) => {
    return (
        <div className='navbar bg-primary nv2' style={{maxHeight:55}}>
            
            <h1>
                <i className={icon} /> {title}
            </h1>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/vote-register'>Voting</Link>
                </li>
                <li>
                    <Link to='/projects'>Projects</Link>
                </li>
                <li>
                    <Link to='/news'>News</Link>
                </li>
            </ul>
        </div>
    )
};


Navbar2.protoTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string
};

Navbar2.defaultProps = {
    title: 'WE VOTE',
    icon: 'fas fa-id-card-alt'
};

export default Navbar2;