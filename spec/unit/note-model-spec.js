var testNote = new Note("JavaScript is not confusing! :)");

function testNoteModel(){
  assert.isTrue(testNote.returnText() === "JavaScript is not confusing! :)");
}

function testNoteModelHasId(){
  assert.isTrue(testNote.id === 3);
}

testNoteModel();
testNoteModelHasId();
