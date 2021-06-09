// getUser(1, user => {
//     getRepositories(user.gitHubUsername, repositories => {
//         getCommits(repositories[0], commits => {
//             console.log(commits);
//         });
//     });
// });

getUser(1)
    .then(user => getRepositories(user.gitHubUsername))
    .then(repositories => getCommits(repositories[0]))
    .then(commits => console.log(commits))
    .catch(error => console.error(error));

function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Getting user from user id ${id}...`);
            resolve({id: id, gitHubUsername: 'Frank'});
        }, 2000);
    });
}

function getRepositories(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Getting repositories from username ${username}...`);
            resolve(['repo1', 'repo2', 'repo3']);
        }, 2000);
    })
}

function getCommits(repository) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Getting commits from repository ${repository}...`);
            resolve(['Commit 1', 'Commit 2', 'Commit 3']);
        }, 2000);
    })
}