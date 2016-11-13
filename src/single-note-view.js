(function(exports) {
  function SingleNoteView(note) {
    this.note = note;
  }

  SingleNoteView.prototype.printNote = function() {
    var note = this.note;
    return "<div>" + note.printText() + "</div>";
  };

  exports.SingleNoteView = SingleNoteView;
})(this);
