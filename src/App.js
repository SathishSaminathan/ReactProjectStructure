import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { findDOMNode } from "react-dom";
import $ from "jquery";
import { connect } from "react-redux";
import { Layout } from "antd";

import { MainRoutes } from "config/routes";
import LoaderComponent from "components/shared/LoaderComponent";
import { setUser } from "store/action";
import HeaderComponent from "components/shared/HeaderComponent";
import Storage from "utilities/LocalStorageHelper";
import "./App.css";

let USER_INACTIVE_TIMEOUT = 1000; // Timer for the user inactivity
let TIMER = "";
let loader = "";
let user = null;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
    this._storage = new Storage();

    /** Listening for the user interaction with application */
    window.addEventListener("mousemove", () => this.resetTimer());
    window.addEventListener("mousedown", () => this.resetTimer());
    window.addEventListener("keypress", () => this.resetTimer());
    window.addEventListener("DOMMouseScroll", () => this.resetTimer());
    window.addEventListener("mousewheel", () => this.resetTimer());
    window.addEventListener("touchmove", () => this.resetTimer());
    window.addEventListener("MSPointerMove", () => this.resetTimer());

    this.startTimer();
  }

  startTimer = () => {
    // wait 2 seconds before calling goInactive
    TIMER = setTimeout(this.goInactive, USER_INACTIVE_TIMEOUT);
  };

  resetTimer = () => {
    clearTimeout(TIMER);
    this.startTimer();
  };

  goInactive = () => {
    console.log("user inactive");
  };

  goActive = () => {
    this.startTimer();
  };

  /**code for hiding the loader component with animation */
  // loader = findDOMNode(this.refs.loader);
  // const isLoading = await this.hideLoader();
  // this.setState({
  //   isLoading
  // });
  // this.props.history.push("/login");

  doSomethingBeforeUnload = () => {
    console.log("before browser closes do this...");
  };

  /**Listens the closing event of the browser tab */
  setupBeforeUnloadListener = () => {
    window.addEventListener("beforeunload", ev => {
      ev.preventDefault();
      return (ev.returnValue = "Are you sure you want to close?");
    });
  };

  componentDidMount() {
    this.checkIfUserLoggedIn();
    // this.setupBeforeUnloadListener();
  }

  checkIfUserLoggedIn = async () => {
    loader = findDOMNode(this.refs.loader);
    const isLoading = await this.hideLoader();

    if (isLoading) {
      setTimeout(() => {
        this.setState(
          {
            isLoading: false
          },
          () => {
            console.log(this.state.isLoading);
          }
        );
      }, 500);
    }
    // user = localStorage.getItem("user");
    user = this._storage.load("user");
    if (user) {
      this.props.setUser(user);
      console.log("logged in");
    } else {
      this.props.history.push("/login");
    }
  };

  hideLoader = () => {
    return new Promise(resolve => {
      $(loader).fadeOut(600);
      resolve(true);
    });
  };

  render() {
    const { isLoading } = this.state;

    if (isLoading) {
      return (
        <LoaderComponent
          ref="loader"
          text="Preparing for you.."
          textColor="#f44e6f"
        />
      );
    }

    return (
      <Layout style={{ minHeight: "100vh" }}>
        <HeaderComponent {...this.props} />
        <MainRoutes />
      </Layout>
    );
  }
}

const RouteWithAuth = withRouter(App);
const mapDispatchToProps = dispatch => {
  return {
    setUser: user => dispatch(setUser(user))
  };
};
export default connect(
  null,
  mapDispatchToProps
)(RouteWithAuth);
