function testNoteListInstantiation(){
  var noteList = new NoteList();
  var note = new Note("This is a Note!");
  noteList.addNote(note);
  assert.isTrue(noteList.returnNoteList().includes(note));
}

function testNoteListCreation (){
  var notelist = new NoteList();
  notelist.newNote('buy beer');
  assert.isTrue(notelist.notes[0].text === 'buy beer');
}

testNoteListInstantiation();
testNoteListCreation();
