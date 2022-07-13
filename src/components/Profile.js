import './index.css';
import img1 from '../images/personalinfo.png';
import img2 from '../images/changepassword.png';
import img4 from '../images/notification.png'
import { Link } from 'react-router-dom';

const Profile = () => {
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

                <div className='container mt-5'>
                    <h3>My Account</h3>
                    <div className='row mt-5 '>
                        <div className='col-4 shadow m-auto' style={{ width: "350px" }}>
                            <Link to="/personalinformation" className='decoration'>
                                <div className="row mt-4">
                                    <div className="col-3 ms-2">
                                        <img src={img1} alt="" height="50px" width="50px" />
                                    </div>
                                    <div className="col-6 mt-3">
                                        <p>Personal info</p>
                                    </div>
                                    <div className="col-2 mt-3 me-3">
                                        <i className="bi bi-chevron-compact-right"></i>
                                    </div>
                                    <p className="mt-4 mb-5 text-success">Personal details</p>
                                </div>
                            </Link>
                        </div>
                        <div className='col-4 shadow m-auto' style={{ width: "350px" }}>
                            <Link to="/changepassword" className='decoration'>
                                <div className="row mt-4">
                                    <div className="col-3 ms-2">
                                        <img src={img2} alt="" height="50px" width="50px" />
                                    </div>
                                    <div className="col-7 mt-3">
                                        <p>Change password</p>
                                    </div>
                                    <div className="col-1 mt-3 me-2">
                                        <i className="bi bi-chevron-compact-right"></i>
                                    </div>
                                    <p className="mt-4 mb-5 text-success">Personal details</p>
                                </div>
                            </Link>
                        </div>
                        <div className='col-4 shadow m-auto' style={{ width: "350px" }}>
                            <Link to="/notification" className='decoration'>
                                <div className="row mt-4">
                                    <div className="col-3 ms-2">
                                        <img src={img4} alt="" height="50px" width="50px" />
                                    </div>
                                    <div className="col-6 mt-3">
                                        <p>Notification settings</p>
                                    </div>
                                    <div className="col-2 mt-3 me-2">
                                        <i className="bi bi-chevron-compact-right"></i>
                                    </div>
                                    <p className="mt-4 mb-5 text-success">Personal details</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="row shadow m-4">
                        <div className="col-3 p-4 ">
                            Log out
                        </div>
                        <div className="col-1 p-4 ms-auto">
                            <i className="bi bi-shield-lock-fill"></i>
                        </div>


                    </div>
                </div>

            </div>

        </>
    )
}
export default Profile;

