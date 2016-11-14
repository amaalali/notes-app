function testNoteModel(string){
  var testNote = new Note(string);
  assert.isTrue(testNote.printText() === string);
}

function testNoteModelSnippet(string){
  var string = "Javascript is a wonderful language and the easiest to learn and everybody loves it."
  var testNote = new Note(string);
  assert.isTrue( testNote.printSummary() === "Javascript is a wond" );
}

testNoteModel("JavaScript is confusing! :/");
testNoteModelSnippet();
