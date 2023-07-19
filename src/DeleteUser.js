import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteUser } from "./userSlice";

const DeleteUser = () => {
    const { uuid } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteUser(uuid))
            .then(() => {
                navigate("/all-users");
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        handleDelete();
    };
    return (
        <div>
            <h1 className="heading">DELETE USER</h1>
            <form className="form" onSubmit={handleSubmit}>
                <label className="label">
                    User's Uuid:
                    <input
                        placeholder="Enter uuid"
                        className="input"
                        type="text"
                        value={uuid}
                        readOnly
                    />
                </label>
                <br />
                <button type="submit" className="submit-btn">
                    Submit
                </button>
            </form>
        </div>
    );
};


export default DeleteUser;


// import { axiosInstance } from "./services/httpServices";
// import { useParams, useNavigate } from "react-router-dom";

// const DeleteUser = () => {
//   const { uuid } = useParams();
//   const navigate = useNavigate();
//   const handleDelete = async () => {
//     try {
//       const response = await axiosInstance.delete("api/user/delete", {
//         data: { uuid },
//       });
//       console.log(response);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     handleDelete();
//     navigate("/all-users");
//   };

//   return (
//     <div>
//       <h1 className="heading">DELETE USER</h1>
//       <form className="form" onSubmit={handleSubmit}>
//         <label className="label">
//           User's Uuid:
//           <input
//             placeholder="Enter uuid"
//             className="input"
//             type="text"
//             value={uuid}
//           />
//         </label>
//         <br />
//         <button type="submit" className="submit-btn">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default DeleteUser;