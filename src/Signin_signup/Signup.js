import React, { useState } from "react";
import "./Signup.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [errors, setErrors] = useState({
    username: "",
    password: "",
    email: "",
  });
  const navigate = useNavigate();
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);

  const handleRegister = async (event) => {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của form

    try {
      // Reset errors
      setErrors({
        username: "",
        password: "",
        email: "",
      });

      if (username.length < 8 || /\s/.test(username)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          username:
            "Tên người dùng phải có ít nhất 8 kí tự và không chứa dấu cách",
        }));
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: "Email không hợp lệ",
        }));
      }

      if (password.length < 8 || !/\d/.test(password)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          password: "Mật khẩu phải có ít nhất 8 kí tự và chứa ít nhất một số",
        }));
      }

      if (password !== confirmPass) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          password: "Mật khẩu và mật khẩu xác nhận không khớp",
        }));
      }

      if (
        username &&
        password &&
        email &&
        !errors.username &&
        !errors.password &&
        !errors.email
      ) {
        const response = await axios.post("http://localhost:3000/api/user", {
          username,
          password,
          email,
        });

        console.log("Registration successful:", response.data);
        setShowSuccessDialog(true);
        // Lưu thông tin người dùng vào AsyncStorage
        // await AsyncStorage.setItem(username, password);
        // await AsyncStorage.setItem("username", username);
        setShowSuccessDialog(true);
        navigate("/login");
        alert("Bạn đã tạo tài khoản thành công ");
      }
    } catch (err) {
      console.error("Lỗi khi tạo tài khoản:", err);
      alert("Đã xảy ra lỗi khi tạo tài khoản");
    }
  };

  return (
    <div>
      <form className="form">
        <h1 className="bkav">Bkav</h1>
        <div className="form1">
          <h1 className="fontSignup">SignUp</h1>
          <label>
            <p className="name">Username</p>
            <input
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="editname"
              type="text"
            />
            {errors.username && (
              <span className="error">{errors.username}</span>
            )}
          </label>
          <label>
            <p className="name">Password</p>
            <input
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="editname"
              type="password"
            />
            {errors.password && (
              <span className="error">{errors.password}</span>
            )}
          </label>
          <label>
            <p className="name">Re-enter password</p>
            <input
              placeholder="Re-enter password"
              value={confirmPass}
              onChange={(e) => setConfirmPass(e.target.value)}
              className="editname"
              type="password"
            />
            {errors.password && (
              <span className="error">{errors.password}</span>
            )}
          </label>
          <label>
            <p className="name">Email</p>
            <input
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="editname"
              type="email"
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </label>

          <div className="textBtn">
            <button className="Button">
              <Link className="hi" to="/Login">
                Back
              </Link> 
            </button>

            <button
              onSubmit={handleRegister}
              className="Signup"
              style={{ fontWeight: "bold" }}
              type="submit"
            >
              Signup
            </button>
          </div>
        </div>
        {showSuccessDialog && <div className="ntfScc">Đăng kí thành công</div>}
      </form>
    </div>
  );
}
