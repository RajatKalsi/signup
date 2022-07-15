import React from 'react'
import { Link } from 'react-router-dom';

function OtpVerifiedModal() {
    return (
        <div className='row'>
            <div className="modal-content d-flex justify-content-center align-items-cente" style={{ height: "650px", width: "1340px" }}>
                <div className='r' >
                    <div className="modal-body " style={{ height: "400px", width: "1190px" }}>
                        <h4 className="modal-title mb-4">Verifying Successfully</h4>
                        <img src={"https://www.shareicon.net/data/256x256/2016/08/18/810022_success_512x512.png"} alt="" />
                        <p className='text-danger'></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OtpVerifiedModal;