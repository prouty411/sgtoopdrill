class Class{
	constructor(name){
		this.roster = [];
		this.name = name;
		this.grades= [];
	}
	addStudent(studentObject){
		this.roster.push(studentObject);
	}
	addGrade(studentObject,this,gradeLetter){
		var grade = new Grade(studentObject,this,gradeLetter);
		this.grades.push(grade);
		student.addClass(this);
		student.addGrade(gradeLetter);
	}
}