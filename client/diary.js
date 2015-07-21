Template.diary.events({
	'submit #diaryForm': function(evt){
		evt.preventDefault();
		var currentUserId= Meteor.userId();
		var title= $('#diaryTitle').val();
		var body= $('#diaryBody').val();
		if(title==''){
			alert('Please enter title');
			return false;
		}

		if(body==''){
			alert('Please enter your story :)');
			return false;
		}

		if(title=='' && body=''){
			alert('Please enter your title and your story :)');
			return false;
		}

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
		var result = confirm("Want to delete?");
		if (result) {
  			Diarys.remove({_id:this._id});
		}
		
	}
})