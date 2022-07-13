import img from './logo.png';
import './SignIn.css'
import './PhoneSingin'
// import PhoneSingin from './PhoneSingin';
import { Link } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';
import { GoogleLogin } from 'react-google-login';
import { useState } from 'react';
import axios from 'axios';
import Home from './Home';



const Index = () => {
    const [login, setLogin] = useState("")

    const componentClicked = (res) => {
        setLogin(res)
    }
    const responseFacebook = (res) => {
        setLogin(res)
        console.log(res.name)
    }
    const responseGoogle = (res) => {

    }

    const responseGoogleFail = (res) => {
        console.log(res)
    }
    return (
        <>

            <div className="container d-flex justify-content-center align-items-center" style={{ height: "650px" }}>
                <div className="row color" style={{ height: "430px", width: "500px" }}>
                    <div className="p-3">
                        <div className="col-12">
                            <img src={img} alt="" />
                        </div>
                        <h4 className="mt-3">Welcome to App</h4>
                        <Link to="/phonesignin"><button className=" col-12 btn btn-danger rounded mb-3 mt-2"><i class="bi bi-phone me-5"></i> <span className=" text-center">Continue with Phone</span></button> </Link>
                        <div >  <GoogleLogin
                            clientId="892696856484-qoim84h675eehakemt3t7i0pi9g1hv0o.apps.googleusercontent.com"
                            buttonText="Login"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogleFail}
                            cookiePolicy={'single_host_origin'}
                            data-bs-toggle="modal"
                            data-bs-target="#myModal17"
                        />
                        </div>
                        <br></br>
                        <div>
                            <div className='mt-3 npm start'
                            // data-bs-toggle="modal"
                            //  data-bs-target="#myModal"
                            >
                                <FacebookLogin
                                    appId="1157651755102562"
                                    autoLoad={false}
                                    fields="name,email,picture"
                                    onClick={componentClicked}
                                    callback={responseFacebook} />
                            </div>

                        </div>
                        <p className="mt-4">You have already account?<span className="text-danger"><Link to="/signinin">Sign In</Link></span></p>
                    </div>
                </div>
                <div className="modal" id="myModal16">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header text-success">
                                <h4 className="modal-title ms-5 ps-5">Successfully login</h4>
                                <button type="button" className="btn-close text-white" data-bs-dismiss="modal"></button>
                            </div>
                            <div className="modal-body">
                                <p> Name: <span className='text-success'>{login.name}</span> </p>
                                <p>Login with : <span className='text-success'>{login.graphDomain}</span></p>
                                <p>Id: <span className='text-success'>{login.id}</span></p>
                                <p>Email : <span className='text-success'>{login.email}</span></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal" id="myModal17">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header text-success">
                                <h4 className="modal-title ms-5 ps-5">Successfully login</h4>
                                <button type="button" className="btn-close text-white" data-bs-dismiss="modal"></button>
                            </div>
                            <div className="modal-body">
                                <h3 className='text-danger'>Log-in with Google successful</h3>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Index;