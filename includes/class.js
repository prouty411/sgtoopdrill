class Class{
	constructor(name){
		this.roster = [];
		this.name = name;
		this.grades= [];
	}
	addStudent(studentObject){
		this.roster.push(studentObject);
	}
}