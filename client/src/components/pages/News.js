import React,{ Component} from 'react';
//import picture here
import communityImg from '../../assets/img/vibrant-communities.jpg';
//src = {}

export default class News extends Component{
    render(){
        return(
         <div>
<img src ={communityImg} />
  <h4 />
  <h4 className="text-center" id="quote" style={{textAlign: 'center', color: 'rgb(92,94,96)'}} />
  <div />
  <ul className="nav nav-tabs">
    <li className="nav-item" />
  </ul>
  <div className="news-block">
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <h1 className="newsblock-title">Pages</h1><p className="newsblock-link"><a href="listen-now.html"><i className="la la-headphones" /> Local news</a></p><p className="newsblock-link"><a href="about-us.html"><i className="la la-info-circle" />Global news</a></p><p className="newsblock-link"><a href="schedule.html"><i className="la la-microphone" /> Podcasts / Schedule</a></p><p className="newsblock-link"><a href="contact.php"><i className="la la-envelope" /> Contact us</a></p>
        </div>
        <div className="col-md-9">
          <h1 className="newsblock-title">PBP News:</h1>
          <div className="row">
            <div className="col-3 news-bg"><img src="../../assets/img/announcements.jpg" width="156px" /></div>
            <div className="col-9 news-bg">
              <h1 className="newsblock-title-under"><a href="https://www.participatorybudgeting.org/pbp-news-pb-for-school-districts-federal-funds/">PB for school districts &amp; federal funds</a><br /><br /></h1>
              <p>Welcome to the all new coolradio website! We hope you enjoy your stay, and happy listening everyone. To see our program, please check our page 'Program / Schedule'</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div />
  <div className="news-block">
    <div className="container">
      <div className="row">
        <div className="col-md-3" />
        <div className="col-md-9">
          <h1 className="newsblock-title" />
          <div className="row">
            <div className="col-3 news-bg"><img src="../../assets/img/speaker-pb.jpeg" width="156px" /></div>
            <div className="col-9 news-bg">
              <h1 className="newsblock-title-under"><a href="https://www.participatorybudgeting.org/democracy-rising-expanding-participatory-budgeting-in-the-south/">Democracy Rising: Expanding Participatory Budgeting in the South</a><br /><br /></h1>
              <p>Welcome to the all new coolradio website! We hope you enjoy your stay, and happy listening everyone. To see our program, please check our page 'Program / Schedule'</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="news-block">
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <h1 className="newsblock-title" />
        </div>
        <div className="col-md-9">
          <div className="row">
            <div className="col-3 news-bg"><img src="../../assets/img/better-pb.jpg" width="156px" /></div>
            <div className="col-9 news-bg">
              <h1 className="newsblock-title-under"><a href="https://www.participatorybudgeting.org/4-ways-to-make-pb-bigger-and-better/">4 ways to make PB bigger and better</a><br /><br /></h1>
              <p>Welcome to the all new coolradio website! We hope you enjoy your stay, and happy listening everyone. To see our program, please check our page 'Program / Schedule'</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div />
  </div>
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
    <div style={{backgroundColor: 'rgba(58,47,47,0)', backgroundImage: 'url("../../assets/img/footer.png")', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: 366}}>
      <div className="container">
        <hr />
        <ul className="list-inline" id="text_decoration" style={{marginTop: 30, fontFamily: 'ABeeZee, sans-serif'}}>
          <li className="list-inline-item"><a className="decoration" style={{color: 'rgb(0,0,0)', fontSize: 20, marginRight: 10}} href="#">Home</a></li>
          <li className="list-inline-item"><a style={{fontSize: 20, color: 'rgb(0,0,0)', marginRight: 10}} href="#">Chat</a></li>
          <li className="list-inline-item"><a style={{fontSize: 20, color: 'rgb(0,0,0)', marginRight: 10}} href="#">About</a></li>
          <li className="list-inline-item"><a style={{color: 'rgb(0,0,0)', fontSize: 20, marginRight: 10}} href="#">Donation</a></li>
          <li className="list-inline-item"><a style={{color: 'rgb(0,0,0)', fontSize: 20}} href="#">News</a></li>
        </ul>
        <p className="text-center" style={{marginTop: 30, marginBottom: 15}}><a style={{fontSize: 35, marginRight: 30}} href="#"><i className="fa fa-facebook-square" style={{color: 'rgb(0,0,0)', marginRight: 0}} /></a><a style={{fontSize: 35, marginRight: 30}} href="#"><i className="fa fa-instagram" style={{color: 'rgb(0,0,0)', marginRight: 0}} /></a><a style={{fontSize: 35, marginRight: 30}} href="#"><i className="fa fa-linkedin-square" style={{color: 'rgb(0,0,0)', marginRight: 2}} /></a><a style={{fontSize: 35, marginRight: 30}} href="#" /><a style={{fontSize: 35}} href="#" /></p>
        <p className="text-center" style={{color: 'rgb(193,184,184)', fontFamily: 'ABeeZee, sans-serif', marginBottom: 23}}>Company name @ 2017</p>
      </div>
    </div>
  </div>
</div>


        )
    }
}