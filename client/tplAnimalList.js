Template.tplAnimalList.onCreated(function() {
    var self = this;
    self.autorun(function() {
        self.subscribe('pubAnimal');
    });
}); 

Template.tplAnimalList.helpers({
    animals: function () {
        return colThings.find();
    }
});