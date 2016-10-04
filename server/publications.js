Meteor.publish('pubAnimal', function() {
    return colThings.find({type:'animal'});
});

Meteor.publish('pubBook', function() {
    return colThings.find({type:'book'});
});
