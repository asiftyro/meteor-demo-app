FlowRouter.route('/', {
    action: function(params, queryParams) {
        BlazeLayout.render('tplMainLayout', {regMenu: 'tplMenu', regContent: 'tplHome'});
    }
});

FlowRouter.route('/booklist', {
    action: function(params, queryParams) {
        BlazeLayout.render('tplMainLayout', {regMenu: 'tplMenu', regContent: 'tplBookList'});
    }
});

FlowRouter.route('/animallist', {
    action: function(params, queryParams) {
        BlazeLayout.render('tplMainLayout', {regMenu: 'tplMenu', regContent: 'tplAnimalList'});
    }
});

FlowRouter.route('/animallist/:animalName', {
    action: function(params, queryParams) {
        console.log(params.animalName);
        BlazeLayout.render('tplMainLayout', {regMenu: 'tplMenu', regContent: 'tplSingleAnimal'});
    }
});



