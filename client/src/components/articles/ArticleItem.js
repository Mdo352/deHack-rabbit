import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const ArticleItem = (props) => {

    const {avatar_url, login} = props.user;

    return (
        <div className='card text-center' >
            <img src={avatar_url} alt="User Avatar" className="round-img" style={{ width: '60px' }}/>
            <h2>{login}</h2>
            <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">More</Link>
        </div>
    )
}

ArticleItem.propTypes = {
    user: PropTypes.object.isRequired
}

export default ArticleItem