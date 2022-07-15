import React, { useState } from 'react'
import img3 from '../images/off.png'
import img5 from '../images/on.png'
import './SignIn.css';
function Notifications() {
    const [shownotification, setShownotification] = useState(true)

    const Notificationshow = () => {
        shownotification ? setShownotification(false) : setShownotification(true)
    }
    const Notify = () => {
        let permission = Notification.permission;
        if (permission === "granted") {
            showNotification();
        } else if (permission === "default") {
            requestAndShowPermission();
        } else {
            alert("Use normal alert");
        }
        function requestAndShowPermission() {
            Notification.requestPermission(function (permission) {
                if (permission === "granted") {
                    showNotification();
                }
            });
        }
        function showNotification() {
            let title = "This website is more useful for you";
            let icon = 'https://homepages.cae.wisc.edu/~ece533/images/zelda.png';
            let body = "Allow to send notification send by this website";

            let notification = new Notification(title, { body, icon });

            notification.onclick = () => {
                notification.close();
                window.parent.focus();
            }
        }
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
                    <p className="ms-2">Notification settings</p>
                </div>
                <div className='row'>
                    <div className='col-3 me-auto'>
                        <h4 className='' >Notification Settings</h4>
                    </div>
                    <div className='col-3 mt-2 me-5'>
                        {
                            shownotification ? <i><img src={img3} alt="" height="30px" className='notification' onClick={() => { Notificationshow(); Notify() }} /></i>
                                : <i><img src={img5} alt="" height="30px" className='notification' onClick={Notificationshow} /></i>
                        }
                    </div>
                </div>
                {/* modal  */}
            </div>
            <div className="modal" id="myModal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-body">
                            Are you ready to allow this app send you notification
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Allow</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Notifications;