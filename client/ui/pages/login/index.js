Template.login.helpers({
	accountList(){
		return Accounts.find().fetch();
	}
});

Template.userForm.events({
	'submit form':function(event){
		event.preventDefault();
		//console.log("ee");
		var nameVar= event.target.userName.value;
		var passwordVar=event.target.password.value;
		var allElements = Accounts.find();
		allElements.forEach(function(element){
			if(nameVar==element.userName && passwordVar==element.password){
				//console.log("ee");
				Router.go('/registration');
			}
		})
	}
});