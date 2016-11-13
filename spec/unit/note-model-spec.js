function testNoteModel(string){
  var testNote = new Note(string);
  assert.isTrue(testNote.returnText() === string);
}

testNoteModel("JavaScript is confusing! :/");
