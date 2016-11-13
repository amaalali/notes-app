function testNoteModel(string){
  var testNote = new Note(string);
  assert.isTrue(testNote.printText() === string);
}

testNoteModel("JavaScript is confusing! :/");
