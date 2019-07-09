import React, { Component } from "react";
import { Layout, Button } from "antd";
import { connect } from "react-redux";

import { Images } from "assets/images";
import { removeUser } from "store/action";

const { Header } = Layout;

class HeaderComponent extends Component {
  render() {
    return (
      <div>
        <Header
          style={{
            background: "#fff",
            padding: 0,
            overflow: "hidden",
            display: "flex"
          }}
        >
          <div
            className="logo"
            style={{
              width: "80px",
              height: "100px",
              backgroundColor: "#fb7791"
            }}
          >
            <img
              src={Images.logo}
              style={{ width: "50px", height: "60px", objectFit: "contain" }}
              alt="logo image"
            />
          </div>
          {this.props.currentUser && (
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button customButton"
              onClick={() => {
                localStorage.removeItem("user");
                this.props.removeUser();
                this.props.history.push("/login");
              }}
            >
              Sign out
            </Button>
          )}
        </Header>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => {
  return {
    currentUser: user.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeUser: () => dispatch(removeUser())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderComponent);
