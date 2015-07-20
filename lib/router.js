Router.route('/', function(){
	this.render('loginPage');
});

Router.route('/myDiary', function(){

	if(!Meteor.userId()){
		this.render('loginPage');
	}
	this.render('diary');
});

