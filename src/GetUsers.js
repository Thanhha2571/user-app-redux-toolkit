import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import UserItem from "./UserItem";
import { fetchUsers } from "./userSlice";
import "./GetUsers.css";

const GetUsers = () => {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers(input));
  }, [dispatch,input]);

  const userList = useSelector((state) => state.users.users);

  const navigate = useNavigate();

  const handleAddUser = () => {
    navigate("/addUser");
  };

  return (
    <div className="all-users-page">
      <h2 className="heading">LIST OF USERS</h2>
      <div className="button-site">
        <div className="search-site">
          <svg style={{ width: '40px', height: '40px' }} className="MuiSvgIcon-root jss580" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>
          <input
            value={input}
            type="text"
            className="input-search"
            placeholder="Enter something..."
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <button onClick={handleAddUser} className="add-btn">
          <div>Create User</div>
        </button>
      </div>
      <div className="list-users">
        {userList?.map(({ image_slug, fullname, email, uuid, roleObj }) => (
          <UserItem
            key={uuid}
            roleObj={roleObj}
            img={image_slug}
            fullname={fullname}
            email={email}
            uuid={uuid}
          />
        ))}
      </div>
    </div>
  );
};

export default GetUsers;