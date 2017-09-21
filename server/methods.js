Meteor.methods({
    updateCheck(bool,id){
    	Courses.update({ _id: id }, {$set:{check:bool}});
    },

    updateQuota(quota,id,number){
    	Courses.update({ _id: id }, { $inc: {quota:number}});
    },
    updateStudentName(studentNameVar,id){
    	Courses.update({_id:id},{$addToSet:{studentName:studentNameVar}});
    },
    insertCourse(courseNameVar,quotaVar,bool){
    	Courses.insert({name:courseNameVar,quota:quotaVar,check:bool});
    }
});	