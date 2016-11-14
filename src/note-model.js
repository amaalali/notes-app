(function(exports) {
    function Note(text){
      this.text = text;
    }

    Note.prototype.printText = function (){
      return this.text;
    };

    Note.prototype.printSummary = function () {
      return this.text.substring(0,20);
    };

    exports.Note = Note;
    exports.returnText = this.returnText;
})(this);
