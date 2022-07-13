import React from 'react'

function Footer() {
    return (

        <div className="container-fluid mt-5 d-flex justify-content-center align-items-end" style={{ height: "400px" }} >
            <div className="bg-danger mt-5 text-center d-flex justify-content-center align-items-center w-100" style={{ height: "250px" }}>
                <div>
                    <div className="row">
                        <div className="col-2">
                            <i className="bi bi-facebook"></i>
                        </div>
                        <div className="col-2">
                            <i className="bi bi-instagram"></i>
                        </div>
                        <div className="col-2">
                            <i className="bi bi-twitter"></i>
                        </div>
                        <div className="col-2">
                            <i className="bi bi-whatsapp"></i>
                        </div>
                    </div>
                    <div className="row text-white mt-3">
                        <div className="col-12 text-center"> @copywrite 2022 personal website for business </div>
                    </div>
                    <div className="row text-white mt-1">
                        <p className="col-6 m-auto">terms and condition</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Footer;