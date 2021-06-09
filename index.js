getUser(1, getRepositoriesByUser);

function displayCommits(commits) {
    console.log(commits);
}

function getCommitsByRepository(repositories) {
    getCommits(repositories[0], displayCommits);
}

function getRepositoriesByUser(user) {
    getRepositories(user.gitHubUsername, getCommitsByRepository);
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
        callback(['Repository 1', 'Repository 2', 'Repository 3']);
    }, 2000);
}

function getCommits(repository, callback) {
    setTimeout(() => {
        console.log(`Getting commits from repository ${repository}...`);
        callback(['Commit 1', 'Commit 2', 'Commit 3']);
    }, 2000);
}