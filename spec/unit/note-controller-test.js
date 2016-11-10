function testNoteControllerInstantiation(){
    var controller = new NoteController();
    assert.isTrue(controller instanceof NoteController);
}

function testNoteControllerHTML(){
  var noteList = new NoteList();
  var controller = new NoteController(noteList);
  controller.newNote('I like rum');
  controller.printHtml();
  assert.isTrue(document.getElementById('app').innerHTML === "<ul><li><div>I like rum</div></li></ul>");
}

testNoteControllerInstantiation();
testNoteControllerHTML();
