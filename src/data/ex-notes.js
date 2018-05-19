import _ from 'lodash';
import shortid from 'shortid';

let exNotes = [
  {
    text: "this is my first note! Oh my god, is this the best user experience I had ever had?, probably...",
    title: "My First Note"
  },
  {
    text: "Wooooooo!!!! Second note and going strong, baaaby. Ummph oh yeah, best APP EVERRR",
    title: "I'm a baby, baby"
  }
]
exNotes.forEach(n => {
  n.id = '_'+shortid.generate();
  return n;
});


export default exNotes;
