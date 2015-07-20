Router.route('/', function(){
	this.render('loginPage');
});

Router.onBeforeAction(function(){
	if(!Meteor.user()){
		this.redirect('/');
	}

	this.next();
});


Router.route('/myDiary', function(){

	if(!Meteor.userId()){
		this.render('/');
	}
	this.render('diary');
});

Router.route('/register', function(){
	this.render('register');
});
