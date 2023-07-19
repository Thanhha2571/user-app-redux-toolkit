import { useState, useEffect } from "react";
// import axiosInstance, { post } from "./http"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createUser } from "./userSlice";
import "./CreateUser.css"
const CreateUser = (props) => {
    const [fullname, setFullname] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [imageSlug, setImageSlug] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    // const [success, setSuccess] = useState(false)

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleCreateUser = async () => {
        try {
            const userData = {
                fullname,
                username,
                email,
                password,
                confirm_password: confirmPassword,
                image_slug: imageSlug,
            }

            await dispatch(createUser(userData))


            setFullname("");
            setUsername("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");
            setImageSlug("");
            setErrorMessage("");
        } catch (error) {
            console.error("Failed:", error);
            if (error.response && error.response.data && error.response.data.message) {
                setErrorMessage(error.response.data.message);
            } else {
                setErrorMessage("An error occurred. Please try again later.");
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!fullname || !username || !email || !password || !confirmPassword) {
            setErrorMessage("Please fill in all fields.");
            return;
        }

        if (password !== confirmPassword) {
            setErrorMessage("Passwords do not match.");
            return;
        }

        handleCreateUser();
        navigate("/all-users")
    };

    return (
        <div>
            <h1 className="heading">PERSONAL DETAILS</h1>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <form className="form" onSubmit={handleSubmit}>
                <label className="label">
                    Fullname:
                    <input
                        className="input"
                        type="text"
                        value={fullname}
                        onChange={(e) => setFullname(e.target.value)}
                        required
                    />
                </label>
                <br />
                <label className="label">
                    Username:
                    <input
                        className="input"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </label>
                <br />
                <label className="label">
                    Email:
                    <input
                        className="input"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </label>
                <br />
                <label className="label">
                    Password:
                    <input
                        className="input"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </label>
                <br />
                <label className="label">
                    Confirm Password:
                    <input
                        className="input"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </label>
                <br />
                <label className="label">
                    Link Image:
                    <input
                        className="input"
                        type="text"
                        value={imageSlug}
                        onChange={(e) => setImageSlug(e.target.value)}
                    />
                </label>
                <br />
                <button className="submit-btn" type="submit">Submit</button>
            </form>
        </div>
    );
};

export default CreateUser;