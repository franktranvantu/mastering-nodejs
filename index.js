console.log('Before');
getUser(1, user => {
    console.log(user);
});
console.log('After');

function getUser(id, callback) {
    setTimeout(() => {
        console.log('Reading a use from the database...');
        callback({id: id, gitHubUsername: 'Frank'});
    }, 2000);
}