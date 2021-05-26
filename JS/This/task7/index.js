'use strict';

const event = {
  text: 'Welcome to the party!',
  guests: [
    { name: 'John', age: 18, email: 'example@server.com' },
    { name: 'Bohn', age: 16, email: 'example1@server.com' },
    { name: 'Mohn', age: 51, email: 'example2@server.com' },
    { name: 'Tohn', age: 1, email: 'example3@server.com' },
  ],
  getInvitations() {
    return this.guests
      .filter(({ age }) => age >= 18)
      .map(({ name, email }) => ({
        email,
        message: `Dear ${name}! ${this.text}`,
      }));
  },
};

console.log(event.getInvitations());