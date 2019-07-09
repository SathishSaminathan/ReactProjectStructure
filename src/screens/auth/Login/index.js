import React, { Component } from "react";
import {
  Form,
  Icon,
  Input,
  Button,
  Checkbox,
  Row,
  Col,
  Card,
  Layout
} from "antd";
import { connect } from "react-redux";

import "./Login.css";
import Storage from "utilities/LocalStorageHelper";
import TextComponent from "components/shared/TextComponent";
import { OnboardServices } from "services";
import { Services, Notifications } from "constants/AppConstants";
import { setUser } from "store/action";
import showNotifications from "components/shared/NotificationComponent";
import Notification from "components/shared/NotificationComponent";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this._userService = new OnboardServices();
    this._notification = new Notification();
    this._storage = new Storage();
  }

  componentDidMount() {
    if (this.props.user) {
      this.props.history.push("/");
    }
  }

  state = {
    formLayout: "horizontal",
    isLoading: false
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        this.setState({
          isLoading: true
        });
        this._userService
          .onboardService(Services.OnboardVariables.LOGIN, values)
          .then(res => {
            // localStorage.setItem("user", JSON.stringify(res.data.result));
            this._storage.store("user", JSON.stringify(res.data.result))
            this.setState({ isLoading: false }, () => {
              this.props.setUser(JSON.stringify(res.data.result));
              this.props.history.push("/welcome");
              this._notification.showNotifications(
                Notifications.SUCCESS,
                "Welcome to ACE",
                "Get your work simplified!!"
              );
            });
          });
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    const { formLayout, isLoading } = this.state;
    const formItemLayout =
      formLayout === "horizontal"
        ? {
            labelCol: { span: 4 },
            wrapperCol: { span: 24 }
          }
        : null;
    const buttonItemLayout =
      formLayout === "horizontal"
        ? {
            wrapperCol: { span: 14, offset: 4 }
          }
        : null;

    return (
      <div>
        {/* <Layout style={{ minHeight: "100vh" }}> */}
        <div className="loginContainer">
          <TextComponent
            style={{
              position: "absolute",
              top: "15px",
              fontSize: "20px",
              left: "110px",
              fontWeight: "bold"
            }}
          >
            Welcome To{" "}
            <TextComponent style={{ color: "#f44e6f" }}>ACE</TextComponent>
          </TextComponent>
          <Form
            wrapperCol={4}
            onSubmit={this.handleSubmit}
            className="login-form"
          >
            <Form.Item>
              {getFieldDecorator("username", {
                rules: [
                  {
                    required: true,
                    message: "Please input your username!"
                  }
                ]
              })(
                <Input
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="Username"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("password", {
                rules: [
                  {
                    required: true,
                    message: "Please input your Password!"
                  }
                ]
              })(
                <Input
                  prefix={
                    <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  type="password"
                  placeholder="Password"
                />
              )}
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button customButton"
                loading={isLoading}
              >
                Log in
              </Button>
            </Form.Item>

            <Form.Item>
              <a className="login-form-forgot" href="">
                Forgot password?
              </a>
            </Form.Item>
          </Form>
        </div>
        {/* </Layout> */}
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => {
  return {
    user: user.currentUser
  };
};
const mapDispatchToProps = dispatch => {
  return {
    setUser: user => dispatch(setUser(user))
  };
};
const Login = Form.create()(LoginForm);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
