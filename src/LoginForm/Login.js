import React from "react";
import logo from "../images/logo.png";
import eye from "../images/eye.png";
import fb from "../images/fb.png";
import gg from "../images/gg.png";
import image1 from "../images/image1.png";
import x from "../images/x.png";
import ap from "../images/apple.png";
import "./Login.css"
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <form>
      <div className="logoo">
        <img src={logo} />
      </div>
      <div className="containerr">
        <div className="contentt">
          <div>
            <div className="description-11">
              Đăng nhập để
              <br /> kết nối
            </div>
            <div className="description-22">
              Nếu chưa có tài khoản thì
              <br /> đăng kí tại <span><Link to="/signup">đây</Link></span>
            </div>
          </div>
          <div className="image1">
            <img src={image1} />
          </div>
        </div>
        <div className="input-login-signupp">
          <div className="choosee">
            <div className="choose-languagee">
              <select className="choose-languagee" id="choose-languagee"> 
                <option value="vi">Tiếng Việt</option>
                <option value="en">English</option>
              </select>
            </div>
            <div className="choose-pagee">
              <div className="btn-choose-page">
                <div className="content-btnn">
                  <span>Đăng nhập</span>
                </div>
                <div className="line-bottom"></div>
              </div>
              <div className="btn-choose-page ">
                <div className="content-btnn">
                  <span>Đăng ký</span>
                </div>
                <div className="line-bottom"></div>
              </div>
            </div>
          </div>
          <div className="form">
            <div className="null"></div>
            <div className="form-11">
              <form className="witdh" method="post">
                <div className="form-controll">
                  <input
                    type="text"
                    name="username"
                    placeholder="Nhập tài khoản"
                  />
                  <div className="optionn">
                    <img src={x} alt="Delete" />
                  </div>
                </div>
                <div className="form-controll">
                  <input
                    type="password"
                    name="password"
                    placeholder="••••••••"
                  />
                  <div className="optionn">
                    <img src={eye} alt="Show" />
                  </div>
                </div>
                <div className="div-forgot-passwordd">
                  <span>Quên mật khẩu ?</span>
                </div>
                <div className="form-control11">
                  <button className="button"> Đăng nhập</button>
                </div>
              </form>
              <div className="other-connectt">
                <div className="header">
                  <div className="line"></div>
                  <div className="title">
                    <span>Hoặc tiếp tục với</span>
                  </div>
                  <div className="line"></div>
                </div>
                <div className="content">
                  <div className="item">
                    <img src={gg} alt="Google" />
                  </div>
                  <div className="item">
                    <img src={ap} alt="Apple" />
                  </div>
                  <div className="item">
                    <img src={fb} alt="Facebook" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
