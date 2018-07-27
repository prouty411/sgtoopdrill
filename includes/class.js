class Class{
	constructor(name){
		this.roster = [];
		this.name = name;
		this.grades= [];
	}
	addStudent(studentObject){
		this.roster.push(studentObject);
	}
	addGrade(studentObject,this,gradeObject){
		var grade = new Grade(studentObject,this,gradeObject);
		this.grades.push(grade);
		student.addClass(this);
		student.addGrade(gradeObject);
	}
}