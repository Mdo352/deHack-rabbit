import React from 'react'
import communityImg from '../../assets/img/community.png';


const Voter = () => {
    return (
        <div>
            <img src={communityImg} />
            <h4></h4>
            <h4 className="text-center" id="quote" style={{ textAlign: 'center', color: 'rgb(92,94,96)' }}></h4>
            <div></div>
            <ul className="nav nav-tabs">
                <li className="nav-item"></li>
            </ul>
            <div className="card"></div>
            <p className="lead text-center" style={{ fontSize: '50px' }}><strong>Online Voter Registration Form</strong></p>
            <div className="d-block" style={{ height: '30px' }}>
                <div className="container" style={{ height: '30px' }}>
                    <div className="row" style={{ height: '30px' }}>
                        <div className="col-md-12" style={{ height: '30px' }}>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>   
            <div>
            <p className="lead text-center"><strong>What would you like to do today?</strong></p><div className="register-row">
                <div className="col-lg-4">
                    <div className="text-left list-group">
                        <a className="list-group-item list-group-item-action active" data-toggle="list" href="#list-home">
                            <strong>Register to Vote</strong></a>
                        <a className="list-group-item list-group-item-action" data-toggle="list" href="#list-profile">
                            <strong>Update Account</strong></a>
                        <a className="list-group-item list-group-item-action" data-toggle="list" href="#list-messages">
                            <strong>Get Election Reminders</strong></a></div>
                </div>
                <div className="col">
                    <div className="tab-content">
                        <div id="list-home" className="tab-pane fade" role="tabpanel">
                            <form className="custom-form"
                                style={{ marginRight: '400px', padding: '30px', fontWeight: '500px' }}>
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
                                <div className="form-check"><input className="form-check-input" type="checkbox" id="formCheck-2" /><label className="form-check-label" for="formCheck-2">I&#39;ve read and accepted the terms and conditions</label></div><button className="btn btn-light submit-button" type="button" style={{ backgroundColor: '#0276FD', color: 'white' }}>Submit Form</button>
                            </form>
                        </div>
                        <div id="list-profile" className="tab-pane fade" role="tabpanel" onClick>

                        </div>
                        <div id="list-messages" className="tab-pane fade" role="tabpanel">
                        </div>
                        <div id="list-settings" className="tab-pane fade" role="tabpanel">

                        </div>
                    </div>
                </div>
            </div>
            <div></div>
            <div>
                <div>
                    <div style={{ backgroundColor: 'rgba(58,47,47,0)', backgroundImage: 'url(&quot;assets/img/footer.png&quot;)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '366px' }}>
                        <div className="container">
                            <h1 className="text-center" style={{ fontFamily: 'ABeeZee, sans-serif', fontSize: '46px', color: 'rgb(0,0,0)' }}></h1>
                            <ul className="list-inline" id="text_decoration" style={{ marginTop: '30px', fontFamily: 'ABeeZee, sans-serif' }}>
                                <li className="list-inline-item"><a className="decoration" style={{ color: 'rgb(0,0,0)', fontSize: '20px', marginRight: '10px' }} href="#">Home</a></li>
                                <li className="list-inline-item"><a style={{ fontSize: '20px', color: 'rgb(0,0,0)', marginRight: '10px' }} href="#">Chat</a></li>
                                <li className="list-inline-item"><a style={{ fontSize: '20px', color: 'rgb(0,0,0)', marginRight: '10px' }} href="#">About</a></li>
                                <li className="list-inline-item"><a style={{ color: 'rgb(0,0,0)', fontSize: '20px', marginRight: '10px' }} href="#">Donation</a></li>
                                <li className="list-inline-item"><a style={{ color: 'rgb(0,0,0)', fontSize: '20px' }} href="#">News</a></li>
                            </ul>
                            <p className="text-center" style={{ marginTop: '30px', marginBottom: '15px' }}><a style={{ fontSize: '35px', marginRight: '30px' }} href="#"><i className="fa fa-facebook-square" style={{ color: 'rgb(0,0,0)', marginRight: '0px' }}></i></a><a style={{ fontSize: '35px', marginRight: '30px' }} href="#"><i className="fa fa-instagram" style={{ color: 'rgb(0,0,0)', marginRight: '0px' }}></i></a><a style={{ fontSize: '35px', marginRight: '30px' }} href="#"><i className="fa fa-linkedin-square" style={{ color: 'rgb(0,0,0)', marginRight: '2px' }}></i></a><a style={{ fontSize: '35px', marginRight: '30px' }} href="#"></a><a style={{ fontSize: '35px' }} href="#"></a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Voter;