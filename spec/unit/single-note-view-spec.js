function testSingleNoteViewInstantiation() {
  var string = "Javascript is a wonderful languageto learn and everybody loves it.";
  var note = new Note(string);
  var view = new SingleNoteView(note);
  assert.isTrue( view instanceof SingleNoteView );
}

function testSingleNoteViewHasNote() {
  var string = "Javascript is a wonderful languageto learn and everybody loves it.";
  var note = new Note(string);
  var view = new SingleNoteView(note);
  assert.isTrue( view.note instanceof Note );
}

function testSingleNoteViewPrintNote() {
  var string = "Javascript is a wonderful languageto learn and everybody loves it.";
  var note = new Note(string);
  var view = new SingleNoteView(note);
  assert.isTrue( view.printNote() === "<div>"+string+"</div>" );
}

testSingleNoteViewInstantiation();
testSingleNoteViewHasNote();
testSingleNoteViewPrintNote();
