Template.diary.events({
	'submit #diaryForm': function(evt){
		evt.preventDefault();
		var currentUserId= Meteor.userId();
		var title= $('#diaryTitle').val();
		var body= $('#diaryBody').val();
		Meteor.call('submitPost',title,body, currentUserId);
	},

	'click .logout': function(evt){
		evt.preventDefault();
		Meteor.logout();
		Router.go('/');
	}	

});

Template.listDiarys.diarys = function(){
	return Diarys.find({userId: Meteor.userId()});
}

