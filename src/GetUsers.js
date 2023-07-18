import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import UserItem from "./UserItem";
import { fetchUsers } from "./userSlice";
import "./GetUsers.css";

const GetUsers = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const userList = useSelector((state) => state.users.users);

  const navigate = useNavigate();

  const handleAddUser = () => {
    navigate("/addUser");
  };

  return (
    <div className="all-users-page">
      <h2 className="heading">LIST OF USERS</h2>
      <div className="button-site">
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