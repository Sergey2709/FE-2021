/* eslint-disable max-classes-per-file */

class User {
  constructor(id, name, sessionId) {
    this._id = id;
    this._name = name;
    this._sessionId = sessionId;
  }
  get name() {
    return this._name;
  }

  get id() {
    return this._id;
  }

  get sessionId() {
    return this._sessionId;
  }
}

class UserRepository {
  constructor(arr) {
    this._users = arr;
  }

  get users() {
    return Object.freeze(this._users);
  }

  getUserNames() {
    let result = this.users.map(a => a._name);
    return result;
  }

  getUserIds() {
    let result = this.users.map(a => a._id);
    return result;
  }

  getUserNameById(id) {
    let nameUser = '';
    this.users.filter(a => {
      if (a._id === id) {
        nameUser = a._name;
        return nameUser;
      }
      
    });
    return nameUser;
  }
}

// examples
const user = new User('1', 'Tom', 'session-id');
console.log(user.id); // '1'
console.log(user.name); // 'Tom'
console.log(user.sessionId); // 'session-id'

// // но изменить эти свойства нельзя
user.name = 'Bob'; // пытаемся изменить старое значение
console.log(user.name); // 'Tom' - но изменение проигнорировано, так как setter отсутствует

const user1 = new User('1', 'Tom', 'session-id');
const user2 = new User('2', 'Bob', 'session-id');
const user3 = new User('4', 'Rob', 'session-id');
const user4 = new User('3', 'Tobby', 'session-id');

user3.name = "Sergey";
console.log(user3.name);

const userReposirory = new UserRepository([user1, user2, user3, user4]);

console.log(userReposirory.users);
console.log(userReposirory.getUserNames());
console.log(userReposirory.getUserIds());
console.log(userReposirory.getUserNameById('2'));
console.log(userReposirory.getUserNameById('4'));
console.log(userReposirory.getUserNameById('3'));
console.log(userReposirory.getUserNameById('1'));
