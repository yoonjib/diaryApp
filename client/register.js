  Template.register.events({
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
    },

    'click .js-signin':function(){
      Router.go('/');
    }
  });