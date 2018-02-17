
//console.log('Starting app.js');


const fs = require('fs');
//const os = require('os');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js')

const titleOption ={
    describe: 'Title of note',
    demand: true,
    alias: 't'
}

const bodyOption = {
    describe: 'Body of note',
    demand: true,
    alias: 'b'
}

//const argv = yargs.argv;

const argv = yargs
    .command('add', 'Add a new note', {
        title: titleOption,
        body: bodyOption
    })
    .command('list', 'List all notes')
    .command('read', 'Read a note', {
        title: titleOption,
    })
    .command('remove', 'Remove a note', {
        title: titleOption
    })
    .help()
    .argv;

//var command = process.argv[2];
var command = argv._[0];

//console.log('command: ', command);
//console.log('Process: ', process.argv);
//console.log('Yargs: ', argv);

if(command === 'add' ) {
    //console.log('Adding new node');
    var note = notes.addNote(argv.title, argv.body);

    if( note ) {
        console.log('Note Created!');
        notes.logNote(note);
    } else {
        console.log('Note title taken!');
    }

} else if (command === 'list') {
    //console.log('Listing all notes');
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s)`);
    allNotes.forEach((note) => {
        notes.logNote(note);
    });

} else if (command === 'read') {
    //console.log('Reading note');
        var note = notes.getNote(argv.title);

        if( note ) {
            console.log('Note Found!');
            notes.logNote(note);
        } else {
            console.log('Note Not Found!');
        }

} else if (command === 'remove') {
    //console.log('Removing note');
    var noteRemoved = notes.removeNote(argv.title);

    // if( noteRemoved ) {
    //     console.log('Removed!');
    // } else {
    //     console.log('Note Not Found!');
    // }
    var message = noteRemoved ? 'Note was Removed' : 'Note Not Found';
    console.log(message);

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
