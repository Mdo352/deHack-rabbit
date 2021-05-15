import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';


const Navbar = ({ title, icon }) => {
    return (
        <div className='navbar bg-primary'>
            <h1>
                <i className={icon} /> {title}
            </h1>
            <ul>
                <li>
                    <Link to='/projects'>française</Link>
                </li>
                <li>
                    <Link to='/news'>español</Link>
                </li>
                <li>
                    <Link to='/news'>عربى</Link>
                </li>
                <li>
                    <Link to='/news'>中国人</Link>
                </li>
            </ul>
        </div>
    )
};

Navbar.protoTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string
};

Navbar.defaultProps = {
    title: 'WE VOTE',
    icon: 'fas fa-id-card-alt'
};

export default Navbar;




/*
import { useTranslation } from 'react-i18next';



function Navbar(){
  const { t, i18n } = useTranslation();

  function handleClick(lang){
      i18n.changeLanguage(lang);
  }

    return (
        <div>
            <nav style={{ width:'100%', padding:'2rem 0', backgroundColor:'gray'}}>
                <button onClick={()=>handleClick('en')}>
                   English 
                </button>  
                <button onClick={()=>handleClick('en')}>
                   Korean 
                </button> 
                <button onClick={()=>handleClick('en')}>
                   Chinese 
                </button>   
            </nav>
            <header>
                 <img>
                 <p>{t('Thanks.1')}</p>
                 <p>{t('Why.1')}</p>
                 </img>

            </header>
        </div>
    );
}

export default Navbar;
*/