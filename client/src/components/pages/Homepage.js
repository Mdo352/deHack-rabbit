import React,{ Component} from 'react';

export default class Homepage extends Component{
    render(){
        return(
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
          <li className="nav-item"><a className="nav-link" href="Community-Chat.html">Chat</a></li>
        </ul>
        <form className="form-inline mr-auto" target="_self">
          <div className="form-group"><label htmlFor="search-field"><i className="fa fa-search" /></label><input type="search" className="form-control search-field" id="search-field" name="search" /></div>
        </form>
        <ul className="navbar-nav">
          <li className="nav-item"><a className="nav-link active" href="#">Donate</a></li>
          <li className="nav-item"><a className="nav-link" href="#" /></li>
          <li className="nav-item"><a className="nav-link" href="#" /></li>
        </ul><a className="btn btn-light action-button" role="button" href="#">Login&nbsp;</a>
      </div>
    </div>
  </nav><img src="../../assets/img/vibrant-communities.jpg" />
  <h4 />
  <p />
  <h4 className="text-center" id="quote" style={{textAlign: 'center', color: 'rgb(92,94,96)'}}>&nbsp;"There is no power for change greater than a community discovering what it cares about."</h4>
  <p />
  <div />
  <ul className="nav nav-tabs">
    <li className="nav-item" />
  </ul>
  <div className="container">
    <p className="text-sm-left text-md-left d-md-flex flex-nowrap justify-content-md-center align-items-md-center" />
  </div>
  <div />
  <div className="carousel slide" data-ride="carousel" id="carousel-1">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <div className="jumbotron hero-nature carousel-hero">
          <h1 className="hero-title">Participatory Budgeting</h1>
          <p id="pb-paragraph" className="hero-subtitle" style={{textAlign: 'center'}}><br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor nunc odio, at volutpat diam fermentum id. Curabitur scelerisque aliquet fermentum. Mauris convallis efficitur rutrum. Nunc congue erat sed tempor varius. Praesent nunc ipsum, efficitur at pretium sit amet, mollis a quam. Integer vel elit sit amet augue volutpat placerat.<br /><br /></p>
          <p><a className="btn btn-primary btn-lg hero-button" role="button" id="learnBtn" href="#">Learn more</a></p>
        </div>
      </div>
      <div className="carousel-item">
        <div className="jumbotron hero-photography carousel-hero">
          <h1 className="hero-title">Hero Photography</h1>
          <p className="hero-subtitle">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
          <p><a className="btn btn-primary btn-lg hero-button" role="button" href="#">Learn more</a></p>
        </div>
      </div>
      <div className="carousel-item">
        <div className="jumbotron hero-technology carousel-hero">
          <h1 className="hero-title">Hero Technology</h1>
          <p className="hero-subtitle">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
          <p><a className="btn btn-primary btn-lg hero-button" role="button" href="#">Learn more</a></p>
        </div>
      </div>
    </div>
    <div><a className="carousel-control-prev" href="#carousel-1" role="button" data-slide="prev"><i className="fa fa-chevron-left" /><span className="sr-only">Previous</span></a><a className="carousel-control-next" href="#carousel-1" role="button" data-slide="next"><i className="fa fa-chevron-right" /><span className="sr-only">Next</span></a></div>
    <ol className="carousel-indicators">
      <li data-target="#carousel-1" data-slide-to={0} className="active" />
      <li data-target="#carousel-1" data-slide-to={1} />
      <li data-target="#carousel-1" data-slide-to={2} />
    </ol>
  </div>
  <div />
  <div />
  <div>
    <div className="row" id="project-row">
      <div className="col-lg-6 mb-4">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="text-primary font-weight-bold m-0">Projects</h6>
          </div>
          <div className="card-body">
            <h4 className="small font-weight-bold">AC in high schools<span className="float-right">40%</span></h4>
            <div className="progress mb-4">
              <div className="progress-bar bg-warning" aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} style={{width: '40%'}}><span className="sr-only">40%</span></div>
            </div>
            <h4 className="small font-weight-bold">Bike lanes<span className="float-right">60%</span></h4>
            <div className="progress mb-4">
              <div className="progress-bar bg-primary" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{width: '60%'}}><span className="sr-only">60%</span></div>
            </div>
            <h4 className="small font-weight-bold">Bus routes<span className="float-right">80%</span></h4>
            <div className="progress mb-4">
              <div className="progress-bar bg-info" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{width: '80%'}}><span className="sr-only">80%</span></div>
            </div>
            <h4 className="small font-weight-bold">Housing for the homeless<span className="float-right">Complete!</span></h4>
            <div className="progress mb-4">
              <div className="progress-bar bg-success" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} style={{width: '100%'}}><span className="sr-only">100%</span></div>
            </div>
          </div>
        </div>
        <div className="card shadow mb-4">
          <ul className="list-group list-group-flush" />
        </div>
        <div />
      </div>
      <div className="col">
        <div className="row">
          <div className="col-lg-6 mb-4">
            <div className="card text-white bg-primary shadow">
              <div className="card-body">
                <p className="m-0">Bike lanes</p>
                <p className="text-center text-white-50 d-xl-flex justify-content-center align-content-center flex-nowrap card-text small m-0"><br />Our goal is to create more bike routes that can provide safe and comfortable places for biking. As a result improve our physical and psychological health, and strengthen our communities.&nbsp;<br /><br /></p>
                <p className="text-white-50 small m-0">In progress</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mb-4">
            <div className="card text-white bg-success shadow">
              <div className="card-body">
                <p className="m-0"><strong>Housing for the homeless</strong><br /></p>
                <p className="text-white-50 small m-0">Reduce homelessness by providing&nbsp; people who struggle on our streets and in shelters with safe, dignified housing and connecting them to the supports they need to rebuild their lives.<br /><br /></p>
                <p className="text-white-50 small m-0">done</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mb-4">
            <div className="card text-white bg-info shadow">
              <div className="card-body">
                <p className="m-0"><strong>Bus routes</strong><br /></p>
                <p className="text-white-50 small m-0">Due to the shortages of bus routes, our citizens are encountering problems getting around. This<br />is a major step in our efforts to improve the bus service system.<br /></p>
                <p className="text-white-50 small m-0">In progress</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mb-4">
            <div className="card text-white bg-warning shadow">
              <div className="card-body">
                <p className="m-0"><strong>AC in high schools</strong><br /></p>
                <p className="text-white-50 small m-0">We are updating the heating, ventilation and air conditioning systems&nbsp; of various schools that need replacement in order to create healthy environments for students.</p>
                <p className="text-white-50 small m-0">In progress</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mb-4">
            <div className="card text-white bg-danger shadow" />
          </div>
          <div className="col-lg-6 mb-4">
            <div className="card text-white bg-secondary shadow" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="d-md-flex justify-content-md-center"><div className="newsletter8 py-5">
      <div className="container">
        <div className="row">
          {/* column  */}
          <div className="col-lg-5">
            <h6 className="text-themecolor font-weight-normal text-uppercase">newsletter</h6>
            <h4 className="my-3">Stay informed about new and upcoming causes</h4>
            <h6 className="subtitle mt-3 font-weight-normal">It has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h6>
            <form className="mt-4">
              <div className="form-group">
                <input className="form-control" type="text" placeholder="Your Name" />
              </div>
              <div className="form-group">
                <input className="form-control" type="email" placeholder="Email Address" />
              </div>
              <div className="form-group">
                <button className="btn btn-danger-gradiant btn-block btn-md text-uppercase text-white border-0">Subscribe </button>
              </div>
              <div className="form-group">
                <div className="my-1">
                  <div className="custom-control custom-checkbox mr-sm-2">
                    <input type="checkbox" className="custom-control-input" id="customControlAutosizing1" />
                    <label className="custom-control-label" htmlFor="customControlAutosizing1">I have read and agree to the <a href="#" className="text-decoration-none">terms and conditions</a></label>
                  </div>
                </div>
              </div>
            </form>
          </div>
          {/* column  */}
          <div className="col-lg-6 ml-auto">
            <div className="d-block d-md-flex border-bottom pb-3 text-uppercase">
              <h6 className="no-shrink font-weight-medium align-self-center m-b-0">Latest News</h6>
              <a className="ml-auto text-danger align-self-center text-decoration-none" href="#">View All</a>
            </div>
            <div className="row blog-row mt-4 mb-3">
              <div className="col-md-4">
                <a href="#"><img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/blog/blog-home/img12.jpg" alt="wrapkit" className="img-fluid" /></a>
              </div>
              <div className="col-md-8">
                <h5><a href="#" className="text-decoration-none">The Universe is all of time and space and its contents.</a></h5>
                <p>by <a href="#" className="text-decoration-none">Mark Freeman</a> / 23 May 2017</p>
              </div>
            </div>
            <div className="row blog-row my-3">
              <div className="col-md-4">
                <a href="#"><img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/blog/blog-home/img13.jpg" alt="wrapkit" className="img-fluid" /></a>
              </div>
              <div className="col-md-8">
                <h5><a href="#" className="text-decoration-none">Pellentesque mollis eros quis massa interdum porta et vel.</a></h5>
                <p>by <a href="#" className="text-decoration-none">Mark Freeman</a> / 23 May 2017</p>
              </div>
            </div>
            <div className="row blog-row my-3">
              <div className="col-md-4">
                <a href="#"><img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/blog/blog-home/img14.jpg" alt="wrapkit" className="img-fluid" /></a>
              </div>
              <div className="col-md-8">
                <h5><a href="#" className="text-decoration-none">Duis vel viverra quamam molesvulputate femy.</a></h5>
                <p>by <a href="#" className="text-decoration-none">Mark Freeman</a> / 23 May 2017</p>
              </div>
            </div>
          </div>
          {/* column  */}
        </div>
      </div>
    </div>
    <div />
  </div>
  </div>


        )
    }
}