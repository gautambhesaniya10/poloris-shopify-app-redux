import { GET_DATA, ADD_USER } from './type';
import axios from "axios";
import {  message } from 'antd';



export const getData = (users) => {
    return{
        type : GET_DATA,
        payload : users
    }
}

export const addUser = (user) => {
    return{
        type : ADD_USER,
        payload : user
    }
}


export const getApi = () => {
    return async(dispatch) => {
        await axios.get(`http://localhost:3001/users`).then((res) => {
            let data = res.data;
            dispatch(getData(data));
            return res;
        })
    }
}

export const postApi = (value) => {
    return async (dispatch) => {
        let apiData = await axios.post('http://localhost:3001/users' , value).then((response) => {
            message.success("Sucessfully Register !")
            let data =  response.data;
            dispatch(addUser(data));
            return data
        }).catch((error) => {
            console.log("error",error);
        })
        return apiData
    }
}
