console.log('Before');
getUser(1, user => {
    console.log(user);
    getRepositories(user.gitHubUsername, repositories => {
        console.log(repositories);
    });
});
console.log('After');

function getUser(id, callback) {
    setTimeout(() => {
        console.log('Reading a use from the database...');
        callback({id: id, gitHubUsername: 'Frank'});
    }, 2000);
}

function getRepositories(username, callback) {
    setTimeout(() => {
        console.log('Calling git hub api...');
        callback(['repo1', 'repo2', 'repo3']);
    }, 2000);
}