var person = {
  firstName: 'Derren',
  lastName: 'Pamintuan',
  hobby: 'gaming'
};
console.log(person);

var fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is:", fullName + '.');

person.job = 'Full-time student';
console.log("The person's current job is:", person.job + '.');

person.previousJob = 'Server';
console.log("The person's previous job is:", person.previousJob + '.');

console.log(person);
