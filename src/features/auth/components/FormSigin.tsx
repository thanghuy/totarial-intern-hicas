import { Form, Input, Button } from "antd";
import { useHistory } from "react-router-dom";
import AuthAPI from "../../../services/AuthAPI";
import { useState } from "react";
import { Alert } from "antd";
const FormSign = () => {
  const history = useHistory();
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isShowAlert, setShowAlert] = useState<boolean>(false);
  const onFinish = async (values: any) => {
    console.log(values);
    setLoading(true);
    try {
      const resp = await AuthAPI.CreateUser(values);
      if (resp.status) {
        history.push("/login");
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
          message="Sigin failed "
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
        <Input size="large" placeholder="Email" />
      </Form.Item>
      <Form.Item
        name="name"
        rules={[
          {
            required: true,
            message: "Is not null !",
          },
        ]}
      >
        <Input size="large" placeholder="Name" />
      </Form.Item>
      <Form.Item
        name="birthDate"
        rules={[
          {
            required: true,
            message: "Is not null !",
          },
        ]}
      >
        <Input type="date" size="large" placeholder="BirthDate" />
      </Form.Item>
      <Form.Item
        name="sex"
        rules={[
          {
            required: true,
            message: "Is not null !",
          },
        ]}
      >
        <Input size="large" placeholder="Sex" />
      </Form.Item>
      <Form.Item
        name="addressCompany"
        rules={[
          {
            required: true,
            message: "Is not null !",
          },
        ]}
      >
        <Input size="large" placeholder="Address Company" />
      </Form.Item>
      <Form.Item
        name="addressHome"
        rules={[
          {
            required: true,
            message: "Is not null !",
          },
        ]}
      >
        <Input size="large" placeholder="Address Home" />
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
        <Input.Password size="large" placeholder="Password" />
      </Form.Item>
      <Form.Item>
        <Button
          size="large"
          htmlType="submit"
          className="login-form-button"
          loading={isLoading}
        >
          {isLoading ? "Loading" : "Register"}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormSign;
