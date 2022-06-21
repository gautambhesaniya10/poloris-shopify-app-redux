import React from 'react'
import { useNavigate , useLocation } from 'react-router';



const DashboardPage = () => {

const navigate = useNavigate();
const {state} = useLocation();

  const logoutHandle = () => {
    localStorage.clear('token');
    navigate("/");
  }

  return (
    <>
      <div className='mainLoginDiv'>
        <h1>Welcome -  {state.email}</h1>
        <button onClick={logoutHandle}>Logout</button>
      </div>
    </>
  )
}

export default DashboardPage