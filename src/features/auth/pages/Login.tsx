import React from "react";
import "../css/style.login.css";
import FormLogin from "../components/FormLogin";
import Logo from "../../../assets/icons/logo.svg";
const Login = () => {
  return (
    <div className="box-login">
      <div className="container-login">
        <div className="logo-login">
          <img src={Logo} alt="..." />
        </div>
        <FormLogin />
        <div className="contact-footer-login">
          <span>
            Nếu bạn có thắc mắc hay cần giải đáp, vui lòng liên hệ số điện
            thoại: 19001000
          </span>
        </div>
        <div className="contact-footer-login">
          <span>Bản quyền thuộc về AnyBim</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
