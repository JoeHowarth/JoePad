import React from 'react';
import PropTypes from 'prop-types';


import AddIcon from '@material-ui/icons/Add';
import { withStyles } from '@material-ui/core/styles';
import FormDialog from './form-dialog';
import ActionItem from './dumb/action-item';
import _ from 'lodash';
const styles = (theme) => ({})

class NewNote extends React.Component {
  state = {
    open: false,
    noteTitle: "untitled",
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleCancel = () => {
    this.setState({ open: false });
  };

  handleSubmit = () => {
    let {username, password} = this.state;

    this.props.onLogin({username, password})
    this.setState({ open: false })
  };

  onUsernameChange = e => {
    this.setState({ username: e.target.value });
  }

  onPasswordChange = e => {
    this.setState({ password: e.target.value });
  }

  onEnterUp = e => {
    if (e.key === 'Enter')
      this.handleSubmit()
  };

  render() {
    return (
      <div>


        <ActionItem
          onClick={this.handleClickOpen}
          icon={ AddIcon }
          text="Login"
        />
        <FormDialog
          open={this.state.open}
          handleCancel={this.handleCancel}
          handleSubmit={this.handleSubmit}
          onPasswordChange={this.onPasswordChange}
          onUsernameChange={this.onUsernameChange}
          titleRef={this.titleRef}
          onKeyUp={this.onEnterUp}
        />
      </div>
    )
  }
}
// <ListItem button onClick={this.handleClickOpen}>
//   <ListItemIcon >
//     <AddIcon />
//   </ListItemIcon>
//   <ListItemText primary="New Note"/>
// </ListItem>


// export default SideBar;
export default withStyles(styles)(NewNote);
