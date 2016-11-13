// var elem = document.getElementById("app");
// console.log(elem.innerHTML);
// elem.innerHTML = "howdy";

(function(exports) {

    function NoteController(notelist) {
      this.noteList = notelist || new NoteList();
      this.view = new NoteListView(notelist);
    }

    NoteController.prototype.newNote = function(text) {
      this.noteList.newNote(text);
    }

    NoteController.prototype.printHtml= function() {
      var elem = document.getElementById("app");
      elem.innerHTML = this.view.printHtml();
    }

  exports.NoteController = NoteController;
})(this);
