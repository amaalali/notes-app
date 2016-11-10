(function(exports) {

    function NoteListView(noteList) {
        this.noteList = noteList;
    }

    NoteListView.prototype.noteLists = function() {
        return this.noteList;
    };

    NoteListView.prototype.printHtml = function() {
        var list = this.noteLists();
        var notearray = list.returnNoteList();
        var text = notearray.map(function(note) {
            return "<li><div>" + note.returnSnippet() + "</div></li>";
        });
        return "<ul>" + text.join("") + "</ul>";
    };

    exports.NoteListView = NoteListView;
})(this);
