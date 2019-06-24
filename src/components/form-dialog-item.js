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

import ActionItem from './dumb/action-item';
import _ from 'lodash';
const styles = (theme) => ({})

class FormDialogItem extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleCancel = () => {
    this.setState({ open: false });
  };


  onSubmit = () => {
    this.setState({open: false})
    this.props.handleSubmit()
  }

  onEnterUp = e => {
    if (e.key === 'Enter')
      this.onSubmit()
  };

  render() {
    const {username, loggedIn, } = this.props;
    return (
      <div>
        <ActionItem
          onClick={this.handleClickOpen}
          icon={ AddIcon }
          text={this.props.formTitle}
        />

        <Dialog
          open={this.state.open}
          onClose={this.handleCancel}
          aria-labelledby="form-dialog-title"
          onKeyUp={this.onEnterUp}

        >
          <DialogTitle id="form-dialog-title">{this.props.formTitle}</DialogTitle>
          {this.props.children}
          <DialogActions>
            <Button onClick={this.handleCancel} color="primary">
              Cancel
            </Button>
            <Button
              onClick={this.onSubmit} color="primary">
              Create
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}



// export default SideBar;
export default withStyles(styles)(FormDialogItem);
