Template.tplBookList.onCreated(function() {
    var self = this;
    self.autorun(function() {
        self.subscribe('pubBook');
    });
}); 

Template.tplBookList.helpers({
    books: function () {
        return colThings.find();
    }
});