import React, {Component} from 'react';
export default class Chat extends Component{
    render(){
        return(
            <div>
            <ul className="nav nav-tabs text-right d-md-flex justify-content-md-end">
              <li className="nav-item"><a className="nav-link active" href="#" />français</li>
              <li className="nav-item"><a className="nav-link" href="#">español</a></li>
              <li className="nav-item"><a className="nav-link" href="#" />عربي</li>
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
            <h4 className="text-center" id="quote" style={{textAlign: 'center', color: 'rgb(92,94,96)'}} />
            <div />
            <ul className="nav nav-tabs">
              <li className="nav-item" />
            </ul>
            <div className="card" />
            <div><div className="bootstrap_chat" style={{marginTop: 100}}>
                <div className="container py-5 px-4">
                  {/* For demo purpose*/}
                  <header className="text-center">
                    <h3 className="display-4 text-white">Community Chat</h3>
                  </header>
                  <div className="row rounded-lg overflow-hidden shadow">
                    {/* Users box*/}
                    <div className="col-5 px-0">
                      <div className="bg-white">
                        <div className="bg-gray px-4 py-2 bg-light">
                          <p className="h5 mb-0 py-1">Recent</p>
                        </div>
                        <div className="messages-box">
                          <div className="list-group rounded-0">
                            <a className="list-group-item list-group-item-action active text-white rounded-0">
                              <div className="media"><img src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width={50} className="rounded-circle" />
                                <div className="media-body ml-4">
                                  <div className="d-flex align-items-center justify-content-between mb-1">
                                    <h6 className="mb-0">Jason Doe</h6><small className="small font-weight-bold">25 Dec</small>
                                  </div>
                                  <p className="font-italic mb-0 text-small">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                </div>
                              </div>
                            </a>
                            <a href="#" className="list-group-item list-group-item-action list-group-item-light rounded-0">
                              <div className="media"><img src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width={50} className="rounded-circle" />
                                <div className="media-body ml-4">
                                  <div className="d-flex align-items-center justify-content-between mb-1">
                                    <h6 className="mb-0">Jason Doe</h6><small className="small font-weight-bold">14 Dec</small>
                                  </div>
                                  <p className="font-italic text-muted mb-0 text-small">Lorem ipsum dolor sit amet, consectetur. incididunt ut labore.</p>
                                </div>
                              </div>
                            </a>
                            <a href="#" className="list-group-item list-group-item-action list-group-item-light rounded-0">
                              <div className="media"><img src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width={50} className="rounded-circle" />
                                <div className="media-body ml-4">
                                  <div className="d-flex align-items-center justify-content-between mb-1">
                                    <h6 className="mb-0">Jason Doe</h6><small className="small font-weight-bold">9 Nov</small>
                                  </div>
                                  <p className="font-italic text-muted mb-0 text-small">consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                </div>
                              </div>
                            </a>
                            <a href="#" className="list-group-item list-group-item-action list-group-item-light rounded-0">
                              <div className="media"><img src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width={50} className="rounded-circle" />
                                <div className="media-body ml-4">
                                  <div className="d-flex align-items-center justify-content-between mb-1">
                                    <h6 className="mb-0">Jason Doe</h6><small className="small font-weight-bold">18 Oct</small>
                                  </div>
                                  <p className="font-italic text-muted mb-0 text-small">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                </div>
                              </div>
                            </a>
                            <a href="#" className="list-group-item list-group-item-action list-group-item-light rounded-0">
                              <div className="media"><img src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width={50} className="rounded-circle" />
                                <div className="media-body ml-4">
                                  <div className="d-flex align-items-center justify-content-between mb-1">
                                    <h6 className="mb-0">Jason Doe</h6><small className="small font-weight-bold">17 Oct</small>
                                  </div>
                                  <p className="font-italic text-muted mb-0 text-small">consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                </div>
                              </div>
                            </a>
                            <a href="#" className="list-group-item list-group-item-action list-group-item-light rounded-0">
                              <div className="media"><img src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width={50} className="rounded-circle" />
                                <div className="media-body ml-4">
                                  <div className="d-flex align-items-center justify-content-between mb-1">
                                    <h6 className="mb-0">Jason Doe</h6><small className="small font-weight-bold">2 Sep</small>
                                  </div>
                                  <p className="font-italic text-muted mb-0 text-small">Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                              </div>
                            </a>
                            <a href="#" className="list-group-item list-group-item-action list-group-item-light rounded-0">
                              <div className="media"><img src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width={50} className="rounded-circle" />
                                <div className="media-body ml-4">
                                  <div className="d-flex align-items-center justify-content-between mb-1">
                                    <h6 className="mb-0">Jason Doe</h6><small className="small font-weight-bold">30 Aug</small>
                                  </div>
                                  <p className="font-italic text-muted mb-0 text-small">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                </div>
                              </div>
                            </a>
                            <a href="#" className="list-group-item list-group-item-action list-group-item-light rounded-0">
                              <div className="media"><img src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width={50} className="rounded-circle" />
                                <div className="media-body ml-4">
                                  <div className="d-flex align-items-center justify-content-between mb-3">
                                    <h6 className="mb-0">Jason Doe</h6><small className="small font-weight-bold">21 Aug</small>
                                  </div>
                                  <p className="font-italic text-muted mb-0 text-small">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Chat Box*/}
                    <div className="col-7 px-0">
                      <div className="px-4 py-5 chat-box bg-white">
                        {/* Sender Message*/}
                        <div className="media w-50 mb-3"><img src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width={50} className="rounded-circle" />
                          <div className="media-body ml-3">
                            <div className="bg-light rounded py-2 px-3 mb-2">
                              <p className="text-small mb-0 text-muted">Test which is a new approach all solutions</p>
                            </div>
                            <p className="small text-muted">12:00 PM | Aug 13</p>
                          </div>
                        </div>
                        {/* Reciever Message*/}
                        <div className="media w-50 ml-auto mb-3">
                          <div className="media-body">
                            <div className="bg-primary rounded py-2 px-3 mb-2">
                              <p className="text-small mb-0 text-white">Test which is a new approach to have all solutions</p>
                            </div>
                            <p className="small text-muted">12:00 PM | Aug 13</p>
                          </div>
                        </div>
                        {/* Sender Message*/}
                        <div className="media w-50 mb-3"><img src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width={50} className="rounded-circle" />
                          <div className="media-body ml-3">
                            <div className="bg-light rounded py-2 px-3 mb-2">
                              <p className="text-small mb-0 text-muted">Test, which is a new approach to have</p>
                            </div>
                            <p className="small text-muted">12:00 PM | Aug 13</p>
                          </div>
                        </div>
                        {/* Reciever Message*/}
                        <div className="media w-50 ml-auto mb-3">
                          <div className="media-body">
                            <div className="bg-primary rounded py-2 px-3 mb-2">
                              <p className="text-small mb-0 text-white">Apollo University, Delhi, India Test</p>
                            </div>
                            <p className="small text-muted">12:00 PM | Aug 13</p>
                          </div>
                        </div>
                        {/* Sender Message*/}
                        <div className="media w-50 mb-3"><img src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width={50} className="rounded-circle" />
                          <div className="media-body ml-3">
                            <div className="bg-light rounded py-2 px-3 mb-2">
                              <p className="text-small mb-0 text-muted">Test, which is a new approach</p>
                            </div>
                            <p className="small text-muted">12:00 PM | Aug 13</p>
                          </div>
                        </div>
                        {/* Reciever Message*/}
                        <div className="media w-50 ml-auto mb-3">
                          <div className="media-body">
                            <div className="bg-primary rounded py-2 px-3 mb-2">
                              <p className="text-small mb-0 text-white">Apollo University, Delhi, India Test</p>
                            </div>
                            <p className="small text-muted">12:00 PM | Aug 13</p>
                          </div>
                        </div>
                      </div>
                      {/* Typing area */}
                      <form action="#" className="bg-light">
                        <div className="input-group">
                          <input type="text" placeholder="Type a message" aria-describedby="button-addon2" className="form-control rounded-0 border-0 py-4 bg-light" />
                          <div className="input-group-append">
                            <button id="button-addon2" type="submit" className="btn btn-link"> <i className="fa fa-paper-plane" /></button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>wy5rg
                </div>
              </div>
              <div>
                <div style={{backgroundColor: 'rgba(58,47,47,0)', backgroundImage: 'url("../../assets/img/footer.png")', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: 366}}>
                  <div className="container">
                    <h1 className="text-center" style={{fontFamily: 'ABeeZee, sans-serif', fontSize: 46, color: 'rgb(0,0,0)'}} />
                    <hr />
                    <ul className="list-inline" id="text_decoration" style={{marginTop: 30, fontFamily: 'ABeeZee, sans-serif'}}>
                      <li className="list-inline-item"><a className="decoration" style={{color: 'rgb(0,0,0)', fontSize: 20, marginRight: 10}} href="#">Home</a></li>
                      <li className="list-inline-item"><a style={{fontSize: 20, color: 'rgb(0,0,0)', marginRight: 10}} href="#">Chat</a></li>
                      <li className="list-inline-item"><a style={{fontSize: 20, color: 'rgb(0,0,0)', marginRight: 10}} href="#">About</a></li>
                      <li className="list-inline-item"><a style={{color: 'rgb(0,0,0)', fontSize: 20, marginRight: 10}} href="#">Donation</a></li>
                      <li className="list-inline-item"><a style={{color: 'rgb(0,0,0)', fontSize: 20}} href="#">News</a></li>
                    </ul>
                    <p className="text-center" style={{marginTop: 30, marginBottom: 15}}><a style={{fontSize: 35, marginRight: 30}} href="#"><i className="fa fa-facebook-square" style={{color: 'rgb(0,0,0)', marginRight: 0}} /></a><a style={{fontSize: 35, marginRight: 30}} href="#"><i className="fa fa-instagram" style={{color: 'rgb(0,0,0)', marginRight: 0}} /></a><a style={{fontSize: 35, marginRight: 30}} href="#"><i className="fa fa-linkedin-square" style={{color: 'rgb(0,0,0)', marginRight: 2}} /></a><a style={{fontSize: 35, marginRight: 30}} href="#" /><a style={{fontSize: 35}} href="#" /></p>
                    <p className="text-center" style={{color: 'rgb(193,184,184)', fontFamily: 'ABeeZee, sans-serif', marginBottom: 23}} />
                  </div>
                </div>
              </div>
            </div>
            
            
            
          </div>
        )
           
            
    
    }}