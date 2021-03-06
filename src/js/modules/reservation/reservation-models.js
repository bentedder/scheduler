/*
	This is the model and collections area of the module.
	It's super simple. It just stores all the models and collections
	of the Reservation module. Notice how empty this page is? You really
	shouldn't ever need to mess with it...
*/
ptc.module("Reservation", function(Mod, App, Backbone){


	// Appointment Model and Collection ************************************
	Mod.Appt = Backbone.Model.extend({
		defaults: {
			studentID: "",
			studentName: "",
			teacherName: "",
			teacherLogon: "",
			startTime: "",
			endTime: "",
			familyCode: ""
		}
	});
	
	Mod.ApptCollection = Backbone.Collection.extend({
		model: Mod.Appt
	});
	
	
	// Student Model and Collection ****************************************
	Mod.Student = Backbone.Model.extend({
		defaults: {
			fullName: "",
			studentID: "",
			familyCode: ""
		}
	});
	
	Mod.StudentCollection = Backbone.Collection.extend({
		model: Mod.Student
	});
	
	// Teacher Model and Collection ****************************************
	Mod.Teacher = Backbone.Model.extend({
		defaults: {
			fullName: "",
			studentID: "",
			familyCode: ""
		}
	});
	
	Mod.TeacherCollection = Backbone.Collection.extend({
		model: Mod.Teacher
	});
	
	// Time Model and Collection ****************************************
	Mod.Time = Backbone.Model.extend({
		defaults: {
			startTime: "",
			endTime: ""
		}
	});
	
	Mod.TimeCollection = Backbone.Collection.extend({
		model: Mod.Time
	});

});