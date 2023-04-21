import React,{useState} from 'react';
import "./facebook.css";
import {BiHide,BiShow} from 'react-icons/bi';

const Facebook =()=>{
    const [show, setShow]=useState(false);

    const handleShow=()=>{
        setShow(!show);
    }

    return(
        <div className='container'>
            <div className="collect">
                <div className="one">
                <h1>facebook</h1>
                <p>connect with friends and the <br /> 
                world around you  on facebook</p>
                </div>
                <div className="two">
                    <form className="forms">
                        <div className='two-one'>
                            <input type="email"  placeholder="example@gmail.com" className="input"/>
                            <div className="dis">
                            <input type={show ? "text":"password"} placeholder='..........' className="inputs input"/>
                            <div className="font" onClick={handleShow}>{show ?  <BiHide /> :  <BiShow /> }</div>                          
                            </div>
                            <button className="log">Log In</button>
                            <p className='forget'><a href="/">Forget password?</a></p>
                            <button className="create">Create New Account</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default Facebook;