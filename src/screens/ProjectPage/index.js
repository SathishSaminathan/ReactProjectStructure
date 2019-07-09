import React, { Component, Fragment } from "react";
import { Layout, Button, Breadcrumb } from "antd";
import { Route } from "react-router-dom";

import DrawerComponent from "components/shared/DrawerComponent";
import MenuNavigations from "components/shared/MenuNavigations";
import Workspace from "components/shared/Workspace";
import { Menus } from "constants/AppConstants";
import Crew from "components/Crew";
import Cast from "components/Cast";
import Script from "components/Script";
import Equipments from "components/Equipments";
import Approvals from "components/Approvals";
import Dashboard from "components/Dashboard";
import { ProjectRoutes } from "config/routes";

const { Content, Footer, Sider } = Layout;

const MenuData = [
  {
    menuId: 1,
    menuName: "Back To Projects",
    url: "/welcome"
  },
  {
    menuId: 1,
    menuName: "Overview",
    url: "/project/overview/1"
  },
  {
    menuId: 2,
    menuName: "Scripts",
    url: "/project/script"
  },
  {
    menuId: 3,
    menuName: "Crew",
    url: "/project/crew"
  },
  {
    menuId: 4,
    menuName: "Cast",
    subMenus: [
      {
        menuId: 5,
        menuName: "Hero Audition"
      },
      {
        menuId: 6,
        menuName: "Heroine Audition"
      }
    ]
  },
  {
    menuId: 7,
    menuName: "Equipments",
    url: "/project/equipments"
  }
];

class ProjectPage extends Component {
  state = {
    collapsed: false,
    user: null,
    drawerVisible: false,
    selectedMenu: Menus.DASHBOARD
  };

  onDrawerClose = () => {
    this.setState({ drawerVisible: false });
  };

  onSelectMenu = key => {
    this.setState({ selectedMenu: key });
  };

  render() {
    const { drawerVisible, selectedMenu } = this.state;
    return (
      <Fragment>
        <DrawerComponent visible={drawerVisible} onClose={this.onDrawerClose} />
        <Layout style={{ minHeight: "100%" }}>
          <Sider collapsed={this.state.collapsed}>
            <MenuNavigations
              MenuData={MenuData}
              onSelectMenu={this.onSelectMenu}
            />
          </Sider>
          <Layout>
            {/* <Header style={{ background: "#000000", padding: 0 }} /> */}
            <Content style={{ margin: "0 16px", position: "relative" }}>
              {/* <Breadcrumb style={{ margin: "16px 0" }}>
                    <Breadcrumb.Item>User</Breadcrumb.Item>
                    <Breadcrumb.Item>Bill</Breadcrumb.Item>
                  </Breadcrumb> */}
              {/* {selectedMenu} */}
              <div
                style={{
                  backgroundColor: "red",
                  position: "absolute",
                  borderRadius: "10px",
                  right: "-5px",
                  top: "5px"
                }}
              >
                <Button
                  type="primary"
                  icon="setting"
                  size="default"
                  onClick={() => this.setState({ drawerVisible: true })}
                />
              </div>
              <div
                style={{
                  padding: 24,
                  background: "#fff",
                  minHeight: 360,
                  marginTop: "20px"
                }}
              >
                <ProjectRoutes />
                {/* <Workspace showComponent={selectedMenu} /> */}
              </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              Ant Design ©2018 Created by Ant UED
            </Footer>
          </Layout>
        </Layout>
      </Fragment>
    );
  }
}

export default ProjectPage;
