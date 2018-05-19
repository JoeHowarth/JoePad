import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class FormDialog extends React.Component {


  render() {
    return (
        <Dialog
          open={this.props.open}
          onClose={this.props.handleCancel}
          aria-labelledby="form-dialog-title"
          onKeyUp={this.props.onKeyUp}

        >
          <DialogTitle id="form-dialog-title">Create Note</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Title"
              type="text"
              onChange={this.props.onTitleChange}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.props.handleCancel} color="primary">
              Cancel
            </Button>
            <Button
              onClick={this.props.handleSubmit} color="primary">
              Create
            </Button>
          </DialogActions>
        </Dialog>
    );
  }
}
