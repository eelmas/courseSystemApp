Template.componentSideNav.helpers({
	courses(){
		return Courses.find().fetch();
	},
});