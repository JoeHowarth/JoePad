import React from 'react';
// import PropTypes from 'prop-types';
// import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({})

const ActionItem = props => {
  return (
    <ListItem button onClick={props.onClick}>
      <ListItemIcon >
        <props.icon/>
      </ListItemIcon>
      <ListItemText primary={props.text}/>
    </ListItem>
  )
}
export default withStyles(styles)(ActionItem);
