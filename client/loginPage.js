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

  'click .js-register': function(){
    Router.go('/register');
  },

  'click .js-fblogin' : function(){
    ServiceConfiguration.configurations.update(
      { service: "facebook" },
      {
        $set: {
        appId: "406671079537309",
        loginStyle: "popup",
        secret: "6bfbf7f94e7dd385ae776c82d49f1e98"
        }
      },
      {upsert: true}
    );

    Meteor.loginWithFacebook({
      requestPermissions: ['user', 'public_repo']
    }, function (err) {
      if (err){
        Session.set('errorMessage', err.reason || 'Unknown error');
        console.log(err);  
      }
    });
    console.log("clicked");
  }

});