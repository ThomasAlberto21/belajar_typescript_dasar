describe('For Loop', () => {
  it('for i', () => {
    const fruits: string[] = ['apple', 'banana', 'cherry', 'date'];
    for (let i = 0; i < fruits.length; i++) {
      console.log(fruits[i]);
    }
  });

  it('for of', () => {
    const fruits: string[] = ['apple', 'banana', 'cherry', 'date'];
    for (const fruit of fruits) {
      console.log(fruit);
    }
  });

  it('for in', () => {
    const fruits: string[] = ['apple', 'banana', 'cherry', 'date'];
    for (const index in fruits) {
      console.log(fruits[index]);
    }
  });
});
