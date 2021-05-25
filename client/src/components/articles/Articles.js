import React from 'react';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';

const Articles = ({ article, loading }) => {

    if (Object.keys(article).length === 0) {
        return (
            <div className='card text-center' >
            </div>
        )
    }else{

        
        if (loading) {
            return <Spinner />
        } else {
            
            return (                
                <div style={userStyle}>
                {article.map(art => (

                    <div className="news-block">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-2" />
                                <div className="col-md-9">
                                {/* <h1 className="newsblock-title" /> */}
                            <div className="row">
                                <div className="col-9 news-bg">
                                    <img src={art.urlToImage} alt="Article Headline" width="156px" />
                                    <h1 className="newsblock-title-under"> <a href={art.url} > {art.title} </a></h1>                                    
                                    <p>{art.description}</p>
                                    <p>Author: {art.author}</p>
                                    <p>{art.source.name}</p>
                                </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>

                ))}
                </div>
            )
        }
    }
    
}

Articles.prototypes = {
    article: PropTypes.array.isRequired,
    // article: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(1, 1fr)',
    gridGap: '1rem'
}

export default Articles
