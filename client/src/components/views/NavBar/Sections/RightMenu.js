import React from 'react';
import { FaUser, FaUserPlus, FaCarSide } from 'react-icons/fa'
import { FiLogOut } from 'react-icons/fi'
import { Menu } from 'antd';
import axios from 'axios';
import { USER_SERVER } from '../../../Config';
import { withRouter } from 'react-router-dom';
import { useSelector } from "react-redux";


function RightMenu(props) {
  const user = useSelector(state => state.user)

  const logoutHandler = () => {
    axios.get(`${USER_SERVER}/logout`).then(response => {
      if (response.status === 200) {
        props.history.push("/login");
      } else {
        alert('Log Out Failed')
      }
    });
  };

  if (user.userData && !user.userData.isAuth) {
    return (
      <Menu mode={props.mode}>
        <Menu.Item key="app1">
          <a href="/login"><FaCarSide /> Sell A Car</a>
        </Menu.Item>
        <Menu.Item key="mail">
          <a href="/login"> <FaUser /> Signin</a>
        </Menu.Item>
        <Menu.Item key="app">
          <a href="/register"> <FaUserPlus /> Signup</a>
        </Menu.Item>
      </Menu>
    )
  } else {
    return (
      <Menu mode={props.mode}>
        <Menu.Item key="upload">
          <a href='/product/upload'><FaCarSide /> Sell A Car</a>
        </Menu.Item>
        <Menu.Item key="logout">
          <a onClick={logoutHandler}><FiLogOut /> Logout</a>
        </Menu.Item>
      </Menu>
    )
  }
}

export default withRouter(RightMenu);

