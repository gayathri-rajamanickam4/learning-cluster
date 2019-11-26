function person(firstname, lastname) {
  this.firstname;
  this.lastname;
}

person.prototype.getName = function() {
  return this.firstname + ' ' + this.lastname;
};

var p = new person('Gayathri', 'Gopalakrishnan');

// p.firstname = 'Gayathri';
// p.lastname = 'Rajamanickam';

let name = p.getName();

function employee(company) {
  this.company = company;
  person.call(this);
  Resident.call(this);
}

employee.prototype = Object.create(person.prototype);

let e1 = new employee('MindTree');

e1.firstname = 'Gayathri';
e1.lastname = 'Rajamanickam';

let eName = e1.getName();

console.log('ename is', e1.company);

function Resident(city) {
  this.city = 'city';
}

Object.assign(employee.prototype, Resident.prototype);

employee.prototype.constructor = employee;

let e2 = new employee('new');

console.log('instance of', e2 instanceof employee);
