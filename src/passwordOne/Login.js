import React,{useState} from 'react';
import './pass.css';

const Login=()=>{
    const [show, setShow]=useState(false);
    const handlePassword =()=>{
        setShow(!show);
    }
    return(
        <>
        <div className="login">
        <h1 className="h1 text-3xl font-bold underline">
     Show and Hide Password
    </h1>
        <div className="bg-gray-700 whole">
            <div className="bg-gray-700">
            <h1 className="text-center justify-center items-center text-3xl">First Page Login</h1>
                <form>
                <div className="text-center justify-center items-center flex flex-col inputso">
                    <input type="text" placeholder="Full Name" className="border-none rounded border-gray-500 bg-green m-4 inputo"/>
                    <input type="email" placeholder="Email"className="border-none rounded border-gray-500 bg-green inputo"/>
                    <input type={show ? "text":"password"} placeholder="Password" className="border-none rounded border-gray-500 bg-green inputo"/>
                    <label onClick={handlePassword} className="labels">{show ? "Hide":"Show"}</label>
                    <button>Submit</button>
                    </div>
                </form>
            </div>
        </div>
        </div>
        </>
    );
}

export default Login;