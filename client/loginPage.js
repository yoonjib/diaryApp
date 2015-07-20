Template.loginPage.events({

  'submit #login-form' : function(e,t){
    e.preventDefault();

    var email = t.find('#login-email').value
      , password = t.find('#login-password').value;


    Meteor.loginWithPassword(email, password, function(err){
      if(err){

      }

      else{
        Router.go('diary');
      }

    });
    return false;
  }
})