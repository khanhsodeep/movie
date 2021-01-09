import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
  withStyles,
} from "@material-ui/core";
import {  withRouter } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import React, { Component } from "react";
import styles from "./style";
import Profile from "../Profile";

class Header extends Component {
  handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("hoTen");
    localStorage.removeItem("email");
    localStorage.removeItem("soDT");

    this.props.history.push("/signin");
  };

  handleBack = () => {
    this.props.history.push("/")
  };

  render() {
    const hoTen = localStorage.getItem("hoTen");
    const { root, menuButton, title } = this.props.classes;
    return (
      <div className={root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography style={{cursor:"pointer"}} onClick={this.handleBack} className={title} variant="h6">
              Trang Chủ
            </Typography>
            <Typography className={title} variant="h6">
              Xin chào {hoTen} !!!
            </Typography>
            <Profile />
            <Button onClick={this.handleLogout} color="inherit">
              Đăng xuất
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
export default withRouter(withStyles(styles)(Header));
