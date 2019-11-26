(() => {
  //let counter = 0;

  (function add() {
    let counter = 0;
    {
      //var counter = 0;
      // let counter = 0;
      counter++;
      console.log('inside inside add::', counter);
    }
    counter++;
    console.log('inside add::', counter);
  })();

  //add();
  //add();
  console.log('outside add::', counter);
})();
