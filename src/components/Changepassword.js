import { click } from '@testing-library/user-event/dist/click'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './index.css'

const Changepassword = () => {
    const navigate = useNavigate(null)
    const [changepassword, setChangepassword] = useState({
        old_password: "",
        new_password: ""
    })
    const [showpassword, setShowpassword] = useState(true)
    const [shownewpassword, setShownewpassword] = useState(true)


    const url = "http://139.59.47.49:4004/api/account/change/password"
    const PasswordChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setChangepassword({
            ...changepassword,
            [name]: value
        })
    }

    const onPasswordChange = async () => {
        try {
            let data2 = {
                old_password: changepassword.old_password,
                new_password: changepassword.new_password
            }
            let res = await axios.put(url, data2, {
                headers: {
                    'Authorization': localStorage.getItem("token"),

                }
            })
            setChangepassword({
                old_password: "",
                new_password: ""
            })

            navigate("/modal")
            document.getElementById("footer").style.display = "none"
        }
        catch {
            alert("Please enter correct old password")
        }

    }
    const Checkpassword = () => {
        showpassword ? setShowpassword(false) : setShowpassword(true)
    }
    const Checknewpassword = () => {
        shownewpassword ? setShownewpassword(false) : setShownewpassword(true)
    }

    return (
        <div className='container-fluid'>
            <div className="row shadow">
                <div className="col-3 m-3">
                    <img src="https://ps.w.org/tiny-compress-images/assets/icon-256x256.png?rev=1088385" className="rounded-pill" alt="" height="70px" width="70px" />
                </div>
                <div className="col-3 ms-auto">
                    <div className="row m-4 shadow">
                        <div className="col-2 m-2">
                            <img src="https://ps.w.org/tiny-compress-images/assets/icon-256x256.png?rev=1088385" className="rounded-pill" alt="" height="45px" width="45px" />
                        </div>
                        <div className=" ms-3 col-7 mt-3">
                            <span className="text-danger">Jonas Brothers</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className="d-flex mt-5">
                    <p className="">My Account</p>
                    <b> <i className="bi bi-chevron-compact-right ms-2"></i></b>
                    <p className="ms-2">Personal info</p>
                </div>
                <div className="row mt-3">
                    <h3>Change Password</h3>
                </div>

                <div className='shadow p-3' style={{ width: "700px" }}>
                    <label>Old Password</label>
                    <br></br>
                    <div className='position-relative'>
                        <input type={showpassword ? "password" : "text"} onChange={PasswordChange} className='w-50' name="old_password" value={changepassword.old_password} />
                        <i className={showpassword ? "position2 bi bi-eye-fill" : "position2 bi bi-eye-slash-fill"} onClick={Checkpassword}></i>
                        <i className="bi bi-5-circle-fill"></i>
                    </div>

                    <br></br>
                    <label>New Password</label>
                    <br></br>
                    <div className='position-relative'>
                        <input type={shownewpassword ? "password" : "text"} onChange={PasswordChange} className='w-50' name="new_password" value={changepassword.new_password} />
                        <i className={shownewpassword ? "position2 bi bi-eye-fill" : "position2 bi bi-eye-slash-fill"} onClick={Checknewpassword}></i>
                        <i className="bi bi-5-circle-fill"></i>
                    </div>

                    <br></br>
                    <br></br>
                    <button className='btn btn-danger' onClick={onPasswordChange} data-bs-toggle="modal" data-bs-target="#myModal6">Update Password</button>
                </div>
            </div>
        </div>
    )
}

export default Changepassword;