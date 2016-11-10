function testNoteControllerInstantiation(){
    var controller = new NoteController();
    assert.isTrue(controller instanceof NoteController);
}

function testNoteControllerHTML(){
  var controller = new NoteController();
  controller.newNote('I like rum');

}

testNoteControllerInstantiation();
