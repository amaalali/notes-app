function testNoteListViewInstantiation() {
    var noteList = new NoteList();
    var noteListView = new NoteListView(noteList);
    assert.isTrue( noteListView.noteLists() === noteList );
}

function testNoteListViewReturningHtml() {
  var noteList = new NoteList();
  var noteListView = new NoteListView(noteList);
  assert.isTrue( noteListView.printHtml() === "<ul></ul>");
  noteList.newNote('Favourite beer: Heineken');
  noteListView.printHtml();
  assert.isTrue( noteListView.printHtml() === "<ul><li><div><a href='#6'>Favourite beer: Hein</a></div></li></ul>");
  noteList.newNote('Favourite editor: Vim');
  assert.isTrue( noteListView.printHtml() === "<ul><li><div><a href='#6'>Favourite beer: Hein</a></div></li><li><div><a href='#7'>Favourite editor: Vi</a></div></li></ul>");
}


testNoteListViewInstantiation();
testNoteListViewReturningHtml();
