import React from 'react'
import communityImg from '../../assets/img/vibrant-communities.jpg';


const Voter = () => {
    return (
        <div>
            <ul className="nav nav-tabs text-right d-md-flex justify-content-md-end">
                <li className="n
                av-item"><a className="nav-link active" href="#">français</a></li>
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
            </nav><img src={communityImg} />
            <h4></h4>
            <h4 className="text-center" id="quote" style={{textAlign: 'center',color: 'rgb(92,94,96)'}}></h4>
            <div></div>
            <ul className="nav nav-tabs">
                <li className="nav-item"></li>
            </ul>
            <div className="card"></div>
            <p className="lead text-center" style={{fontSize: '50px'}}><strong>Online Voter Registration Form</strong></p>
            <div className="d-block" style={{height: '30px'}}>
                <div className="container" style={{height: '30px'}}>
                    <div className="row" style={{height: '30px'}}>
                        <div className="col-md-12" style={{height: '30px'}}>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
            <p className="lead text-center"><strong>What would you like to do today?</strong></p><div className="register-row">
                <div className="col-lg-4">
                    <div className="text-left list-group"><a className="list-group-item list-group-item-action" data-toggle="list" href="#list-home"><strong>Register to Vote</strong></a><a className="list-group-item list-group-item-action" data-toggle="list" href="#list-profile"><strong>Update Account</strong></a><a className="list-group-item list-group-item-action" data-toggle="list" href="#list-messages"><strong>Get Election Reminders</strong></a></div>
                </div>
                <div className="col">
                    <div className="tab-content">
                        <div id="list-home" className="tab-pane fade" role="tabpanel">
                            <form className="custom-form" 
                            style={{marginRight: '400px', padding: '30px', fontWeight: '500px'}}>
                                <h1>Registration Form</h1>
                                <div className="form-row form-group">
                                    <div className="col-sm-4 label-column"><label className="col-form-label" for="name-input-field">Full Name </label></div>
                                    <div className="col-sm-6 input-column"><input className="form-control" type="text" /></div>
                                </div>
                                <div className="form-row form-group">
                                    <div className="col-sm-4 label-column"><label className="col-form-label" for="name-input-field">Email </label></div>
                                    <div className="col-sm-6 input-column"><input className="form-control" type="text" /></div>
                                </div>
                                <div className="form-row form-group">
                                    <div className="col-sm-4 label-column"><label className="col-form-label" for="email-input-field">Address </label></div>
                                    <div className="col-sm-6 input-column"><input className="form-control" type="email" /></div>
                                </div>
                                <div className="form-row form-group">
                                    <div className="col-sm-4 label-column"><label className="col-form-label" for="pawssword-input-field">Last 4 digits of ssn</label></div>
                                    <div className="col-sm-6 input-column"><input className="form-control" type="password" /></div>
                                </div>
                                <div className="form-row form-group">
                                    <div className="col-sm-4 label-column"><label className="col-form-label" for="pawssword-input-field">Password </label></div>
                                    <div className="col-sm-6 input-column"><input className="form-control" type="password" /></div>
                                </div>
                                <div className="form-row form-group">
                                    <div className="col-sm-4 label-column"><label className="col-form-label" for="repeat-pawssword-input-field">Repeat Password </label></div>
                                    <div className="col-sm-6 input-column"><input className="form-control" type="password" /></div>
                                </div>

                                <div className="form-row form-group">
                                    <div className="col-sm-4 label-column"><label className="col-form-label" for="dropdown-input-field">Gender </label></div>
                                    <div className="col-sm-4 input-column">
                                        <div className="dropdown"><button className="btn btn-light dropdown-toggle" aria-expanded="false" data-toggle="dropdown" type="button">Select </button>
                                            <div className="dropdown-menu"><a className="dropdown-item" href="#">Female</a><a className="dropdown-item" href="#">Male</a><a className="dropdown-item" href="#">Non-binary</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-check"><input className="form-check-input" type="checkbox" id="formCheck-2" /><label className="form-check-label" for="formCheck-2">I&#39;ve read and accepted the terms and conditions</label></div><button className="btn btn-light submit-button" type="button" style={{backgroundColor: '#0276FD',color: 'white'}}>Submit Form</button>
                            </form>
                        </div>
                        <div id="list-profile" className="tab-pane fade" role="tabpanel" onClick>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Justo nec ultrices dui sapien. Id aliquet lectus proin nibh nisl condimentum id. Scelerisque purus semper eget duis. Eu sem integer vitae justo eget. Scelerisque varius morbi enim nunc faucibus. Sit amet consectetur adipiscing elit. Sed pulvinar proin gravida hendrerit lectus. Arcu odio ut sem nulla pharetra diam. Senectus et netus et malesuada fames ac. Nec ultrices dui sapien eget mi proin. Bibendum ut tristique et egestas quis ipsum. Mattis enim ut tellus elementum sagittis vitae. Fusce id velit ut tortor pretium viverra suspendisse potenti nullam.</p>
                        </div>
                        <div id="list-messages" className="tab-pane fade" role="tabpanel">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Natoque penatibus et magnis dis parturient. Elit ut aliquam purus sit amet luctus venenatis. Nunc id cursus metus aliquam eleifend mi in nulla posuere. Lacus vestibulum sed arcu non odio euismod lacinia. Ac turpis egestas maecenas pharetra. Vulputate dignissim suspendisse in est ante in nibh mauris cursus. Facilisis magna etiam tempor orci eu lobortis elementum nibh. Cursus turpis massa tincidunt dui ut ornare lectus. Aliquam etiam erat velit scelerisque in dictum non consectetur. Mollis aliquam ut porttitor leo a diam sollicitudin tempor id. Potenti nullam ac tortor vitae. At imperdiet dui accumsan sit amet nulla facilisi morbi. Id eu nisl nunc mi ipsum faucibus. Scelerisque varius morbi enim nunc faucibus a pellentesque sit. Tellus mauris a diam maecenas sed. Tristique nulla aliquet enim tortor. Nunc faucibus a pellentesque sit amet porttitor eget dolor. Id velit ut tortor pretium viverra.</p>
                        </div>
                        <div id="list-settings" className="tab-pane fade" role="tabpanel">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Malesuada proin libero nunc consequat. Gravida neque convallis a cras semper auctor. Metus aliquam eleifend mi in nulla posuere sollicitudin. Id velit ut tortor pretium. Nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur. Pellentesque habitant morbi tristique senectus et netus et. Non tellus orci ac auctor augue mauris augue neque. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Phasellus vestibulum lorem sed risus ultricies tristique nulla.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div></div>
            <div>
                <div>
                    <div style={{ backgroundColor: 'rgba(58,47,47,0)', backgroundImage: 'url(&quot;assets/img/footer.png&quot;)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '366px'}}>
                        <div className="container">
                            <h1 className="text-center" style={{fontFamily: 'ABeeZee, sans-serif',fontSize:'46px',color:'rgb(0,0,0)'}}></h1>
                            <ul className="list-inline" id="text_decoration" style={{marginTop: '30px', fontFamily: 'ABeeZee, sans-serif'}}>
                                <li className="list-inline-item"><a className="decoration" style={{color: 'rgb(0,0,0)',fontSize: '20px' , marginRight: '10px'}} href="#">Home</a></li>
                                <li className="list-inline-item"><a style={{fontSize: '20px', color: 'rgb(0,0,0)', marginRight: '10px'}} href="#">Chat</a></li>
                                <li className="list-inline-item"><a style={{fontSize: '20px', color: 'rgb(0,0,0)', marginRight: '10px'}} href="#">About</a></li>
                                <li className="list-inline-item"><a style={{color: 'rgb(0,0,0)',fontSize: '20px', marginRight: '10px'}} href="#">Donation</a></li>
                                <li className="list-inline-item"><a style={{color: 'rgb(0,0,0)',fontSize: '20px'}} href="#">News</a></li>
                            </ul>
                            <p className="text-center" style={{marginTop: '30px', marginBottom: '15px'}}><a style={{fontSize: '35px', marginRight: '30px'}} href="#"><i className="fa fa-facebook-square" style= {{color: 'rgb(0,0,0)', marginRight: '0px'}}></i></a><a style={{fontSize: '35px', marginRight: '30px'}} href="#"><i className="fa fa-instagram" style={{color: 'rgb(0,0,0)', marginRight: '0px'}}></i></a><a style={{fontSize: '35px', marginRight: '30px'}} href="#"><i className="fa fa-linkedin-square" style={{color: 'rgb(0,0,0)', marginRight: '2px'}}></i></a><a style={{fontSize:'35px', marginRight: '30px'}} href="#"></a><a style={{fontSize: '35px'}} href="#"></a></p>
                        </div>
                    </div>
                </div>
            </div>
            <script src="assets/js/jquery.min.js"></script>
            <script src="assets/bootstrap/js/bootstrap.min.js"></script>
            <script src="assets/js/untitled.js"></script>
        </div>
    )
}

export default Voter;