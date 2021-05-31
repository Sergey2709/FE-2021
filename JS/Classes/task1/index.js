// написать конструктор, кот. создает пользователей с определеннніми возможностями
// 1. для решения использовать классы.
// 2. User принимает имя и возраст.

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  static createEmpty() {
    return new User('', null);
  }

  sayHi() {
    console.log(`Hi, I am ${this.name}`);
  }

  requestNewPhoto() {
    console.log(`New photo request was sent for ${this.name}`);
  }

  setAge(value) {
    if (value < 0) {
      return false;
    } else {
      if (value >= 25) {
        this.requestNewPhoto();
      }
      return (this.age = value);
    }
  }
}

const user1 = new User('Bob', 18);

user1.sayHi();
user1.setAge(25);
user1.sayHi();
user1.setAge(29);
console.log(User.createEmpty());
user1.sayHi();
