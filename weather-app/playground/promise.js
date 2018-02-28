

// var somePromise = new Promise((resolve, reject) =>{
//     resolve('Hey, it\'s worked!');
//     reject('Unable to fulfill promise!');
// });
//
// somePromise.then((message) => {
//     console.log('Success: ', message);
// }, (errorMessage) => {
//     console.log('Error: ', errorMessage);
// });


var asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        if(typeof a === 'number' && typeof b === 'number'){
            resolve(a + b);
        } else {
            reject('Arguments must be numbers!');
        }
    });
};

asyncAdd(5,6).then((results) => {
    console.log('Result 1: ', results);
    return asyncAdd(results, 32);
}).then((results) => {
    console.log('Result 2: ', results);
}).catch((error) => {
    console.log(error);
});

// asyncAdd(5,6).then((results) => {
//     console.log('Result 1: ', results);
//     return asyncAdd(results, 32);
// }, (error) => {
//     console.log(error);
// }).then((results) => {
//     console.log('Result 2: ', results);
// }, (error) => {
//     console.log(error);
// });


















//
