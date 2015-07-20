Template.loginPage.events({

  'click .js-signin' : function(e,t){
    e.preventDefault();

    var email = t.find('#login-email').value
      , password = t.find('#login-password').value;


    Meteor.loginWithPassword(email, password, function(err){
      if(err){
        console.log(err);
      }

      else{
        Router.go('/myDiary');
      }

    });
    return false;
  },

  'click .js-register': function(){
    Router.go('/myDiary');
  }

});