
console.log('Starting app.js');

const fs = require('fs');
//const os = require('os');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js')


const argv = yargs.argv;
var command = process.argv[2];
console.log('command: ', command);
//console.log('Process: ', process.argv);
console.log('Yargs: ', argv);

if(command === 'add' ) {
    //console.log('Adding new node');
    notes.addNote(argv.title, argv.body);
} else if (command === 'list') {
    //console.log('Listing all notes');
    notes.getAll();
} else if (command === 'read') {
    //console.log('Reading note');
    notes.readNote(argv.title);
} else if (command === 'remove') {
    //console.log('Removing note');
    notes.removeNote(argv.title);
} else {
    console.log('Command not recognized');
}



//var user = os.userInfo();
//console.log(user);

// fs.appendFile('greetings.txt', 'Hello ' + user.username + '!');

//fs.appendFileSync('greetings.txt', `Hello ${user.username} ! Lol = ${notes.lol}`); // Another way !! latest!

/*
fs.appendFile('greetings.txt', `Hello ${user.username} !`, function(err) {
    if(err) {
        console.log('Unable to write to file!');
    }
});

var res = notes.addNote();
console.log(res);

var add =  notes.add(4,5);
console.log('Result: ' + add);
*/

//console.log(_.isString(true));
//console.log(_.isString('Shawon'));

//var filterArray = _.uniq(['Shawon', 'Shawon',5]);
//console.log(filterArray);
