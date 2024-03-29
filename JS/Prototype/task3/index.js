function User(name, age) {
  this.name = name;
  this.age = age;
}

User.prototype.sayHi = function () {
  console.log(`Hi, I am ${this.name}`);
};

User.prototype.requestNewPhoto = function () {
  console.log(`New photo request was sent for ${this.name}`);
};

User.prototype.setAge = function (setNewAge) {
  if (setNewAge < 0) {
    return false;
  } else {
    if (setNewAge >= 25) {
      this.requestNewPhoto();
    }
    return (this.age = setNewAge);
  }
};

const user1 = new User('Bob', 18);

user1.sayHi();
user1.setAge(25);
