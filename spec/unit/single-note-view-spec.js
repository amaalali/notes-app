function testSingleNoteView(){
  var note = new Note('I love eggs!');
  var singleNote = new SingleNoteView(note);
  assert.isTrue(singleNote.renderHTML() === "<div>I love eggs!</div>");
}

testSingleNoteView();
