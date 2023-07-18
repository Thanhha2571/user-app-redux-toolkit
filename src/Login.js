import { Button, Checkbox, Form, Input } from "antd";
import { useEffect, useState } from "react"
import { axiosInstance } from "./services/httpServices";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "./userSlice";

const Login = () => {
    const [success, setSuccess] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const onFinish = async (values) => {
        console.log("Success:", values);
        const { data } = await axiosInstance.post("api/auth/login", values)
        if (data.accessToken) {
            localStorage.setItem('token', data.accessToken)
            setSuccess(true)
        }
        console.log("Data", data);
    };
    const onFinishFailed = (errorInfo) => {

        console.log("Failed:", errorInfo);
    };
    useEffect(() => {
        if (!success) return;
        setSuccess(false);
        navigate("/all-users");
    }, [success]);
    return (
        <div>
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                style={{
                    maxWidth: 600,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: "Please input your username!",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: "Please input your password!",
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
};

export default Login;