Router.route('/', function(){
	if(!Meteor.user()){
		this.render('loginPage');
	}
	else{
		this.redirect('/myDiary');
	}
	
});


Router.route('/myDiary', function(){

	if(!Meteor.user()){
		this.redirect('/');
	}
	else{
		this.render('diary');
	}
});

Router.route('/register', function(){
	this.render('register');
});
