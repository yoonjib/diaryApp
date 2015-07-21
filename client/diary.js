Template.diary.events({
	'submit #diaryForm': function(evt){
		evt.preventDefault();
		var currentUserId= Meteor.userId();
		var title= $('#diaryTitle').val();
		var body= $('#diaryBody').val();
		Meteor.call('submitPost',title,body, currentUserId);
		//Lists.insert({title:title});
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

Template.diarys.titleLists=function(){
	return Diarys.find({_id:Session.get('listid')});
}

/*Template.diary.list=function(){
	console.log('listid');
	return Diarys.findOne({_id:Session.get('listid')});
	return Diarys.find({listid:Session.get('listid')});
}*/

//If someone clicks the list, it returns the id of the list.
Template.listitem.events({
	'click .list': function(e,t){
		Session.set('listid',this._id);
	},

	'click .removelist':function(e,t){
		Diarys.remove({_id:this._id});
	}
})