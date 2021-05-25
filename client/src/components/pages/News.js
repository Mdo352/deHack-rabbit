import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import Articles from '../articles/Articles';

//import picture here
import communityImg from '../../assets/img/community.png';
import footerImg from '../../assets/img/footer.png';

const News = ({ searchNews, showClear, clearNews, setAlert, loading, article}) => {
  const [text, setText] = useState('')

  const onChange = event => setText (event.target.value);

  const onSubmit = event => {
    event.preventDefault();
    if (text === '') {
      setAlert('Please enter something', 'light')
    }else {
      // console.log(text)
      searchNews(text);
      setText('');
    }
  };

  return(
    <div>
      <img src ={communityImg} alt='community volunteers in park' />
    <div>
      <form onSubmit={onSubmit} className="form">
          <input type='text' name='text' placeholder='Search...' value={text} onChange={onChange} />
          <input type='submit' value='search' className='btn btn-dark btn-block' />
      </form>
      {showClear && (
          <button className='btn btn-light btn-block' onClick={clearNews}>Clear</button>
      )}
    </div>

    <Articles loading={loading} article={article} />

    <section className="newsletter-subscribe">
      <div className="container">
        <div className="intro">
          <h2 className="text-center">Subscribe for our Newsletter</h2>
          <p className="text-center">Nunc luctus in metus eget fringilla. Aliquam sed justo ligula. Vestibulum nibh erat, pellentesque ut laoreet vitae. </p>
        </div>
        <form className="form-inline" method="post">
          <div className="form-group"><input className="form-control" type="email" name="email" placeholder="Your Email" /></div>
          <div className="form-group"><button className="btn btn-primary" type="submit">Subscribe </button></div>
        </form>
      </div>
    </section>

    <div>
      <div style={{backgroundColor: 'rgba(58,47,47,0)', backgroundImage: `url(${footerImg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: 366}}>
        <div className="container">
          <hr />
          <ul className="list-inline" id="text_decoration" style={{marginTop: 30, fontFamily: 'ABeeZee, sans-serif'}}>
            <li className="list-inline-item"><Link className="decoration" style={{color: 'rgb(0,0,0)', fontSize: 20, marginRight: 10}} to="/homepage">Home</Link></li>
            <li className="list-inline-item"><a style={{fontSize: 20, color: 'rgb(0,0,0)', marginRight: 10}} href="/">Chat</a></li>
            <li className="list-inline-item"><a style={{fontSize: 20, color: 'rgb(0,0,0)', marginRight: 10}} href="/about">About</a></li>
            <li className="list-inline-item"><a style={{color: 'rgb(0,0,0)', fontSize: 20, marginRight: 10}} href="/donate">Donation</a></li>
            <li className="list-inline-item"><a style={{color: 'rgb(0,0,0)', fontSize: 20}} href="/news">News</a></li>
          </ul>
          {/* <p className="text-center" style={{marginTop: 30, marginBottom: 15}}><a style={{fontSize: 35, marginRight: 30}} href="#"><i className="fa fa-facebook-square" style={{color: 'rgb(0,0,0)', marginRight: 0}} /></a><a style={{fontSize: 35, marginRight: 30}} href="#"><i className="fa fa-instagram" style={{color: 'rgb(0,0,0)', marginRight: 0}} /></a><a style={{fontSize: 35, marginRight: 30}} href="#"><i className="fa fa-linkedin-square" style={{color: 'rgb(0,0,0)', marginRight: 2}} /></a><a style={{fontSize: 35, marginRight: 30}} href="#" /><a style={{fontSize: 35}} href="#" /></p> */}
          <p className="text-center" style={{ marginTop: '30px', marginBottom: '15px' }}><a style={{ fontSize: '35px', marginRight: '30px' }} href="/social"><i className="fa fa-facebook-square" style={{ color: 'rgb(0,0,0)', marginRight: '0px' }}></i></a><a style={{ fontSize: '35px', marginRight: '30px' }} href="/insta"><i className="fa fa-instagram" style={{ color: 'rgb(0,0,0)', marginRight: '0px' }}></i></a><a style={{ fontSize: '35px', marginRight: '30px' }} href="/linkedin"><i className="fa fa-linkedin-square" style={{ color: 'rgb(0,0,0)', marginRight: '2px' }}></i></a></p>

          <p className="text-center" style={{color: 'rgb(193,184,184)', fontFamily: 'ABeeZee, sans-serif', marginBottom: 23}}>Company name @ 2017</p>
        </div>
      </div>
    </div>

  </div>
  )

};

News.propTypes = {
  searchNews: PropTypes.func.isRequired,
  clearNews: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired,
};

export default News