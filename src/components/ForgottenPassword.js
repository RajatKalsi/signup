import React, { useState } from 'react'
import img from './logo.png';
import { Link } from 'react-router-dom';
import axios from 'axios';

function ForgottenPassword() {
    const [forgot, setForgot] = useState("")
    const forgotpassword = async () => {
        let res = await axios.post("http://139.59.47.49:4004/api/account/forgot/password", {
            email: forgot
        })
        setForgot("");
    }
    return (
        <div>
            <div>
                <form onSubmit={(e) => { e.preventDefault(); forgotpassword(); }}>
                    <div className="container d-flex justify-content-center align-items-center" style={{ height: "500px", width: "450px" }}>
                        <div className="row">
                            <div className='col-12'>
                                <img src={img} alt="" />
                            </div>
                            <div className=' row mt-4'>
                                <h5>Forgotten your Password ?</h5>
                            </div>

                            <div className="mb-1">
                                <input type="email" className="form-control mt-2" placeholder="email" name="email" onChange={(e) => { setForgot(e.target.value) }} required />
                            </div>
                            <div className='row'>
                                <div className='col-4 ms-auto'>
                                    <p className=''><Link to="resetpassword"> Reset password </Link></p>
                                </div>
                            </div>
                            <input type="submit" className="btn btn-danger w-100 rounded mb-1 mt-3" value="Send Link" />
                        </div>
                    </div>
                </form>
            </div>
        </div >
    )
}

export default ForgottenPassword;