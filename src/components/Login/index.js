import React from 'react'
import './style.css'

function Login() {
    return (
                <div className="card">
                <article className="card-body mx-auto">
                    <h4 className="card-title text-center mb-4 mt-1">Sign in</h4>
                    <hr className="mb-4" />
                    <p id ="loginMsg" className="text-danger text-center d-none" ></p>
                    <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"> <i className="fa fa-user"></i> </span>
                        </div>
                        <input  className="form-control" id="userId" placeholder="login ID" onclick="removeErroeMsg()" type="email" />
                    </div>
                    </div>
                    <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
                        </div>
                        <input className="form-control" id="password" placeholder="Password"onclick="removeErroeMsg()" type="password" />
                    </div> 
                    </div>
                    <div className="form-group">
                    <button type="button" className="btn btn-primary btn-block" onclick="checkLogin()"> Login  </button>
                    </div>
                    <p className="text-center"><a href="#" className="btn">Forgot password?</a></p>
                </article>
                </div>

    )
}

export default Login
