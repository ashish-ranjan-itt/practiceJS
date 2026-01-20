Promise.resolve(10)
  .then(value => {
    return new Promise(resolve => {
      setTimeout(() => resolve(value * 2), 1000);
    });
  })
  .then(value => {
    console.log(value);
  });
