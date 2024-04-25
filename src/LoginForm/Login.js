import React from "react";
import "./Login.css";
import logo from "../images/logo.png";
import eye from "../images/eye.png";
import fb from "../images/fb.png";
import gg from "../images/gg.png";
import image1 from "../images/image1.png";
import x from "../images/x.png";
import ap from "../images/apple.png";

export default function Login() {
  return (
    <form>
      <div className="logo">
        <img src={logo} />
      </div>
      <header className="container">
        <div className="content">
          <div>
            <div className="description-1">
              Đăng nhập để
              <br /> kết nối
            </div>
            <div className="description-2">
              Nếu chưa có tài khoản thì
              <br /> đăng kí tại <span>đây</span>
            </div>
          </div>
          <div className="image1">
            <img src={image1} />
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
              <form className="witdh" method="post">
                <div className="form-control">
                  <input
                    type="text"
                    name="username"
                    placeholder="Nhập tài khoản"
                  />
                  <div className="option">
                    <img src={x} alt="Delete" />
                  </div>
                </div>
                <div className="form-control">
                  <input
                    type="password"
                    name="password"
                    placeholder="••••••••"
                  />
                  <div className="option">
                    <img src={eye} alt="Show" />
                  </div>
                </div>
                <div className="div-forgot-password">
                  <span>Quên mật khẩu ?</span>
                </div>
                <div className="form-control1">
                  <button className="button"> Đăng nhập</button>
                </div>
              </form>
              <div className="other-connect">
                <div className="header">
                  <div className="line"></div>
                  <div className="title">
                    <span>Hoặc tiếp tục với</span>
                  </div>
                  <div className="line"></div>
                </div>
                <div className="content">
                  <div class="item">
                    <img src={gg} alt="Google" />
                  </div>
                  <div class="item">
                    <img src={ap} alt="Apple" />
                  </div>
                  <div class="item">
                    <img src={fb} alt="Facebook" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </form>
  );
}
