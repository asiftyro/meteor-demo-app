Meteor.methods({
    'insert': function(t, n) {
        if (Meteor.user()) {
            colThings.insert({ 'type': t, 'name': n });
        }
    }
});