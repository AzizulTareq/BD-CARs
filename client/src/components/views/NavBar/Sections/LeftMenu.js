import React from 'react';
import { Menu } from 'antd';
import { Nav } from 'react-bootstrap'
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function LeftMenu(props) {
  return (

    <Menu mode={props.mode}>
    <Menu.Item key="mail">
      <a href="/">Home</a>
    </Menu.Item>
    </Menu>

    
  )
}

export default LeftMenu