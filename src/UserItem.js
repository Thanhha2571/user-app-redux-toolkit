import "./UserItem.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";

const UserItem = (props) => {
    const { img, fullname, email, uuid, roleObj } = props;
    // console.log(props);
    const navigate = useNavigate();
    const [openMenu, setOpenMenu] = useState(null);

    const handleMenu = (uuid) => {
        setOpenMenu(uuid);
    };

    const handleEdit = (uuid) => {
        navigate(`/edit/${uuid}`);
        setOpenMenu(false);
    };

    const handleDelete = (uuid) => {
        navigate(`/deleteUser/${uuid}`);
        setOpenMenu(false);
    };

    // Set a default image link if img is null
    const imageUrl = img || "https://static.thenounproject.com/png/5034901-200.png";

    return (
        <div className="user-item">
            <svg
                onClick={() => handleMenu(uuid)}
                style={{
                    width: "20px",
                    height: "20px",
                    cursor: "pointer",
                    marginLeft: "350px",
                }}
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="ellipsis-vertical"
                class="svg-inline--fa fa-ellipsis-vertical "
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 128 512"
            >
                <path
                    fill="currentColor"
                    d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"
                ></path>
            </svg>
            {openMenu === uuid && (
                <div className="dropdown-menu">
                    <button className="edit-btn">
                        <svg
                            style={{
                                width: "10px",
                                height: "10px",
                                cursor: "pointer",
                                marginLeft: "25px",
                            }}
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="pencil"
                            class="svg-inline--fa fa-pencil "
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                        >
                            <path
                                fill="currentColor"
                                d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"
                            ></path>
                        </svg>
                        <span
                            onClick={() => handleEdit(uuid)}
                            className="edit-text"
                        >
                            Edit
                        </span>
                    </button>
                    <button className="delete-btn">
                        <svg
                            style={{
                                width: "10px",
                                height: "10px",
                                marginLeft: "25px",
                            }}
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="far"
                            data-icon="trash-can"
                            class="svg-inline--fa fa-trash-can "
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                        >
                            <path
                                fill="currentColor"
                                d="M170.5 51.6L151.5 80h145l-19-28.4c-1.5-2.2-4-3.6-6.7-3.6H177.1c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80H368h48 8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8V432c0 44.2-35.8 80-80 80H112c-44.2 0-80-35.8-80-80V128H24c-13.3 0-24-10.7-24-24S10.7 80 24 80h8H80 93.8l36.7-55.1C140.9 9.4 158.4 0 177.1 0h93.7c18.7 0 36.2 9.4 46.6 24.9zM80 128V432c0 17.7 14.3 32 32 32H336c17.7 0 32-14.3 32-32V128H80zm80 64V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16z"
                            ></path>
                        </svg>
                        <span
                            onClick={() => handleDelete(uuid)}
                            className="edit-text"
                        >
                            Delete
                        </span>
                    </button>
                </div>
            )}
            <Link to={`viewprofile/${uuid}`} className="info-user">
                <img className="img" src={imageUrl} alt="avatar" />
                <h2 className="user-item-fullname">{fullname}</h2>
            </Link>
            <p className="user-item-email">{roleObj?.title}</p>
        </div>
    );
};

export default UserItem;