var list = new NoteList();
var controller = new NoteController(list);
controller.newNote("I need to buy beer");
controller.newNote("I need to buy 99 bottles of rum");
controller.printHtml();
