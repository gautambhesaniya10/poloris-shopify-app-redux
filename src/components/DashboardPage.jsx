import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router';
import { getApi, delUserApi, editUserApi } from '../redux/action';
import { useDispatch, useSelector } from 'react-redux'


const DashboardPage = () => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { state } = useLocation();

  let tokanData = localStorage.getItem('token')
  const [editData, setEditData] = useState({
    email: "",
    password: state.password
  });
  const [email, setEmail] = useState(tokanData);



  const logoutHandle = () => {
    localStorage.clear('token');
    navigate("/");
  }

  const deleteHendler = () => {
    dispatch(delUserApi(state.id))
    localStorage.clear('token');
    setTimeout(() => {
      navigate("/");
    }, 1000);
  }

  const editHendler = () => {
    setEditData({ ...editData, email: tokanData })
  }

  const saveEditHendler = async() => {
   let data = await dispatch(editUserApi(state.id, editData))
   if (data) {
    setEmail(editData.email)
   }
  }

  const textChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value })
  }

  return (
    <>
      <div className='mainLoginDiv'>
        {/* {
          editData.email == "" ? <h1>Welcome -  {state.email}</h1> : <h1>Welcome -  {editData.email}</h1>
        }   */}
        <h1>Welcome -  {email}</h1>
        <br />
        <button type="button" onClick={editHendler} className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Edit
        </button>
        <br />
        <button onClick={deleteHendler}>Delete</button>
        <br />
        <button onClick={logoutHandle}>Logout</button>
      </div>


      {/* <!-- Button trigger modal --> */}


      {/* <!-- Modal --> */}
      <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Edit Email</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label className="form-label">Edit User Name</label>
                <input type="text" name='email' value={editData.email} onChange={(e) => textChange(e)} className="form-control" placeholder="Please Enter...." />
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" onClick={saveEditHendler} className="btn btn-primary" data-bs-dismiss="modal">Save Changes</button>
              {/* <button type="button" className="btn btn-primary">Save changes</button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DashboardPage