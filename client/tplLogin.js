Template.tplLogin.onCreated(function() {
    this.resLogin = new ReactiveVar('Please enter your email and password to log in');
});


Template.tplLogin.events({
    "submit form": function(event, template) {
        event.preventDefault();
        var emailVar = event.target.loginEmail.value;
        var passwordVar = event.target.loginPassword.value;
        if (emailVar == '' || passwordVar == '') {
            template.resLogin.set('Email or Password field cannot be left empty');
        } else {
            Meteor.loginWithPassword(emailVar, passwordVar, function(error) {
                if (error) template.resLogin.set(error.reason);
            });
        }
    }
});


Template.tplLogin.helpers({
    resLogin: function() {
        return Template.instance().resLogin.get();
    }
});
