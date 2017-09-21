Meteor.publish('courses', function() {
	try {
		return Courses.find({});
	} catch(err) {
		return this.ready();
	}
});

Meteor.publish('accounts', function() {
	try {
		return Accounts.find({});
	} catch(err) {
		return this.ready();
	}
});