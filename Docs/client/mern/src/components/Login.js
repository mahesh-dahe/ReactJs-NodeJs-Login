import {useState} from 'react';
import axios from 'axios'
function login(){
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    function handleSubmit(event){
       event.preventDefault();
       axios.post('http://localhost:8081/login',{email,password})
       .then(res=>console.log(res))
       .catch(err=>console.log(err));
    }
    return(
        <div className="d-flex justify-content-center align-items-center bg-primary">
            <div className="p=3 bg-white w-25">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder="Enter email" className="control"
                        onchange={e=>setEmail(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="pasword" >pasword</label>
                        <input type="password" placeholder="Enter password" className="form-control"
                         onchange={e=>setPassword(e.target.value)}/>
                    </div>
                    <button className="btn btn-success">Login</button>
                </form>
            </div>
        </div>
    )
};
export default login;