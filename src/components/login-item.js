import React from 'react';
import PropTypes from 'prop-types';


import AddIcon from '@material-ui/icons/Add';
import { withStyles } from '@material-ui/core/styles';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

import TextField from '@material-ui/core/TextField';

import FormDialogItem from './form-dialog-item';
import ActionItem from './dumb/action-item';
import _ from 'lodash';
const styles = (theme) => ({})

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  onUsernameChange = e => {
    this.setState({ username: e.target.value });
  }

  onPasswordChange = e => {
    this.setState({ password: e.target.value });
  }

  handleLoginSubmit = async () => {
    let {username, password} = this.state;

    this.props.onLogin({username, password})

  };
  render () {
    return (
      <FormDialogItem
        formTitle="Login Info"
        handleSubmit={this.handleLoginSubmit}
      >
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Username"
            type="text"
            onChange={this.onUsernameChange}
            fullWidth
          />
          <TextField
            margin="dense"
            id="password"
            label="Password"
            type="text"
            onChange={this.onPasswordChange}
            fullWidth
          />
        </DialogContent>
      </FormDialogItem>
    )
  }
}





// export default SideBar;
export default withStyles(styles)(Login);
