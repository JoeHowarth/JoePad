import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
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
    console.log(AddIcon);
    return (
      <div>


        <ActionItem
          onClick={this.handleClickOpen}
          icon={ AddIcon }
          text="New Note"
        />
        <FormDialog
          open={this.state.open}
          handleCancel={this.handleCancel}
          handleSubmit={this.handleSubmit}
          onTitleChange={this.onTitleChange}
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
