
  import React from 'react'
  import communityImg from '../../assets/img/community.png';


  const Projects = () => {
  return (
      <div>
  <ul className="nav nav-tabs text-right d-md-flex justify-content-md-end">
    <li className="nav-item"><a className="nav-link active" href="#">français</a></li>
    <li className="nav-item"><a className="nav-link" href="#">español</a></li>
    <li className="nav-item"><a className="nav-link" href="#">عربي</a></li>
  </ul><nav className="navbar navbar-light navbar-expand-md navigation-clean-search">
    <div className="container"><a className="navbar-brand" href="Home.html">Home</a><button data-toggle="collapse" data-target="#navcol-1" className="navbar-toggler"><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon" /></button>
      <div className="collapse navbar-collapse" id="navcol-1">
        <ul className="navbar-nav">
          <li className="nav-item"><a className="nav-link" href="Events.html">Events</a></li>
          <li className="nav-item"><a className="nav-link" href="News.html">News</a></li>
          <li className="nav-item"><a className="nav-link" href="Voting.html">Voting</a></li>
          <li className="nav-item"><a className="nav-link" href="Projects.html">Projects</a></li>
        </ul>
        <form className="form-inline mr-auto" target="_self">
          <div className="form-group"><label htmlFor="search-field"><i className="fa fa-search" /></label><input type="search" className="form-control search-field" id="search-field" name="search" /></div>
        </form>
        <ul className="navbar-nav">
          <li className="nav-item"><a className="nav-link" href="#" /></li>
          <li className="nav-item"><a className="nav-link" href="#" /></li>
        </ul><a className="btn btn-light action-button" role="button" id="myButton" href="#">Login&nbsp;</a>
      </div>
    </div>
  </nav>
  <img src="assets/img/community.png" />
  <h4 />
  <h4 className="text-center" id="quote" style={{textAlign: 'center', color: 'rgb(92,94,96)'}} />
  <div />
  <ul className="nav nav-tabs">
    <li className="nav-item" />
  </ul>
  <div className="card" />
  <section className="projects-horizontal">
    <div className="container">
      <div className="intro">
        <h2 className="text-center">Projects </h2>
        <p className="text-center">Nunc luctus in metus eget fringilla. Aliquam sed justo ligula. Vestibulum nibh erat, pellentesque ut laoreet vitae. </p>
      </div>
      <div className="row projects">
        <div className="col-sm-6 item">
          <div className="row">
            <div className="col-md-12 col-lg-5"><a href="#"><img className="img-fluid" src="assets/img/desk.jpg" /></a></div>
            <div className="col">
              <h3 className="name">Housing</h3>
              <h3 className="name">Location: Dorchester, MA</h3>
              <h3 className="name">Budget: $100,000</h3>
              <p className="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida.</p><button className="btn btn-primary" type="button">EDIT</button><button className="btn btn-primary" type="button">DELETE</button>
            </div>
          </div>
        </div>
        <div className="col-sm-6 item">
          <div className="row">
            <div className="col-md-12 col-lg-5"><a href="#"><img className="img-fluid" src="assets/img/building.jpg" /></a></div>
            <div className="col">
              <h3 className="name">Side walks</h3>
              <h3 className="name">Location: Revere,MA</h3>
              <h3 className="name">Budget: $230,000</h3>
              <p className="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida.</p><button className="btn btn-primary" type="button">EDIT</button><button className="btn btn-primary" type="button">DELETE</button>
            </div>
          </div>
        </div>
        <div className="col-sm-6 item">
          <div className="row">
            <div className="col-md-12 col-lg-5"><a href="#"><img className="img-fluid" src="assets/img/loft.jpg" /></a></div>
            <div className="col">
              <h3 className="name">Street maintenance</h3>
              <h3 className="name">Location: Chelsea, MA</h3>
              <h3 className="name">Budget: $140,000</h3>
              <p className="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida.</p><button className="btn btn-primary" type="button">EDIT</button><button className="btn btn-primary" type="button">DELETE</button>
            </div>
          </div>
        </div>
        <div className="col-sm-6 item">
          <div className="row">
            <div className="col-md-12 col-lg-5"><a href="#"><img className="img-fluid" src="assets/img/minibus.jpeg" /></a></div>
            <div className="col">
              <h3 className="name">Public restrooms</h3>
              <h3 className="name">Location:&nbsp; Boston, MA</h3>
              <h3 className="name">Budget: $150,000</h3>
              <p className="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida.</p><button className="btn btn-primary" type="button">EDIT</button><button className="btn btn-primary" type="button">DELETE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <p style={{textAlign: 'center', fontSize: 25}}><strong>Timeline</strong></p>
  <div />
  <div className="container">
    <div className="row"><div className="col-md-3">
        <div className="primary-color primary-background-color step-base">
          <strong className="step-title">Step 1</strong>
          <p className="step-short-desc">Brainstorm new ideas</p>
          <div className="secondary-color secondary-background-color caption-content">
            <p>Details about first step. Min-height of 7.5em, padding .5em 1rem. Max-height: 15em.</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="primary-color primary-background-color step-base">
            <strong className="step-title">Step 2</strong>
            <p className="step-short-desc">Brainstorm new ideas</p>
            <div className="secondary-color secondary-background-color caption-content">
              <p>Details about first step. Min-height of 7.5em, padding .5em 1rem. Max-height: 15em.</p>
            </div>
          </div>
          <div className="col-md-3" />
          <div className="col-md-3" />
        </div>
      </div><div className="container steps-container">
        <div className="col-6 col-sm-4 col-md-2 process-step">
          <div className="primary-color primary-background-color step-base"><strong className="step-title">Step 1</strong>
            <p className="step-short-desc">Brainstorm new ideas</p>
          </div>
          <div className="step-caption">
            <div className="secondary-color secondary-background-color caption-content">
              <p>Details about first step. Min-height of 7.5em, padding .5em 1rem. Max-height: 15em.</p>
            </div>
          </div>
        </div>
        <div className="col-6 col-sm-4 col-md-2 process-step">
          <div className="primary-color primary-background-color step-base"><strong className="step-title">Step 2</strong>
            <p className="step-short-desc">Turn ideas into projects</p>
          </div>
          <div className="step-caption">
            <div className="secondary-color secondary-background-color caption-content">
              <p className="secondary-color secondary-background-color caption-content">Details about first step. Min-height of 7.5em, padding .5em 1rem. Max-height: 15em. Details about first step. Min-height of 7.5em, padding .5em 1rem. Max-height: 15em.</p>
            </div>
          </div>
        </div>
        <div className="col-6 col-sm-4 col-md-2 process-step">
          <div className="primary-color primary-background-color step-base"><strong className="step-title">Step 3</strong>
            <p className="step-short-desc">Vote&nbsp;</p>
          </div>
          <div className="step-caption">
            <div className="secondary-color secondary-background-color caption-content">
              <p>Some text above image.</p><img src="https://unsplash.it/1800/900?image=1051" />
            </div>
          </div>
        </div>
        <div className="col-6 col-sm-4 col-md-2 process-step">
          <div className="primary-color primary-background-color step-base"><strong className="step-title">Step 4</strong>
            <p className="step-short-desc">Implement projects</p>
          </div>
          <div className="step-caption">
            <div className="secondary-color secondary-background-color caption-content">
              <p>Details about first step. Min-height of 7.5em, padding .5em 1rem. Max-height: 15em.</p>
            </div>
          </div>
        </div>
      </div>
      <div />
      <hr />
      <div className="d-block" style={{height: 30}} />
      <div />
      <div>
        <div />
        <div>
          <div style={{backgroundColor: 'rgba(58,47,47,0)', backgroundImage: 'url("assets/img/footer.png")', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: 366}}>
            <div className="container">
              <h1 className="text-center" style={{fontFamily: 'ABeeZee, sans-serif', fontSize: 46, color: 'rgb(0,0,0)'}} />
              <ul className="list-inline" id="text_decoration" style={{marginTop: 30, fontFamily: 'ABeeZee, sans-serif'}}>
                <li className="list-inline-item"><a className="decoration" style={{color: 'rgb(0,0,0)', fontSize: 20, marginRight: 10}} href="#">Home</a></li>
                <li className="list-inline-item"><a style={{fontSize: 20, color: 'rgb(0,0,0)', marginRight: 10}} href="#">Chat</a></li>
                <li className="list-inline-item"><a style={{fontSize: 20, color: 'rgb(0,0,0)', marginRight: 10}} href="#">About</a></li>
                <li className="list-inline-item"><a style={{color: 'rgb(0,0,0)', fontSize: 20, marginRight: 10}} href="#">Donation</a></li>
                <li className="list-inline-item"><a style={{color: 'rgb(0,0,0)', fontSize: 20}} href="#">News</a></li>
              </ul>
              <p className="text-center" style={{marginTop: 30, marginBottom: 15}}><a style={{fontSize: 35, marginRight: 30}} href="#"><i className="fa fa-facebook-square" style={{color: 'rgb(0,0,0)', marginRight: 0}} /></a><a style={{fontSize: 35, marginRight: 30}} href="#"><i className="fa fa-instagram" style={{color: 'rgb(0,0,0)', marginRight: 0}} /></a><a style={{fontSize: 35, marginRight: 30}} href="#"><i className="fa fa-linkedin-square" style={{color: 'rgb(0,0,0)', marginRight: 2}} /></a><a style={{fontSize: 35, marginRight: 30}} href="#" /><a style={{fontSize: 35}} href="#" /></p>
            </div>
          </div>
        </div>
      </div>
      </div>
</div>
</div>
      )
     }

export default Projects;
    
