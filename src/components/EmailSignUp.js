import React, { useState } from 'react'
import img from './logo.png';
import './SignIn.css'
import axios from 'axios';
import { Link } from 'react-router-dom';

function EmailSignUp() {
    let emailvalid = document.getElementById("emailvalid")
    let span = document.getElementById("span")
    const [showpassword, setShowpassword] = useState(true);

    const [signup, setSignup] = useState({
        mobile: "",
        email: "",
        password: "",

    })

    const InputChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setSignup({
            ...signup,
            [name]: value
        })
    }

    const Checkpassword = () => {
        showpassword ? setShowpassword(false) : setShowpassword(true)
    }
    var reg = /^[a-z0-9._$]{4,}@[a-z]{3,}[.]{1}[a-z]{2,}$/;
    var regMobile = /^([+]\d{2})?\d{10}$/;

    const Validation = (e) => {
        var reg = /^[a-z0-9._$]{5,}@[a-z]{3,}[.]{1}[a-z]{3,}$/;
        document.getElementById("span1").style.display = "block"
        document.getElementById("span2").style.display = "none"
        if (reg.test(signup.email)) {

            document.getElementById("span1").innerHTML = "your email is valid";
            document.getElementById("span1").style.color = "green";
        }
        else {

            document.getElementById("span1").innerHTML = "your email is invalid";
            document.getElementById("span1").style.color = "red";
            return false;
        }
    }
    const ValidationMobile = (e) => {
        document.getElementById("span1").style.display = "none"
        document.getElementById("span2").style.display = "block"

        if (regMobile.test(signup.mobile)) {
            document.getElementById("span2").innerHTML = "your mobile number is valid";
            document.getElementById("span2").style.color = "green";
        }
        else {

            document.getElementById("span2").innerHTML = "your mobile number is invalid";
            document.getElementById("span2").style.color = "red";
            return false;
        }
    }
    const onPassword = () => {
        document.getElementById("span1").style.display = "none"
        document.getElementById("span2").style.display = "none"
    }
    const Signup = async () => {
        try {
            if (reg.test(signup.email) && regMobile.test(signup.mobile)) {

                let res = await axios.post("http://139.59.47.49:4004/api/account/register", {
                    mobile_number: signup.mobile,
                    email: signup.email,
                    password: signup.password,
                    device_type: 1,
                    country_code: "+91"
                })
                console.log("successfull")
                setSignup({
                    mobile: "",
                    email: "",
                    password: "",

                })

                document.getElementById("span1").style.display = "none"
                document.getElementById("span2").style.display = "none"

            }
            else {
                alert("Data is not right")
            }

        }
        catch {
            console.log("error")
        }


    }
    const Emailverification = async () => {

    }
    return (
        <>
            <form onSubmit={(e) => { e.preventDefault(); return Signup() }}>
                <div className="container d-flex justify-content-center align-items-center">
                    <div className="row" style={{ height: "400px", width: "500px" }}>
                        <div className='col-12'>
                            <img src={img} alt="" />
                        </div>
                        <div className=' row mt-4'>
                            {/* <div type="button" className=" col-3 mt-2 me-5" data-bs-dismiss="modal"><i className="bi bi-arrow-left" style={{ width: "150px" }} data-bs-dismiss="modal"></i></div> */}
                            <div className='col-4 m-auto'><h4 className=''>Sign-Up</h4></div>
                        </div>
                        <div className="position-relative mb-1 mt-4">
                            <input type="text" className="form-control" placeholder="Mobile Number" name="mobile" value={signup.mobile} onChange={(e) => { InputChange(e); ValidationMobile() }} required />
                            <i className="position bi bi-person-fill"></i>
                            <span className='text-start' id="span2"></span>
                        </div>
                        <div className="position-relative mb-1 mt-1">
                            <input type="email" className="form-control" id="emailvalid" placeholder="Email" name="email" value={signup.email} onChange={(e) => { InputChange(e); Validation(e); }} />
                            <i className="position bi bi-envelope"></i>
                            <span className='text-start' id="span1"></span>
                        </div>

                        <div className="position-relative mb-1 mt-1">
                            <input type={showpassword ? "password" : "text"} className="form-control" placeholder="Password" name="password" value={signup.password} onChange={(e) => { InputChange(e); onPassword() }} required />
                            <i className={showpassword ? "position bi bi-eye-fill" : "position bi bi-eye-slash-fill"} onClick={Checkpassword}></i>
                        </div>
                        <div className='row mt-2'>
                            <div className='col-1 e-0'>
                                <input type="checkbox" required />
                            </div>
                            <div className='col-11 ms-0 ps-0'>
                                <small>By clicking Create Account you agree to the<span className='text-danger'>
                                    <a href="hello" className='link-danger' alt="">Terms of service </a></span> and<span className='text-danger'><a href="hello" className='link-danger' alt=""> Privacy policy</a></span></small>
                            </div>
                        </div>
                        <input type="submit" class="btn btn-danger w-100 rounded mt-3" data-bs-toggle="modal" value="Sign Up" data-bs-target="#myModal4" />
                        <p className='mt-3'>You have already account? <span className='text-danger'><Link to="/signinin">Sign-In </Link></span></p>
                    </div>
                </div>
            </form>
            {/* Email verification model */}
            < div >
                <div class="modal" id="myModal3">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header bg-danger">
                                <h4 class="modal-title col-11 text-center text-white">
                                    Email Verification
                                </h4>
                                <div className='col-1'>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                                </div>
                            </div>
                            <div class="modal-body">
                                <p>Thanks for Signing Up! we just need to verify your email address to complete to setting up your account</p>
                                <button type="button" class="btn btn-danger w-100 rounded mt-2" onClick={Emailverification}>Send link</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default EmailSignUp