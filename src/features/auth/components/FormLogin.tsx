import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Link, useHistory } from "react-router-dom";
import { useAppDispatch } from "../../../app/hooks";
import AuthAPI from "../../../services/AuthAPI";
import { useState } from "react";
import { doLogin } from "../authSlice";
import { Alert } from "antd";
const LoginForm = () => {
  const history = useHistory();
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isShowAlert, setShowAlert] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const onFinish = async (values: any) => {
    setLoading(true);
    let result: Object = {};
    try {
      const resp = await AuthAPI.doLoginApi(values);
      if (resp.status) {
        result = {
          isLogin: true,
          infoUser: resp.data,
        };
        localStorage.setItem("@accessToken", resp.data.token);
        localStorage.setItem("@idUser", resp.data.idUser);
        dispatch(doLogin(result));
        history.push("/");
        setShowAlert(false);
      } else {
        setShowAlert(true);
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      {!isShowAlert ? null : (
        <Alert
          message="Incorrect account or password "
          type="error"
          style={{ marginBottom: "30px" }}
          showIcon
        />
      )}

      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: "Is not null !",
          },
        ]}
      >
        <Input
          size="large"
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Email"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Is not null !",
          },
        ]}
      >
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
          size="large"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox style={{ color: "white" }}>Remember</Checkbox>
        </Form.Item>

        <Link to="/quen-mat-khau" className="login-form-forgot">
          Forget password ?
        </Link>
      </Form.Item>

      <Form.Item>
        <Button size="large" htmlType="submit" className="login-form-button" loading={isLoading} >
          {isLoading ? "Loading" : "Login"}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
