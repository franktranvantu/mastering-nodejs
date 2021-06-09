// Asynchronous
console.log('Before');
getUser(1, user => {
    getRepositories(user.gitHubUsername, repositories => {
        getCommits(repositories[0], commits => {
            console.log(commits);
        });
    });
});
console.log('After');

// Synchronous
console.log('Before');
const user = getUser(1);
const repositories = getRepositories(user.gitHubUsername);
const commits = getCommits(repositories[0]);
console.log(commits);
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

function getCommits() {
    setTimeout(() => {
        console.log(`Getting commits from repository ${repository}...`);
        callback(['Commit 1', 'Commit 2', 'Commit 3']);
    }, 2000);
}