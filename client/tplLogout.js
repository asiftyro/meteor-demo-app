Template.tplLogout.events({
    "click .js-logout": function(){
        Meteor.logout();
    }
});