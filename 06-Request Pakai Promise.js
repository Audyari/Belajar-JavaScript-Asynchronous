
// Promise version
const requestPromise = (url) => {
	const delay = Math.floor(Math.random() * 4500) + 500;
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (delay > 2000) {
				reject('Error: Connection Timeout ' + delay + 'ms');
			} else {
				resolve(`Success: ${url} (${delay}ms)`);
			}
		}, delay);
	});
};

requestPromise('https://jsonplaceholder.typicode.com/posts/1')
	.then((res) => console.log(res))
	.catch((err) => console.error(err));


