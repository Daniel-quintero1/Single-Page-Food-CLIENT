import React from "react";
import { validationLogin } from "../Validations/ValidationLogin";

export default function Login(props) {
  const [userData, setUserData] = React.useState({
    username: "",
    password: "",
  });
  const handleInputChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validationLogin({
        ...userData,
        [e.target.name]: e.target.value,
      })
    );
  };
  const [errors, setErrors] = React.useState({
    username: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    props.login(userData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>WELCOME TO START SESSION</p>
    <hr />

      <label htmlFor="username">Username:</label>
      <input
        id="username"
        name="username"
        value={userData.username}
        placeholder="Enter The User..."
        onChange={handleInputChange}
      />
      <p>{errors.username}</p>
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={userData.password}
        name="password"
        placeholder="Enter The Password..."
        onChange={handleInputChange}
      />
      <p>{errors.password}</p>
      <button type="submit">LOGIN</button>
    </form>
  );
}
