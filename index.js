let arr = [];


class Person {
    constructor (name) {
        this.name = name
    }

    show() {
        console.log(arr) 
    }
}

class Admin extends Person {
    constructor (name) {
        super(name)
    }

    add(added) {
        arr.push(added)
    }

    delete(del) {
        arr.splice(del)
    }
}

class User extends Person {
    constructor (name) {
        super(name)
    }
}

let admin = new Admin('Sam');
admin.add('Tofiq');
admin.show();


let user = new User('Andy');
console.log(user.name);
