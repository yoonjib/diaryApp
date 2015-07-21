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
	},

});

Template.listDiarys.diarys = function(){
	return Diarys.find({userId: Meteor.userId()});
}

/*Template.listDiarys.events({
	'keyup .title': function(evt,t){
		if(evt.which ===13){ //when you enter 
			var title = t.find('.title').value;
			Lists.insert({title:title}); //put the name in the list in database
		}
	}
});*/

//Whenever someone calls out a list, we want to return that file
/*Template.listDiarys.lists=function(){
	return Lists.find();
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