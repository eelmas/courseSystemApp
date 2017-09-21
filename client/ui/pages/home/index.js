Template.home.helpers({
	coursesList(){
		return Courses.find().fetch();
	}
});