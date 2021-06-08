console.log('Before');
getUser(1, user => {
getRepositories(user.gitHubUsername, repositories => {
getCommits(repositories[0], commits => {
console.log(commits);
});
});
});
console.log('After');

function displayCommits(commits) {
console.log(commits);
}

function getUser(id, callback) {
setTimeout(() => {
console.log(`Getting user from user id ${id}...`);
callback({id: id, gitHubUsername: 'Frank'});
}, 2000);
}

function getRepositories(username, callback) {
setTimeout(() => {
console.log(`Getting repositories from username ${username}...`);
callback(['repo1', 'repo2', 'repo3']);
}, 2000);
}

function getCommits(repository, callback) {
console.log(`Getting commits from repository ${repository}...`);
callback(['Commit 1', 'Commit 2', 'Commit 3']);
}