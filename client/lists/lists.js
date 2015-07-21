Template.lists.events({
	'keyup .name': function(evt,t){
		if(evt.which ===13){ //when you enter 
			var name = t.find('.name').value;
			Lists.insert({name:name}); //put the name in the list in database
		}
	}
});

//Whenever someone calls out a list, we want to return that file
Template.lists.lists=function(){
	return Lists.find();
}

//If someone clicks the list, it returns the id of the list.
Template.listitem.events({
	'click .list': function(e,t){
		Session.set('listid',this._id);
	},

	'click .removelist':function(e,t){
		Lists.remove({_id:this._id});
	}
})