Template.courses.events({
	'click .checkbox': function(event){

		Session.set('id', this._id);
		Session.set('quota', this.quota);
		Meteor.call('updateCheck',false,Session.get('id'));
		if(this.quota==0){
			event.target.checked==true;
				if(event.target.checked==true){
			Meteor.call('updateCheck',true,Session.get('id'));
			console.log(this.check);
		}
		else if(event.target.checked==false){
			Meteor.call('updateCheck',false,Session.get('id'));
			console.log(this.check);
		}
		if(event.target.checked==false){
			if(this.quota==0){
				
			}
			else{
				Meteor.call('updateQuota',this.quota,Session.get('id'),1);
			}

		}

		else if(event.target.checked==true){
			if(this.quota==0){
				Materialize.toast('Kontenjan dolu!', 4000);
			}
			else{
				Meteor.call('updateQuota',this.quota,Session.get('id'),-1);
			}
			
			
		}
		}
		else{
		if(event.target.checked==true){
			Meteor.call('updateCheck',true,Session.get('id'));
			console.log(this.check);
		}
		else if(event.target.checked==false){
			Meteor.call('updateCheck',false,Session.get('id'));
			console.log(this.check);
		}
		if(event.target.checked==false){
			if(this.quota==0){
				
			}
			else{
				//Courses.update({ _id: Session.get('id') }, { $inc: {quota:1}});
			}

		}

		else if(event.target.checked==true){
			if(this.quota==0){
				Materialize.toast('Kontenjan dolu!', 4000);
			}
			else{
				//Courses.update({ _id: Session.get('id') }, { $inc: {quota:-1}});
			}
			
			
		}
	}

	},

	
});

Template.register.events({
'submit form': function(event){
		event.preventDefault();
		var studentNameVar=event.target.studentName.value;
		var allElements = Courses.find();
		allElements.forEach(function(element){

			if(element.check==true){
				
				Meteor.call('updateStudentName',studentNameVar,element._id);
				
				Meteor.call('updateCheck',false,element._id);
				Meteor.call('updateQuota',this.quota,element._id,-1);
			}
		});
	
		

		studentNameVar="";
	}
});

Template.courses.helpers({
	coursesList(){
		var allElements = Courses.find().fetch();
		
			console.log(allElements[1]);
		return Courses.find().fetch();
	},
	makeFalse(){
		checked=false
	}
	

	
});

Template.courses.onRendered(function(){
  $('.modal').modal();
	
});