// cara benar menggunakan fungsi promise

const requestPromise = () => {
	return new Promise((resolve, reject) => {
		// kode yang berjalan secara async disini
		const time = Math.floor(Math.random() * 1000) + 500;
		setTimeout(() => {
			if (time > 6000) {
				reject('Error: Connection Timeout ' + time + 'ms');
			} else {
				resolve(`Success: doSomethingAsync (${time}ms)`);
			}
		}, time);
	});
};

requestPromise('movie.com')
	.then((result) => {
		console.log('page 1');
		console.log(result);
		return requestPromise('movie.com');
	})
	.then((result) => {
		console.log('page 2');
		console.log(result);
		return requestPromise('movie.com');
	})
	.then((result) => {
		console.log('page 3');
		console.log(result);
	})
	.catch((err) => {
		console.log(err);
	});