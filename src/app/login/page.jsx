import React from 'react'

export default function page() {
    return (
        <div>
            <div className="page-content bg-light">
                <section className="px-3">
                    <div className="row justify-content-md-center">
                        <div className="col-xxl-6 col-xl-6 col-lg-6 end-side-content justify-content-center">
                            <div className="login-area">
                                <h2 className="text-secondary text-center">
                                    Sign Up to view your profile
                                </h2>
                                <form>
                                    <div className="m-b30">
                                        <label className="label-title">
                                            Email Address/Phone Number
                                        </label>
                                        <input
                                            name="email_or_phone"
                                            required=""
                                            className="form-control"
                                            placeholder="Email Address Or Phone number"
                                            type="text"
                                        />
                                    </div>
                                    <div className="text-center m-b30">
                                        <button name="submit" type="submit" value="submit" className="btn btn-secondary btnhover text-uppercase me-2 sign-btn w-100">SIGNUP / LOGIN   </button>

                                    </div>
                                    <div className="form-row m-b30">
                                        <div className="form-group">
                                            <a className="btn btn-outline-secondary btnhover w-100" href="forget-password.html">
                                                <img
                                                    src="https://www.gdsons.co.in/public/frontend/assets/gd-img/google.png"
                                                    className="blur-up lazyloaded googlelogo"
                                                    alt="Google"
                                                    style={{ marginRight: '10px' }}
                                                />
                                                Login to Google
                                            </a>
                                        </div>
                                    </div>


                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </div>
    )
}
