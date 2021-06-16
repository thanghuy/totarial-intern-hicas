import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
const LoginForm = () => {
  //   const onFinish = (values) => {
  //     console.log('Received values of form: ', values);
  //   };

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      //   onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: "Tên đăng nhập không được đê trống !",
          },
        ]}
      >
        <Input
          size="large"
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Tên đăng nhập"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Vui lòng nhập mật khẩu !",
          },
        ]}
      >
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
          size="large"
          placeholder="Mật khẩu"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox style={{color : 'white'}} >Lưu đăng nhập</Checkbox>
        </Form.Item>

        <Link to="/quen-mat-khau" className="login-form-forgot">
          Quên mật khẩu ?
        </Link>
      </Form.Item>

      <Form.Item>
        <Button size="large" htmlType="submit" className="login-form-button">
          Đăng nhập
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
