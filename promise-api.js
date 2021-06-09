const facebook = new Promise(resolve => {
    setTimeout(() => {
        console.log('Calling Facebook api...')
        resolve('Facebook');
    }, 2000);
});

const google = new Promise(resolve => {
    setTimeout(() => {
        console.log('Calling Google api...')
        resolve('Google');
    }, 2000);
});

// Promise.all([facebook, google])
//     .then(result => console.log(result));

Promise.race([facebook, google])
    .then(result => console.log(result));