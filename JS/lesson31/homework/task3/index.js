const delay = millisec =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve('Done');
    }, millisec);
  });

// delay(3000);
