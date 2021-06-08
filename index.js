console.log('Before');
const user = getUser(1);
console.log(user);
console.log('After');

// Call backs
// Promises
// Async/await
function getUser(id) {
    setTimeout(() => {
        console.log('Reading a use from the database...');
        return {id: id, name: 'Frank'};
    }, 2000);
}