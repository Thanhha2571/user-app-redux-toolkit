import { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetailUser, editUser, fetchUsers } from "./userSlice";

const EditUser = () => {
    const { uuid } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [fullname, setFullname] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");


    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);
    const users = useSelector((state) => state.users.users)
    const userEdit = users.find((user) => user.uuid === uuid);

    useEffect(() => {
        if (userEdit) {
            setFullname(userEdit.fullname);
            setEmail(userEdit.email);
        }
    }, [userEdit]);

    const handleEditUser = async () => {
        try {
          await dispatch(
            editUser({uuid, fullname, email, password, confirmPassword })
          );
          navigate("/all-users");
        } catch (error) {
          console.error("Error updating user:", error);
        }
      };
    const handleSubmit = (event) => {
        event.preventDefault();
        handleEditUser()
    }
    return (
        <div>
            <h1 className="heading">Edit User</h1>
            <form className="form" onSubmit={handleSubmit}>
                <label className="label">
                    Role:
                    <input
                        className="input-role"
                        type="text"
                        value={userEdit?.roleObj.title || ""}
                        readOnly
                    />
                </label>
                <br />
                <label className="label">
                    Fullname:
                    <input
                        placeholder={userEdit?.fullname}
                        className="input"
                        type="text"
                        value={fullname}
                        onChange={(e) => setFullname(e.target.value)}
                    />
                </label>
                <br />
                <label className="label">
                    Username:
                    <input
                        value={userEdit?.username}
                        className="input-username"
                        type="text"
                        readOnly
                    />
                </label>
                <br />
                <label className="label">
                    Email:
                    <input
                        placeholder={userEdit?.email}
                        className="input"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                    />
                </label>
                <br />
                <button className="submit-btn" type="submit">
                    Submit
                </button>
            </form>
        </div>
    )
}

export default EditUser

