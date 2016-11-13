(function(exports) {
  function NoteList() {
    this.notes = [];
  }

  NoteList.prototype.addNote = function (note){
    this.notes.push(note);
  };

  NoteList.prototype.returnNoteList = function () {
    return this.notes;
  };

  NoteList.prototype.newNote = function (string) {
    note = new Note(string);
    this.addNote(note);
  };




  exports.NoteList = NoteList;
  exports.addNote = this.addNote;
})(this);
