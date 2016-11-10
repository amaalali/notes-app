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
  assert.isTrue( noteListView.printHtml() === "<ul><li><div>Favourite beer: Heineken</div></li></ul>");
  noteList.newNote('Favourite editor: Vim');
  assert.isTrue( noteListView.printHtml() === "<ul><li><div>Favourite beer: Heineken</div></li><li><div>Favourite editor: Vim</div></li></ul>");
}


testNoteListViewInstantiation();
testNoteListViewReturningHtml();
