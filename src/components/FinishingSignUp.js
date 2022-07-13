import React from 'react';
import img from './logo.png';

function FinishingSignUp() {
    
    return (

        <div>
            {/* <button className='btn btn-primary mb-5' data-bs-toggle="modal" data-bs-target="#myModal5">check it</button> */}
            {/* <div className="modal" id="myModal5">
                <div className="modal-dialog"> */}
            <div className="container d-flex justify-content-center align-items-center">
                <div className="row" style={{ height: "400px", width: "500px" }}>
                    <div className='col-12'>
                        <img src={img} alt="" />
                    </div>
                    <div className=' row mt-4'>
                        <div type="button" className=" col-3 mt-2 me-2" data-bs-dismiss="modal"><i className="bi bi-arrow-left" style={{ width: "150px" }} data-bs-dismiss="modal"></i></div>
                        <div className='col-6 ms-0'><h4>Finish Signing Up</h4></div>
                    </div>
                    <p className='mt-3'>  <smaill className="text-danger mt-5">step 3 of 3</smaill></p>
                    <div className=' col-4 m-auto rounded-pill' style={{ width: "80px", height: "80px" }}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpz344Pw2sEKPEawcgssx0AMumYOI-YsSm2Q&usqp=CAU" className='rounded-pill' alt="" width="80px" height="80px" />
                    </div>
                    <p className='mt-1'><small><b>Upload your picture</b></small></p>
                    <button type="button" className="btn btn-danger w-100 rounded mb-1" data-bs-dismiss="modal">Sign-Up</button>
                </div>
            </div>
        </div>
        //     </div>

        // </div>
    )
}

export default FinishingSignUp