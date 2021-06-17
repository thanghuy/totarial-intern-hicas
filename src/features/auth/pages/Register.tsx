import React from "react";
import "../css/style.login.css";
import FormSigin from "../components/FormSigin";
import Logo from "../../../assets/icons/logo.svg";
const Register = () => {
  return (
    <div className="box-sigin">
      <div className="container-login">
        <div className="logo-login">
          <img src={Logo} alt="..." />
        </div>
        <FormSigin />
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

export default Register;
