import React, { useState } from "react";
let Sagar = () => {
    let [start, setstart] = useState(
        {
            user: {
                username: '',
                email: '',
                number: '',
                adress: '',
                designation: '',
                bio: '',
                terms: false
            }
        }
    );
    let updateInput = (e) => {
        setstart(
            {
                user: {
                    ...user,
                    [e.target.name]: e.target.value
                }
            }
        )
    }
    let updateCheck = (e) => {
        setstart(
            {
                user: {
                    ...user,
                    [e.target.name]: e.target.checked
                }
            }
        )
    }

    let submitRegister = (e) => {
        e.preventDefault();

        console.log(start.user)


    }
    let { user } = start;
    return (
        <React.Fragment>
            <pre>{JSON.stringify(user)}</pre>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header bg-warning text-center text-white">
                                <h2>Form</h2>
                            </div>
                            <div className="card-body bg-light">
                                <form onSubmit={submitRegister}>
                                    <input type="text" placeholder="Enter your name" className="form-control mb-2" name="username" value={user.username}
                                        onChange={updateInput} />
                                    <input type="number" placeholder="Enter your number" className="form-control mb-2" name="number" value={user.number}
                                        onChange={updateInput} />
                                    <input type="email" placeholder="Email here" className="form-control mb-2" name="email" value={user.email}
                                        onChange={updateInput} />
                                    <input type="text" placeholder="Adress here" className="form-control mb-2" name="adress" value={user.adress}
                                        onChange={updateInput} />
                                    <div className="form-control mb-2" >
                                        <select className="form-control " name="designation" value={user.designation} onChange={updateInput} >
                                            <option>Select Designation</option>
                                            <option>Team Lead</option>
                                            <option>Manager</option>
                                            <option>Developer</option>

                                        </select>
                                    </div>
                                    <div className="form-group mb-2">
                                        <textarea className="form-control" row={2} placeholder="your text here" name="bio"
                                            value={user.bio} onChange={updateInput}>

                                        </textarea>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input" type="checkbox" value=""
                                            id="flexCheckDefault" name='terms' onChange={updateCheck} />
                                        <label className="form-check-label">Accept Terms & Conditions</label>
                                    </div>
                                    <div className="form-group mb-2">
                                        <input type="submit" className="btn btn-outline-dark btn-md" />


                                    </div>
                                </form>

                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment >
    )
}
export default Sagar;