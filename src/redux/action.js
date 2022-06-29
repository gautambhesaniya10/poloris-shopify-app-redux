import { GET_DATA, ADD_USER, DELETE_USER, EDIT_USER } from './type';
import axios from "axios";
import { message } from 'antd';



export const getData = (users) => {
    return {
        type: GET_DATA,
        payload: users
    }
}

export const addUser = (user) => {
    return {
        type: ADD_USER,
        payload: user
    }
}

export const deleteUser = (userID) => {
    return {
        type: DELETE_USER,
        payload: userID
    }
}

export const editUser = (data) => {
    return {
        type: EDIT_USER,
        payload: data
    }
}


export const getApi = () => {
    return async (dispatch) => {
        await axios.get(`http://localhost:3001/users`).then((res) => {
            let data = res.data;
            dispatch(getData(data));
            return res;
        })
    }
}

export const postApi = (value) => {
    return async (dispatch) => {
        let apiData = await axios.post('http://localhost:3001/users', value).then((response) => {
            message.success("Sucessfully Register !")
            let data = response.data;
            dispatch(addUser(data));
            return data
        }).catch((error) => {
            console.log("error", error);
        })
        return apiData
    }
}


export const delUserApi = (userId) => {
    return async (dispatch) => {
        let delUser = await axios.delete(`http://localhost:3001/users/${userId}`).then((res) => {
            message.success("User Sucessfully Deleted !")
            let data = res.data;
            dispatch(deleteUser(data))
            return data;
        }).catch((error) => {
            console.log("error", error);
        })
        return delUser
    }
}

export const editUserApi = (userId, data) => {
    return (dispatch) => {
        let edit = axios.put(`http://localhost:3001/users/${userId}`, data).then((res) => {
            message.success("User Edit Sucessfully !")
            let editData = res.data;
            localStorage.setItem('token', editData.email);
            dispatch(editUser(editData))
            return editData;
        }).catch((error) => {
            console.log("error", error);
        })
        return edit
    }
}