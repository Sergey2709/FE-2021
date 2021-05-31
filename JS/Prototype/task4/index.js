'use strict';

const user = {
    firstName: 'John',
    lastName: 'Doe',
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    },
    set fullName(string) {
        const [firstName, lastName] = string.split(' ');
        this.firstName = firstName;
        this.lastName = lastName;
    },
};