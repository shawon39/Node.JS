

var squre = x => x*x ;
console.log(squre(9));

var user = {
    name : 'shawon',
    sayHi: () => {
        console.log(arguments);
        console.log(`Hi, ${this.name}`);
    },
    sayHiAlt () {
        console.log(arguments);
        console.log(`Hi, ${this.name}`);
    }
};
user.sayHi();
user.sayHiAlt();
