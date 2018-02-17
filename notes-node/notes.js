
//console.log('Starting notes.js');
console.log('\n');

// var addNote = (title, body) => {
//     console.log('Adding Note', title, body);
// };

const fs = require('fs');

var fetchNotes = () => {
    try {
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch (e) {
        //console.log(e);
        return [];
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

 var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title: title,
        body: body
        // sameThing
        //title,
        //body
    };
    //var duplicateNotes = notes.filter((note) => return note.title === title );
    //sameThing
    var duplicateNotes = notes.filter((note) => {
        return note.title === title;
    });

    if(duplicateNotes.length === 0){
        notes.push(note);
        saveNotes(notes);
        return note;
    }
 };

var getAll = () => {
        //console.log('Getting all notes');
        return fetchNotes();
};

var removeNote = (title) => {
        //console.log('Removing Note ', title);

        //fetch notes
        var notes = fetchNotes();
        // filter notes, Removing the one with titile of argument
        var filterNotes = notes.filter((note) => {
            return note.title !== title;
        });
        // save new notes array
        saveNotes(filterNotes);

        return notes.length !== filterNotes.length ;

};

var getNote = (title) => {
    //console.log('Reading note ', title);

    var notes = fetchNotes();
    var filterNotes = notes.filter((note) => {
        return note.title === title;
    });
    return filterNotes[0];
};

var logNote = (note) => {
    debugger;
    console.log('---');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
};

module.exports = {
    //addNote : addNote;
    addNote, // ES 6
    getAll,  // ES 6
    getNote,
    removeNote,
    logNote
};



/*
//console.log(module);

//module.exports.lol = 25;
module.exports.addNote = () => {
    console.log('addNote');
    return 'New Note';
};
*/


// module.exports.add = (a,b) => {
//     return (a+b);
// };
