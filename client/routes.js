Router.route('/',{
	    name: 'home',
    	template: 'home',
  
    subscriptions: function(){
        return Meteor.subscribe('courses');
    }
});


Router.route('/registration',{
	    name: 'registration',
    	template: 'registration',
  		subscriptions: function(){
        return Meteor.subscribe('courses');
    },
    
}
    );





Router.route('/courses' ,{
	    name: 'courses',
    	template: 'courses',
  
    subscriptions: function(){
        return Meteor.subscribe('courses');
    }
});


Router.route('/login',{
	    name: 'login',
    	template: 'login',
  
    subscriptions: function(){
        return Meteor.subscribe('accounts');
    }
});


