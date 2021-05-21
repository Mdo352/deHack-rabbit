import React, { useEffect, Fragment} from 'react';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const Article = ({article, loading, getUser, match}) => {
    useEffect(() =>{
        // getUser(match.params.login);
        //eslint-disable-next-line
    }, [])

    const {
        title,
        author,
        description,
        url,
        urlToImage,
        publishedAt,
        login,

    }  = article;


    if (loading) return <Spinner />

    return (
        <Fragment>
            <Link to='/' className='btn btn-light' >Back</Link>
            Hireable: {' '}
            <div className="card grid-2">
                <div className="all-center">
                    <img src={urlToImage} alt='' className='round-img' style={{width: '150px'}} />
                    <h1>{title}</h1>
                    <h1>{url}</h1>
                    <p> {description} </p>
                </div>
                <div>
                    {url && (
                        <Fragment>
                            <h3>{url}</h3>
                            <p>{url}</p>
                        </Fragment>
                    )}
                    <a href={url} className='btn btn-dark my-1'>
                        View Github Profile
                    </a>
                    <ul>
                        <li>
                            {login && (
                                <Fragment>
                                    <strong>Username: </strong>{login}
                                </Fragment>
                            )}
                        </li>
                        <li>
                            {title && (
                                <Fragment>
                                    <strong>Company: </strong>{title}
                                </Fragment>
                            )}
                        </li>
                        <li>
                            {description && (
                                <Fragment>
                                    <strong>Website: </strong>{description}
                                </Fragment>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
            <div className="card text-center">
                <div className="badge badge-primary">followers: {url} </div>
                <div className="badge badge-success">following: {url} </div>
                <div className="badge badge-light">Public Repos: {url} </div>
                <div className="badge badge-dark">Public Gists: {url} </div>
            </div>
            
        </Fragment>
    );
}

Article.propTypes = {
    loading: PropTypes.bool,
    user: PropTypes.object.isRequired,
    getUser: PropTypes.func.isRequired,
};

export default Article
