import React, { useState } from 'react';
import img from './logo.png';
import axios from 'axios'

function ResetyourPasaword() {
    const [password, setPassword] = useState({
        old: "",
        new: ""
    })

    const PasswordChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setPassword({
            ...password,
            [name]: value
        })
    }

    const Resetpassword = async () => {
        let res = await axios.put("http://139.59.47.49:4004/api/account/change/password", {
            old_password: password.old,
            new_password: password.new
        })
        setPassword({
            old: "",
            new: ""
        })
    }
    return (
        <form className='form-control' onSubmit={(e) => { e.preventDefault(); Resetpassword() }}>
            <div>

                <div className="container d-flex justify-content-center align-items-center" style={{ height: "600px" }}>

                    <div className="row" style={{ height: "350px", width: "450px" }}>
                        <div className='col-12'>
                            <img src={img} alt="" />
                        </div>
                        <div className='row'>
                            <h5>Reset your Password ?</h5>
                        </div>

                        <div className="">
                            <input type="password" className="form-control mt-1" placeholder="Old Password" name="old" value={password.old} onChange={PasswordChange} required />
                        </div>
                        <div className="">
                            <input type="password" className="form-control mt-1" placeholder="New Password" name="new" value={password.new} onChange={PasswordChange} required />
                        </div>
                        <div>
                            <input type="submit" className=" form-control btn btn-danger mt-2 w-100 rounded " data-bs-dismiss="modal" value="Submit" />
                        </div>

                    </div>

                </div>
            </div>
        </form>

    )
}

export default ResetyourPasaword