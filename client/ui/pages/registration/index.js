Template.registration.helpers({
	coursesList(){
		return Courses.find().fetch();
	}
});

Template.courseRegister.events({
	'submit form':function(event){
		event.preventDefault();
		console.log("ww");
		var courseNameVar=event.target.courseName.value;
		var quotaVar=parseInt(event.target.quota.value);
		
		Meteor.call('insertCourse',courseNameVar,quotaVar,false);
	}
});

Template.registration.onRendered(function(){
  $('.modal').modal();
	
});