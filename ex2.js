class User {
    name;
    age; 
    email;

    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }

    get name() {
        return this.name;
    }

    get age() {
        return this.age;
    }

    get email() {
        return this.email;
    }
}

const user = new User('Max', 31, 'max@test.com');
