import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  paperInput: {
    // border: '2px solid black',
    padding: '7px',
  },
  root: {
    padding: 40,
    flexGrow: 1,
    maxWidth: 1300,
  }
});

const NoteView = (props) => {
  const { classes, onType, noteText } = props;
  return (
    <div className={classes.root}>
      <Paper elevation={4} className={classes.paperInput}>
        <Input
          onChange={onType}
          value={props.noteText}
          className={classes.input}
          multiline
          fullWidth
          rows={4}
          rowsMax={40}
        />
      </Paper>
    </div>
)};



export default withStyles(styles)(NoteView);
