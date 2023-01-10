import React, { useState, useEffect } from "react";
import "./profile.css";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [file, setFile] = useState("");
  const [showFileLimit, setFileLimit] = useState(false);
  //const [imageData, setImageData] = useState([]);

  useEffect(() => {
    const userStoredValue = window.localStorage.getItem("user");
    const userImage = window.localStorage.getItem("images");

    if (userStoredValue) {
      const userDetails = JSON.parse(userStoredValue);
      setFirstName(userDetails.firstName);
      setLastName(userDetails.lastName);
      setEmail(userDetails.email);
      setFile(userImage);
    }
  }, []);

  const handleChange = (e) => {
    //console.log(e.target.files);
    if (e.target.files[0].size > 2097152) {
      setFileLimit(true);
      return;
    }

    const reader = new FileReader();

    // Closure to capture the file information.
    reader.onload = function (e) {
      setFile(e.target.result);
      setFileLimit(false);
      addImage(e.target.result);
      //setFile(URL.createObjectURL(e.target.files[0]));
    };

    reader.readAsDataURL(e.target.files[0]);
  };

  const addImage = (imgData) => {
    localStorage.setItem("images", imgData);
  };

  const logout = () => {
    localStorage.clear();
    navigate("/auth/login");
  };
  const labelstyle = {
    backgroundColor: "#0275d8",
    color: "white",
    padding: "0.5rem",
    fontFamily: "sans-serif",
    borderRadius: "0.3rem",
    cursor: "pointer",
    marginTop: "1rem",
  };
  return (
    <div className="container mt-4 mb-4 p-3 d-flex justify-content-center">
      <div className="card p-4">
        <div className=" image d-flex flex-column justify-content-center align-items-center">
          <button className="btn">
            <img
              className="rounded-circle"
              src={`${file}`}
              height="100"
              width="100"
              alt="profile"
            />
          </button>
          <div>
            <input
              type="file"
              id="actual-btn"
              style={{ display: "none" }}
              onChange={handleChange}
            />
            <label style={labelstyle} htmlFor="actual-btn">
              Choose File
            </label>
          </div>
          {showFileLimit ? (
            <p className="mt-2">File size should be less then 2MB</p>
          ) : (
            <></>
          )}

          <span className="name mt-3">
            {firstName.toUpperCase()} {lastName.toUpperCase()}
          </span>
          <span className="idd">{email.toUpperCase()}</span>

          <div className=" d-flex mt-4">
            <button className="btn btn-dark" onClick={logout}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
