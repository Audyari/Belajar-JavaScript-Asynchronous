const myPromise = new Promise((resolve, reject) => {
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  setTimeout(() => {
    if (randomNumber <= 5) {
      resolve(randomNumber);
    } else {
      reject(new Error(`Error: Angka terlalu besar, hasilnya adalah ${randomNumber}`));
    }
  }, 2000);
});

myPromise
  .then((result) => {
    console.log('Success:', result);
  })
  .catch((error) => {
    console.log('Error:', error.message);
  });
