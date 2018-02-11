
console.log('Starting notes.js');

var addNote = (title, body) => {
    console.log('Adding Note', title, body);
};

var getAll = () => {
        console.log('Getting all notes');
};

var removeNote = (title) => {
        console.log('Removing Note ', title);
};

var readNote = (title) => {
    console.log('Reading note ', title);
};

module.exports = {
    //addNote : addNote;
    addNote, // ES 6
    getAll,  // ES 6
    readNote,
    removeNote
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
