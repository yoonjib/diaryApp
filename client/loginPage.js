Template.loginPage.events({

  'click .js-signin' : function(e,t){
    e.preventDefault();

    var email = t.find('#login-email').value
      , password = t.find('#login-password').value;


    Meteor.loginWithPassword(email, password, function(err, reason){
      if(err){
        alert("Please double check your password and id");
      }

      else{
        Router.go('/myDiary');
      }

    });
    return false;
  },

  'click .social-login' : function(e){
   
    Meteor.loginWithFacebook({}, function (err) {
      if (err){
        Session.set('errorMessage', err.reason || 'Unknown error');
        console.log(err);  
      }
    });
    console.log("clicked");
  },

  'click .js-register' : function(e, t) {
      e.preventDefault();
      var email = t.find('#account-email').value
        , password = t.find('#account-password').value;

        // Trim and validate the input

      Accounts.createUser({email: email, password : password}, function(err){
          if (err) {
            alert("Double check your email: email is empty/ already existed !");
          } else {
            Router.go('/');
          }

        });

      return false;
    }

  
});