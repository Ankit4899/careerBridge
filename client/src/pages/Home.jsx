import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import Login from './Login'
const Home = () => {
  return (
    <>
    <div>
        <h1>Welcome to careerBridge! Let's Kill the gAp</h1>
        <img src='../public/career.avif' className='careerImg'/>
    </div>
    {/* <Link to="/signup">Sign up</Link> */}
    <Login />
    </>
  )
}

export default Home