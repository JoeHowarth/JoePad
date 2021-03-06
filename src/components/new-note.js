import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import AddIcon from '@material-ui/icons/Add';
import { withStyles } from '@material-ui/core/styles';
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
    let title = this.state.noteTitle
    title = title.charAt(0).toUpperCase() + title.substr(1);

    this.props.onNewNote(title)
    this.setState({ open: false })
  };

  onTitleChange = e => {
      this.setState({ noteTitle: e.target.value });
  };

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
          text="New Note"
        />
        <Dialog
          open={this.state.open}
          onClose={this.handleCancel}
          aria-labelledby="form-dialog-title"
          onKeyUp={this.onEnterUp}

        >
          <DialogTitle id="form-dialog-title">Create New Note</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="title"
              label="Title"
              type="text"
              onChange={this.onTitleChange}
              fullWidth
            />

          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleCancel} color="primary">
              Cancel
            </Button>
            <Button
              onClick={this.handleSubmit} color="primary">
              Create
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}



// export default SideBar;
export default withStyles(styles)(NewNote);
