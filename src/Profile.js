
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editUser, fetchUsers } from "./userSlice";
import "./Profile.css"
const Profile = () => {
    const dispatch = useDispatch()
    const { uuid } = useParams();

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);
    
    const users = useSelector((state) => state.users.users)
    const detailUser = users.find((user) => user.uuid === uuid);

    const imageUrl = detailUser.image_slug || "https://static.thenounproject.com/png/5034901-200.png";

    return (
        <div className="profile-user">
            <h3>PROFILE</h3>
            <div className="sub-heading">View {detailUser.username}'s profile</div>
            <div className="detail-user">
                <img className="user-avatar" src={imageUrl} />
                <div className="user-info">
                    <div className="user-id">ID: {detailUser.id}</div>
                    <div className="user-fullname">{detailUser.fullname}</div>
                    <div className="user-email">{detailUser.email}</div>
                    <div className="user-date-join">{detailUser.roleObj?.title}</div>
                </div>
            </div>
        </div>
    )
}

export default Profile;