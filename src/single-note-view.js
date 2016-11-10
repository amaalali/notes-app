(function(exports) {

  function SingleNoteView(note) {
    this.note = note;
  }

  SingleNoteView.prototype.renderHTML = function () {
    return "<div>" + this.note.returnText() + "</div>";
  };

  exports.SingleNoteView = SingleNoteView;
})(this);
