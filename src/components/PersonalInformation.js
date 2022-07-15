import './index.css'
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';


const PersonalInformation = () => {
    var y = localStorage.getItem("token");
    const navigate = useNavigate(null)
    const navigate1 = useNavigate(null)
    const [storefilename, setStorefilename] = useState("")
    const [countrycode, setCountrycode] = useState("")
    const [profile, setProfile] = useState({
        first_name: "",
        address: "",
        email: "",
        mobile_number: "",
        profile_image: ""
    })
    const [verifyOtp, setVerifyOtp] = useState({
        input: "",
        input1: "",
        input2: "",
        input3: ""
    })
    const [image, setImage] = useState(null)
    const [otpfilled, setOtpfilled] = useState(true);
    let url1 = "http://139.59.47.49:4004/api";
    const DetailChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setProfile({
            ...profile,
            [name]: value
        })
    }
    const Gettoken = async () => {
        axios({
            method: "Get",
            url: `${url1}/profile`,
            headers: {
                Authorization: y
            },

        })
            .then(res => {
                console.log("res", res);
                setProfile(res.data.profile)
                let profileimage = localStorage.setItem("profileimage", res.data.profile.profile_image)
                localStorage.getItem(profileimage)
                setStorefilename(res.data.profile.profile_image)
                console.log(res.data.profile)
            })
            .catch(err => {
                console.log("error in request", err);
            });
    }

    useEffect(() => {
        Gettoken();
    }, [])
    let filename;
    const fileUpload = async () => {
        if (image == null) {
            return ""
        }
        const formdata = new FormData();
        formdata.append("profile_image", image);
        let res = await axios.post(`${url1}/upload/profile-image`, formdata, {
            headers: {
                "Content-Type": "multipart/form-data",
                'Authorization': localStorage.getItem("token")
            }
        })
        filename = res.data.filename
        debugger
        console.log(filename);
        setStorefilename(filename)
        return filename
    }
    const handleSubmit = async () => {
        let filename = await fileUpload()
        const data = {
            first_name: profile.first_name,
            address: profile.address,
            email: profile.email,
            mobile_number: profile.mobile_number,
        }
        if (filename) {
            data["profile_image"] = filename
        }

        let res = await axios.put(`${url1}/edit-profile`, data, {

            headers: {
                'Authorization': localStorage.getItem("token")
            }
        })
    }
    const Savename = async () => {
        const data = {
            first_name: profile.first_name,
        }
        let res = axios.put(`${url1}/edit-profile`, data, {

            headers: {
                'Authorization': localStorage.getItem("token")
            }
        })
    }
    const SaveLocation = async () => {
        const data = {
            address: profile.address,
        }
        let res = axios.put(`${url1}/edit-profile`, data, {

            headers: {
                'Authorization': localStorage.getItem("token")
            }
        })

    }
    const SaveEmail = async () => {
        const data = {
            address: profile.address,
        }
        let res = axios.put(`${url1}/edit-profile`, data, {

            headers: {
                'Authorization': localStorage.getItem("token")
            }
        })

    }
    const inputRef = useRef(null);
    const inputRef2 = useRef(null)
    const inputRef1 = useRef(null)
    const ChangeEmail = () => {
        inputRef2.current.focus()
    }
    const ChangeLocation = () => {
        inputRef1.current.focus()
    }
    const ImageSelect = () => {
        inputRef.current()
    }
    const handlepost = async () => {
        let res = axios.post(`${url1}/upload/profile-image`)
        console.log(res)
    }

    let inputRef4 = useRef(null)
    let inputRef5 = useRef(null)
    let inputRef6 = useRef(null)
    let inputRef7 = useRef(null)

    const Onfocus = (value) => {
        if (value) {
            inputRef5.current.focus()
        }
    }
    const Onfocus1 = (value) => {
        if (value) {
            inputRef6.current.focus()
        }
        else {
            inputRef4.current.focus()
        }
    }
    const Onfocus2 = (value) => {
        if (value) {
            inputRef7.current.focus()
        }
        else {
            inputRef5.current.focus()
        }
    }
    const Onfocus3 = (value) => {
        if (value) {
            inputRef7.current.focus()
        }
        else {
            inputRef6.current.focus()
            setOtpfilled(false);
        }
    }

    const SendOtp = async () => {
        let data = {
            mobile_number: profile.mobile_number,
            country_code: "+91"
        }
        let res = await axios.post(`${url1}/account/send/otp`, data, {

            headers: {
                "Authorization": localStorage.getItem("token")
            }
        })
    }
    const VeryfyingOtp = async () => {
        try {
            const { input, input1, input2, input3 } = verifyOtp
            let res = await axios.post(`${url1}/account/verify/otp`, {
                mobile_number: profile.mobile_number,
                otp: `${input}${input1}${input2}${input3}`
            })
            navigate('/otpverifiedmodal')
        }
        catch {
            console.log("error")
        }
    }
    const SendagainOtp = () => {
        setVerifyOtp(
            {
                input: "",
                input1: "",
                input2: "",
                input3: ""
            }
        )
    }
    return (
        <>
            <div className="container-fluid">
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
                <div className="container">
                    <div className="d-flex mt-5">
                        <p className="">My Account</p>
                        <b> <i className="bi bi-chevron-compact-right ms-2"></i></b>
                        <p className="ms-2">Personal info</p>
                    </div>
                    <div className="row mt-3">
                        <h3>Personal info</h3>
                    </div>
                    <form onSubmit={(e) => { e.preventDefault(); handleSubmit() }}>
                        <div className="row mt-3 ">
                            <div className="col-7 shadow  p-3" style={{ height: "150px" }}>
                                <div className="row">
                                    <div className="col-2 me-auto">
                                        <p>Name</p>
                                    </div>
                                    <div className="col-2 ms-auto">
                                        <p className="text-danger" onClick={() => { window.history.back() }}>Cancel</p>
                                    </div>
                                </div>
                                <div className="me-5">
                                    <input type="text" className="w-100" name="first_name" value={profile.first_name} placeholder="Name" onChange={DetailChange} />
                                </div>
                                <button type="button" className="btn btn-danger mt-3" onClick={Savename} >Save</button>
                            </div>
                            {/* Image section */}
                            <div className="col-3 shadow m-auto">
                                <div className="position-relative p-5">
                                    <i className="bi bi-camera position-absolute  position1 translate-middle" data-bs-toggle="modal" data-bs-target="#myModal"></i>
                                    <img src={image ? URL.createObjectURL(image) : `http://139.59.47.49:4004/api/profile_image?profile_image=${storefilename}`} className="rounded-pill text-center" alt="" height="100px" width="100px" />
                                </div>
                            </div>
                            {/* location */}
                            <div className="col-7 shadow mt-3 p-3" style={{ height: "150px" }}>
                                <div className="row">
                                    <div className="col-2 me-auto">
                                        <p>Location</p>
                                    </div>
                                    <div className="col-2 ms-auto">
                                        <p className="text-danger" onClick={() => { window.history.back() }}>Cancel</p>
                                    </div>
                                </div>
                                <div className="me-5 position-relative">
                                    <input type="text" className="w-100" ref={inputRef1} onclick={ImageSelect} name="address" value={profile.address} placeholder="location" onChange={DetailChange} />
                                    <button type="btn" className="text-position text-danger border-0 bg-white" onClick={ChangeLocation}>Change</button>
                                </div>
                                <button type="button" className="btn btn-danger mt-3" onClick={SaveLocation}>Save</button>
                            </div>
                            {/* Email */}
                            <div className="col-7 shadow mt-5 p-3" style={{ height: "150px" }}>
                                <div className="row">
                                    <div className="col-2 me-auto">
                                        <p>email</p>
                                    </div>
                                    <div className="col-2 ms-auto">
                                        <p className="text-danger" onClick={() => { window.history.back() }}>Cancel</p>
                                    </div>
                                </div>
                                <div className="me-5 position-relative">
                                    <input type="text" className="w-100" ref={inputRef2} placeholder="Email" name="email" value={profile.email} onChange={DetailChange} />
                                    <button type="btn" className="text-position text-danger border-0 bg-white" onClick={ChangeEmail}>Change</button>
                                </div>
                                <button type="button" className="btn btn-danger mt-3" onClick={SaveEmail}>Save</button>
                            </div>
                            {/* Mobile number */}
                            <div className="col-7 shadow mt-5 p-3" style={{ height: "220px" }}>
                                <div className="row">
                                    <div className="col-3 me-auto">
                                        <p>Mobile Number</p>
                                    </div>
                                    <div className="col-2 ms-auto">
                                        <p className="text-danger" onClick={() => { window.history.back() }}>Cancel</p>
                                    </div>
                                </div>
                                <div className="me-5 position-relative">
                                    <select class="form-select form-select- mb-3" aria-label=".form-select-lg example" >
                                        <option value="1">+91</option>
                                        <option value="2">+63</option>
                                        <option value="3">+1</option>
                                    </select>
                                    <div class="col-auto">
                                        <div class="input-group mb-2">
                                            <div class="input-group-prepend">
                                                <div class="input-group-text">91</div>
                                            </div>
                                            <input type="text" class="form-control" id="inlineFormInputGroup" value={profile.mobile_number} placeholder="Mobile number" name="mobile_number" onChange={DetailChange} />
                                        </div>
                                    </div>
                                </div>
                                <button type="button" className="bg-danger mt-3" data-bs-toggle="modal" data-bs-target="#myModal3" onClick={SendOtp} >Send Otp</button>
                            </div>
                            <div className="col-7 mt-3 mb-5 p-2">
                                <input type="submit" className=" btn w-100 btn-danger p-2 border-0 rounded-pill" value="Save Changes" />
                            </div>
                        </div>
                    </form>
                </div>
                {/* galary modal */}
                <div className="modal modal1" id="myModal">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-body">
                                <div className='row'>
                                    <div className='col-2' data-bs-dismiss="modal" onClick={() => { document.getElementById("image").click(); }} ><i className="bi bi-images"></i></div>
                                    <div className='col-6' data-bs-dismiss="modal" onClick={() => { document.getElementById("image").click(); }}>Gallary</div>
                                    <input type="file" accept="/images*" id="image" style={{ display: "none" }} name="profile_image" onChange={(e) => { setImage(e.target.files[0]) }} />
                                </div>
                                <div className='row'>
                                    <div className='col-2' data-bs-dismiss="modal" onClick={() => { document.getElementById("image").click(); }}><i className="bi bi-camera" data-bs-dismiss="modal"></i></div>
                                    <div className='col-8' data-bs-dismiss="modal" onClick={() => { document.getElementById("image").click(); }}>Upload image</div>
                                </div>
                                <div className='row'>
                                    <div className='col-2'><i className="bi bi-person-x"></i></div>
                                    <div className='col-8'>Remove Profile</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* otp modal */}
                <div className="modal" id="myModal3">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title "><p className='text-center ms-5 ps-5'>Confirm your number </p> </h4>
                                <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                            </div>
                            <div className="modal-body">
                                <p className='text-center mb-0'>Enter the code just send to</p>
                                <p className='text-center mt-0'>{profile.mobile_number}</p>
                                <div className='d-flex justify-content-center align-items-center'>
                                    <input className='otp-input me-3 otp-alignment text-center' ref={inputRef4} maxLength="1" onChange={(e) => { setVerifyOtp({ ...verifyOtp, input: e.target.value }); Onfocus(e.target.value);; setOtpfilled(false) }} name="input" value={verifyOtp.input} />
                                    <input className='otp-input me-3 otp-alignment text-center' ref={inputRef5} maxLength="1" onChange={(e) => { setVerifyOtp({ ...verifyOtp, input1: e.target.value }); Onfocus1(e.target.value);; setOtpfilled(false) }} name="input1" value={verifyOtp.input1} />
                                    <input className='otp-input me-3 otp-alignment text-center' ref={inputRef6} maxLength="1" onChange={(e) => { setVerifyOtp({ ...verifyOtp, input2: e.target.value }); Onfocus2(e.target.value);; setOtpfilled(false) }} name="input2" value={verifyOtp.input2} />
                                    <input className='otp-input me-3 otp-alignment text-center' ref={inputRef7} maxLength="1" onChange={(e) => { setOtpfilled(true); setVerifyOtp({ ...verifyOtp, input3: e.target.value }); Onfocus3(e.target.value); }} name="input3" value={verifyOtp.input3} />
                                </div>
                                {
                                    otpfilled ? <i className="bi bi-check-lg col-3 border border-2 ms-auto bg-success text-center d-flex justify-content-center align-items-center mt-2"></i> : ''
                                }
                                <button className='btn' data-bs-dismiss="modal" onClick={VeryfyingOtp}>Verify Otp</button>
                                <p className='text-center mt-2'>Didn't get a code <b onclick={SendagainOtp}>Send again</b></p>
                                <p className='text-center'>   <a className='text-center mt-2' href="gdfg">Login in another way</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* otp successfully modal  */}
            </div>
        </>
    )
}

export default PersonalInformation;