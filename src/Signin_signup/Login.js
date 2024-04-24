import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";
import { Link } from "react-router-dom";
export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      console.log("Data sent to server:", { username, password, email }); // Log dữ liệu gửi từ phía client
      const response = await axios.post(
        "http://localhost:3000/api/user",
        {
          username: username,
          password: password,
          email: email,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
    } catch (error) {
      console.error("Lỗi khi đăng nhập:", error);
      setErr("Đã xảy ra lỗi khi đăng nhập");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h1 className="bkav"  >Bkav</h1>
      <div className="form1">
        <h1 className="login">Login</h1>
        <label>
          <p className="Username">Username</p>
          <input
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="textUsername"
            type="text"
          />
        </label>
        <label>
          <p className="passWord">Password</p>
          <input
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            className="textPassWord"
            type="password"
          />
        </label>
        <div className="textBtn">
          <button onSubmit={handleLogin} className="Button" type="submit">
            Login
          </button>
          <button className="Signup">
            <Link className="hi" to="/signup">
              Sign up
            </Link>
          </button>
          {err && <p className="error">{err}</p>}
        </div>
      </div>
    </form>
  );
}
