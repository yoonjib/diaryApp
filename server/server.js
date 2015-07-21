Meteor.methods({
	'submitPost': function(title, body, currentUserId){
		console.log(title);
		console.log(body);
		Diarys.insert({userId: currentUserId, title:title, body:body, createdAt: new Date()});
	}
})