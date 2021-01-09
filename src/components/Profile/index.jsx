import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Slide,
} from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import React, { Component } from "react";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        taiKhoan: "",
      },
      open: false,
    };
  }

  handleClickOpen = () => {
    this.setState({
      open: true,
    });
  };
  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    const hoTen = localStorage.getItem("hoTen");
    const soDT = localStorage.getItem("soDT");
    const email = localStorage.getItem("email");
    return (
      <div>
        <IconButton color="inherit">
          <AccountCircle onClick={this.handleClickOpen} />
        </IconButton>
        <Dialog
          open={this.state.open}
          TransitionComponent={Transition}
          keepMounted
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">
            Thông Tin Tài Khoản
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
             Chủ tài khoản: {hoTen} <br/>
             Gmail: {email} <br/>
             Điện thoại: {soDT} <br/>
            </DialogContentText>
          </DialogContent>
          <DialogActions></DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default Profile;
