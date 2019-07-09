import React, { Component } from "react";
import { Menu, Icon } from "antd";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { Icons, Menus } from "constants/AppConstants";
import IconComponent from "../IconComponent";

const { SubMenu } = Menu;

class MenuNavigations extends Component {
  onSelectMenu = ({ key }) => {
    this.props.onSelectMenu(key);
  };

  renderSubMenus(subMenus) {
    let subMenuTemplate = [];
    let menuName = "";
    let iconName = "";
    subMenus.map((subMenu, i) => {
      switch (subMenu.menuName) {
        case Menus.CAST:
          menuName = Menus.CAST;
          iconName = Icons.APPROVALS;
          break;
        case Menus.HERO_AUDITION:
          menuName = Menus.HERO_AUDITION;
          iconName = Icons.HERO_AUDITION;
          break;
        case Menus.HEROINE_AUDITION:
          menuName = Menus.HEROINE_AUDITION;
          iconName = Icons.HEROINE_AUDITION;
          break;
        default:
          break;
      }
      subMenuTemplate.push(
        <Menu.Item key={menuName}>
          <Icon type={iconName} />
          <span>
            <div>{menuName}</div>
          </span>
        </Menu.Item>
      );
      return true;
    });
    return subMenuTemplate;
  }

  renderMenus = MenuData => {
    let menuItemTemplate = [];
    let menuName = "";
    let iconName = "";
    MenuData.map((menu, i) => {
      switch (menu.menuName) {
        case Menus.DASHBOARD:
          menuName = Menus.DASHBOARD;
          iconName = Icons.DASHBOARD;
          break;
        case Menus.COLLECTION:
          menuName = Menus.COLLECTION;
          iconName = Icons.COLLECTION;
          break;
        case Menus.CAST:
          menuName = Menus.CAST;
          iconName = Icons.CAST;
          break;
        case Menus.CREW:
          menuName = Menus.CREW;
          iconName = Icons.CREW;
          break;
        case Menus.EQUIPMENTS:
          menuName = Menus.EQUIPMENTS;
          iconName = Icons.EQUIPMENTS;
          break;
        case Menus.SCRIPTS:
          menuName = Menus.SCRIPTS;
          iconName = Icons.SCRIPTS;
          break;
        case Menus.APPROVALS:
          menuName = Menus.APPROVALS;
          iconName = Icons.APPROVALS;
          break;
        case Menus.OVERVIEW:
          menuName = Menus.OVERVIEW;
          iconName = Icons.OVERVIEW;
          break;
        default:
          menuName = "Back to Projects";
        // iconName = Icons.COLLECTION;
      }
      console.log(menuName);
      if (menu.subMenus) {
        menuItemTemplate.push(
          <SubMenu
            key={menu.menuName}
            title={
              <span>
                <Icon type="mail" />
                {menu.menuName}
              </span>
            }
          >
            <Menu.ItemGroup>
              {this.renderSubMenus(menu.subMenus)}
            </Menu.ItemGroup>
          </SubMenu>
        );
      } else {
        menuItemTemplate.push(
          <Menu.Item key={menuName}>
            <Icon>
              <IconComponent name={Icons.VIDEO_CAMERA} />
            </Icon>
            <span>
              <div>{menuName}</div>
            </span>
            <Link to={menu.url} />
          </Menu.Item>
        );
      }
      return true;
    });
    return menuItemTemplate;
  };

  render() {
    const { MenuData } = this.props;
    return (
      <Menu
        onSelect={this.onSelectMenu}
        mode="vertical"
        inlineCollapsed={true}
        theme="dark"
        defaultSelectedKeys={[Menus.DASHBOARD]}
      >
        {this.renderMenus(MenuData)}
      </Menu>
    );
  }
}

MenuNavigations.propTypes = {
  onSelectMenu: PropTypes.func.isRequired
};
export default MenuNavigations;
