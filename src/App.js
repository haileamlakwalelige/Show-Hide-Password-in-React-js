import React,{useState} from 'react';
import Login from './passwordOne/Login';
import './App.css';
import Facebook from './facebook/Facebook';

export default function App() {

  const [show, setShow]=useState(false);
  const handleShow=()=>{
    setShow(!show);
  }
  return (
    <>
    {show ? <Facebook /> : <Login />}
    <div className="app">
      <button onClick={handleShow} className="change">Change Page</button>
    </div>
    </>
  )
}