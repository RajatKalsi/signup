import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import img from './logo.png';
import './SignIn.css'
import axios from 'axios';
import { useNavigate } from 'react-router';

function Welcomeback() {
    const url = "http://139.59.47.49:4004/api"
    const [signin, setSignin] = useState({
        email: "",
        password: ""
    })

    var navigate = useNavigate()
    const [showpassword, setShowpassword] = useState(true);
    const Datachange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setSignin({
            ...signin,
            [name]: value
        })
    }
    var k;
    const SignIn = async () => {
        console.log(signin)
        try {
            let res = await axios.post(`${url}/account/login`, {
                email: signin.email,
                password: signin.password

            })
            k = localStorage.setItem("token", res.data.token)
            navigate("/profile")
        }
        catch {
            alert(signin.email + " does not exist")
        }
        setSignin({
            email: "",
            password: ""
        })
    }
    const Checkpassword = () => {
        showpassword ? setShowpassword(false) : setShowpassword(true)
    }
    return (
        <div>
            <div>
                <div className="container d-flex justify-content-center align-items-center" style={{ height: "550px" }}>
                    <div className="row" style={{ height: "400px", width: "500px" }}>
                        <div className='col-12'>
                            <img src={img} alt="" />
                        </div>
                        <div className=' row mt-5'>
                            <div className='col-6 m-auto'><h4>Welcome Back</h4></div>
                        </div>
                        <form onSubmit={(e) => { e.preventDefault(); SignIn() }}>
                            <div className="mb-1 mt-4">
                                <input type="email" className="form-control" placeholder="Email Address" name="email" value={signin.email} onChange={Datachange} required />
                            </div>
                            <div className="position-relative mb-1 mt-2">
                                <input type={showpassword ? "password" : "text"} className="form-control" name="password" value={signin.password} placeholder="Password" onChange={Datachange} required />
                                <i className={showpassword ? "position bi bi-eye-fill" : "position bi bi-eye-slash-fill"} onClick={Checkpassword}></i>
                            </div>
                            <div className='row mt-2'>
                                <div className='col-4 ms-auto'>
                                    <p className='text-danger'><Link to="forgotpassword">forgot password</Link></p>
                                </div>
                            </div>
                            <input type="submit" class="btn btn-danger w-100 rounded mt-2" data-bs-toggle="modal" data-bs-target="#myModal4" value="Sign In" />
                        </form>
                        <p className='mt-3'>Don't have an account? <span className='text-danger'><Link to="emailsignup">Sign up </Link></span></p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Welcomeback