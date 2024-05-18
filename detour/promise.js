const promise = new Promise((resolve, reject) => {
  if (true) {
    resolve("promise fullfilled");
  } else {
    reject("promise rejected");
  }
});

// promise
//   .then((msg) => {
//     console.log(promise);
//     console.log(msg);
//   })
//   .catch((err) => {
//     console.log(promise);
//     console.log(err);
//   });

const onFullfilled = (msg) => {
  console.log(msg);
};
const onRejected = (err) => {
  console.log(err);
};

promise.then(onFullfilled).catch(onRejected);

