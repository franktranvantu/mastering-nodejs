const resolvedPromise = Promise.resolve({id: 1, name: 'Frank'});
const rejectedPromise = Promise.reject(new Error('Rejected'));

resolvedPromise.then(result => console.log(result));
rejectedPromise.catch(error => console.error(error));