import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import withRoot from './withRoot';
import NoteView from './components/note-view';
import SideBar from './components/side-bar';
import _ from 'lodash';
import shortid from 'shortid';
import exNotes from './data/ex-notes';
import axios from 'axios';

axios.defaults.withCredentials = true;
const url = 'http://localhost:4000/'
const loginURL = url + 'login';
const apiURL = url + 'users/'
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
      loggedIn: false,
      username: '',
    }

  }

  onType = (e) => {
    let {notes, currID} = this.state;
    notes[currID].text = e.target.value
    this.setState({
      notes: notes
    })
    axios.put(apiURL,{note: notes[currID]})

  }

  onClickNote = (e, id) => {
    const {notes} = this.state;
    this.setState({
      currID: id
    })
  }

  onDeleteNote = () => {
    const id = this.state.currID;
    axios.delete(apiURL, {params: {id: id}})
      .then(res => {
        this.setState({
          notes: res.data,
          currID: Object.keys(res.data)[0]
        })
      })
      .catch(res => {
        console.log("in error section");
        console.log(res);
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
    axios.post(apiURL, {note: newNote})
      .then(res => {
        this.setState({
          notes: res.data,
          currID: id,
        })
      })
  }

  onRefresh = () => {
    axios.get(apiURL)
      .then(res => {
        console.log(res.data);
        this.setState({
          notes: res.data,
        })
      })
      .catch(res => {
        console.log("in error section");
        console.log(res);
      })
  }

  onLogin = ({username, password}) => {
    axios.post(url + 'login/', {
      username,
      password
    }).then(res => {
      let {username, notes} = res.data
      console.log(username, notes);
      this.setState({
        loggedIn: true,
        username: username,
        notes: notes,
        currID: Object.keys(notes)[0]
      })
      // console.log(res);
    }).catch( res => {
      console.log("ERROR ---");
      console.log(res);
    })
  }

  render() {
    const { classes } = this.props;
    const { currID, notes } = this.state;
    console.log('render state',this.state);
    let text;
    if (Object.keys(notes).length === 0) {
      text = ''
    } else {
      text = notes[currID].text
    }
    return (
      <div className={classes.root}>
          <SideBar
            loggedIn={this.state.loggedIn}
            username={this.state.username}
            onLogin={this.onLogin}
            notes={this.state.notes}
            onClickNote={this.onClickNote}
            onDeleteNote={this.onDeleteNote}
            onRefresh={this.onRefresh}
            onNewNote={this.onNewNote}
          />
          <NoteView
            onType={this.onType}
            noteText={text}
          />
      </div>
    );
  }
}




App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(App));
