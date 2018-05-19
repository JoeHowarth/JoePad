import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import withRoot from './withRoot';
import NoteView from './components/note-view';
import SideBar from './components/side-bar';
import _ from 'lodash';
import shortid from 'shortid';
import exNotes from './data/ex-notes';

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: '100%',
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  }
});

class App extends React.Component {
  constructor(props, context) {
    super(props, context);

    const notes = _.keyBy(exNotes, o => o.id)
    this.state = {
      currID: exNotes[0].id,
      notes: notes,
    }
  }

  onType = (e) => {
    let {notes, currID} = this.state;
    notes[currID].text = e.target.value
    this.setState({
      notes: notes
    })
  }

  onClickNote = (e, id) => {
    const {notes} = this.state;
    this.setState({
      currID: id
    })
  }

  onDeleteNote = () => {
    const id = this.state.currID;
    console.log(id);
    let notes = _.clone(this.state.notes)
    delete notes[id]
    this.setState({
      notes: notes,
      currID: Object.keys(notes)[0]
     })
  }

  onNewNote = (title) => {
    let notes= _.clone(this.state.notes)
    const id = '_'+shortid.generate();
    const newNote = {
      id: id,
      title: title,
      text: '',
    }
    notes[id] = newNote

    this.setState({
      notes: notes,
      currID: id
    })
  }

  render() {
    const { classes } = this.props;
    const { currID, notes } = this.state;

    return (
      <div className={classes.root}>
          <SideBar
            notes={this.state.notes}
            onClickNote={this.onClickNote}
            onDeleteNote={this.onDeleteNote}
            onNewNote={this.onNewNote}
          />
          <NoteView
            onType={this.onType}
            noteText={notes[currID].text}
          />
      </div>
    );
  }
}




App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(App));
