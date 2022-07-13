import React from 'react'
import './SignIn.css'

function Validation() {
    const Validation1 = () => {
        let emailvalue = document.getElementById("emailvalid").value;
        var reg = /^[a-z0-9._$]{5,}@[a-z]{3,}[.]{1}[a-z]{3,}$/;
        if (reg.test(emailvalue)) {
            document.getElementById("span1").innerHTML = "your email is valid";
            document.getElementById("span1").style.color = "green";
        }
        else {

            document.getElementById("span1").innerHTML = "your email is invalid";
            document.getElementById("span1").style.color = "red";

        }

    }



    return (
        <div>
            <form onSubmit={(e) => { e.preventDefault(); Validation1() }}>
                <div className="position-relative mb-1 mt-3">
                    <input type="email" className="form-control" id="emailvalid" placeholder="Email" name="email" />
                    <i className="position bi bi-envelope"></i>
                    <span className='text-start' id="span1">hlo</span>
                </div>
                <input type="submit" value="submit" />
            </form >
        </div>
    )
}

export default Validation;