import React from "react";
import "./Signup.css";
import { useState } from "react";
import logo from "../images/logo.png";
import eye from "../images/eye.png";
import image2 from "../images/image2.png";
import x from "../images/x.png";
import { Link ,useHistory} from "react-router-dom";
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const handleSignup = async (e) => {
    e.preventDefault(); // Ngăn chặn sự kiện mặc định của form

    if (!username || !password || !confirmPassword) {
      setError("Vui lòng điền đầy đủ thông tin.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Mật khẩu không khớp.");
      return;
    }

    try {
      // Lưu dữ liệu vào AsyncStorage
      await AsyncStorage.setItem("username", username);
      await AsyncStorage.setItem("password", password);

      // Đăng ký thành công, chuyển hướng đến trang đăng nhập (hoặc hiển thị thông báo đăng ký thành công)
      setError("");
      console.log("Đăng ký thành công!");
      // Thực hiện chuyển hướng ở đây
    } catch (error) {
      console.error("Lỗi khi lưu dữ liệu:", error);
      setError("Đã xảy ra lỗi, vui lòng thử lại sau.");
    }
  };
  return (
    <form action="POST" >
      <div className="logo">
        <img src={logo} />
      </div>
      <header className="container">
        <div className="content">
          <div className="image1">
            <img src={image2} />
          </div>
        </div>
        <div className="input-login-signup">
          <div className="choose">
            <div className="choose-language">
              <select className="choose-language" id="choose-language">
                <option value="vi">Tiếng Việt</option>
                <option value="en">English</option>
              </select>
            </div>
            <div className="choose-page">
              <div className="btn-choose-page">
                <div className="content-btn">
                  <span>Đăng nhập</span>
                </div>
                <div className="line-bottom"></div>
              </div>
              <div className="btn-choose-page ">
                <div className="content-btn">
                  <span>Đăng ký</span>
                </div>
                <div className="line-bottom"></div>
              </div>
            </div>
          </div>
          <div className="form">
            <div className="null"></div>
            <div className="form-1">
              <form method="post">
                <div className="textDK">Đăng ký</div>

                <div className="flex1">
                  <div className="text1">Tài khoản</div>
                  <div className="form-control">
                    <input
                      value={username}
                      onChange={(e)=>setUsername(e.target.value)}
                      type="text"
                      name="username"
                      placeholder="Nhập tài khoản"
                    />
                    <div className="option">
                      <img src={x} alt="Delete" />
                    </div>
                  </div>
                </div>
                <div className="flex1">
                  <div className="text1">Mật khẩu </div>
                  <div className="form-control">
                    <input
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      name="password"
                      placeholder="••••••••"
                    />
                    <div className="option">
                      <img src={eye} alt="Show" />
                    </div>
                  </div>
                </div>
                <div className="flex1">
                  <div className="text1">Nhập lại mật khẩu </div>
                  <div className="form-control">
                    <input
                      value={confirmPassword}
                      onChange={(e)=>setConfirmPassword(e.target.value)}
                      type="password"
                      name="password"
                      placeholder="••••••••"
                    />
                    <div className="option">
                      <img src={eye} alt="Show" />
                    </div>
                  </div>
                </div>
                <div className="form-control1">
                  <button type="submit" className="button" onSubmit={handleSignup} > Đăng ký</button>
                </div>  
                <div className="textbtn">
                  Đã có tài khoản, đăng nhập tại <Link to="/login">đây</Link>!
                </div>
              </form>
            </div>
          </div>
        </div>
      </header>
    </form>
  );
}
