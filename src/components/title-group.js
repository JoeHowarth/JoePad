import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';
// This file is shared across the demos.


const styles = (theme) => ({
  item: {
    backgroundColor: theme.palette.background.paper,
  },
  root: {
    width: '100%',
    height: '150px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    color: theme.palette.common.white,
    background: theme.palette.primary.light,
  },

  toolbar: theme.mixins.toolbar,

})

const TitleGroup = (props) => {
  const {classes} = props;
  return (
    <div className={classes.root}>
      <Typography variant="display2" color='secondary'>
        JoePad
      </Typography>
      <Typography variant="subheading" color='textSecondary' gutterBottom>
        Your Notes -- Anywhere
      </Typography>
    </div>

  )
}
// <div className={classes.toolbar}></div>


TitleGroup.propTypes = {
  classes: PropTypes.object.isRequired,
};

// export default TitleGroup;
export default withStyles(styles)(TitleGroup);
