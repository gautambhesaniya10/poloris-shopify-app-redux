import React, { useEffect, useState } from 'react'
import logo from "../assets/logo.png";
import { Button, Form, Image, Input,  message } from 'antd';
import '../assets/css/LoginPage.css'
import { useNavigate } from 'react-router-dom';
import { getApi, postApi } from '../redux/action';
import { useDispatch, useSelector } from 'react-redux'


const LoginPage = (props) => {

    const [page, setPage] = useState(0);
    const [form] = Form.useForm();
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const getUser = useSelector(state => state.user)


    const handleSubmitForm = async (value) => {
        if (value) {
            let getAlluser = getUser.find(item => item.email === value.email);
            if (!getAlluser) {     
                let data = await dispatch(postApi(value));
                if (data) {
                    // nextPage();
                    let token = data.email;
                    localStorage.setItem('token', token);
                    setTimeout(() => {
                        navigate("/dashboard", { state: data })
                    }, 1000);
                } else {
                    message.error("Something went wrong !")
                }
            }else{
                message.error("User already axist !")
            }
        }
    }
    useEffect(() => {
        dispatch(getApi())
    }, []);

    const handleLoginSubmit = (value) => {
        if (value) {
            let data = getUser.find(item => item.email === value.email);
            if (!data) {
                message.error("Please Enter Correct Email !")
            } else if (data.password !== value.password) {
                message.error("Please Enter Correct Password !")
            } else {
                localStorage.setItem('token', data.email);
                message.success("Sucessfully Login !")
                setTimeout(() => {
                    navigate("/dashboard", { state: data })
                }, 1000);
            }
        }
    }

    const nextPage = () => {
        setPage(page + 1);
    }

    switch (page) {
        case 0:
            return (
                <>
                    <div className='mainLoginDiv'>
                        <Image
                            preview={false}
                            src={logo}
                        />
                        {/* {component === "login" ?  <h1 className='loginHeading'>Login</h1> : <h1 className='loginHeading'>Welcome</h1>} */}
                        <h1 className='loginHeading'>{props.title}</h1>
                        <p>Be a part of Downtown.club, get discovered by amazing folks!</p>
                        <div>
                            <Form
                                form={form}
                                name="register"
                                onFinish={
                                    props.component === "login" ? handleLoginSubmit : handleSubmitForm
                                }
                            >
                                <div style={{ marginTop: "10%" }}>
                                    <h2>E-mail *</h2>
                                    <Form.Item
                                        name="email"
                                        label=""
                                        rules={[
                                            {
                                                type: 'email',
                                                message: 'The input is not valid E-mail!',
                                            },
                                            {
                                                required: true,
                                                message: 'Please input your E-mail!',
                                            },
                                        ]}
                                    >
                                        <Input placeholder="Enter Your e-mail" />
                                    </Form.Item>
                                </div>
                                <div style={{ marginTop: "10%" }}>
                                    <h2>Password *</h2>
                                    <Form.Item
                                        name="password"
                                        label=""
                                        rules={[
                                            // {
                                            //     pattern: new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{0,}$'),
                                            //     message: 'Password must contain at least one lowercase letter, uppercase letter, number, and special character'
                                            // },
                                            {
                                                required: true,
                                                message: 'Please input your password!',
                                            },
                                        ]}
                                        hasFeedback
                                    >
                                        <Input.Password placeholder="Enter Your Password" />
                                    </Form.Item>
                                </div>
                                <Form.Item className='btnClass'>
                                    <Button type="" htmlType="submit">
                                        Connect
                                    </Button>
                                </Form.Item>
                                <Form.Item className='btnClass'>
                                    {
                                        props.component === "login" ? <Button onClick={() => navigate("/signup")} type="link">SignUp ?</Button> : <Button onClick={() => navigate("/login")} type="link">Login ?</Button>
                                    }
                                </Form.Item>
                            </Form>
                        </div>
                    </div>
                </>
            )
        case 1:
            return (
                <>
                    <div className='secondPage'>
                        <h1>Hello This is Second page</h1>
                    </div>
                </>
            )
        default:
            break;
    }
}

export default LoginPage