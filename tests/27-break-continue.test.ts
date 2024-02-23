describe('Break and Continue', () => {
  it('should be able to use break statement', () => {
    let counter: number = 0;
    do {
      counter++;

      if (counter === 10) {
        break;
      }

      if (counter % 2 === 0) {
        continue;
      }

      console.log(counter);
    } while (true);
  });
});
