
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { useState, useEffect } from "react";
// import axiosInstance from "./http";
import CreateUser from './CreateUser';
// import Profile from './Profile';
// import EditUser from './EditUser';
// import DeleteUser from './DeleteUser';
import Login from './Login';
import GetUsers from './GetUsers';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/all-users" element={<GetUsers />} />
          <Route path="/addUser" element={<CreateUser />} />
          {/* <Route path="all-users/viewprofile/:uuid" element={<Profile />} />
          <Route path="/edit/:uuid" element={<EditUser />} />
          <Route path="/deleteUser/:uuid" element={<DeleteUser />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
