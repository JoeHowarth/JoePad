import React from 'react';
import PropTypes from 'prop-types';
// import Typography from '@material-ui/core/Typography';
// import Input from '@material-ui/core/Input';
// import Paper from '@material-ui/core/Paper';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import AddIcon from '@material-ui/icons/Add';
import { withStyles } from '@material-ui/core/styles';
import FacebookLogin from 'react-facebook-login';

import TitleGroup from './title-group';
import ActionItem from './dumb/action-item';
// import FormDialog from './form-dialog';
import NewNote from './new-note';
import LoginItem from './login-item';
import _ from 'lodash';

const Note = (props) => {
  let preview = _.split(props.note.text, " ", 12).join(" ")
  return (
    <ListItem button onClick={props.onClick}>
      <ListItemText secondary={preview}>
        {props.note.title}
      </ListItemText>
    </ListItem>
  )
}



const drawerWidth = 250;
const styles = (theme) => ({
  root: {
    boxShadow: theme.shadows[1],
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
  },
})



const SideBar = (props) => {
  const {
    classes,
    onClickNote,
    notes,
    onDeleteNote,
    onNewNote,
    onLogin,
  } = props;

  const NoteArr = _.map(notes, n => (
    <Note note={n} onClick={e => onClickNote(e, n.id)}  key={n.id}/>
  ));

  return (
    <div className={classes.root}>
      <Drawer
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}>
        <TitleGroup/>
        <Divider/>
        <List>
          <LoginItem
            onLogin={onLogin}
            loggedIn={props.loggedIn}
            username={props.username}
          />
          <NewNote onNewNote={onNewNote}/>
          <ActionItem icon={AddIcon} text='Delete' onClick={props.onDeleteNote}/>
          <ActionItem icon={AddIcon} text='Refresh' onClick={props.onRefresh}/>
          <Divider/>
          {NoteArr}
        </List>
        <Divider />
      </Drawer>
    </div>
  )
}


SideBar.propTypes = {
  classes: PropTypes.object.isRequired,

};

// export default SideBar;
export default withStyles(styles)(SideBar);
