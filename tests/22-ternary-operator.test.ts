describe('Ternary operator', () => {
  it('ternary operator', () => {
    const value: number = 80;
    const result: string = value >= 50 ? 'You passed the exam' : 'You failed the exam';
    console.log(result); // Output: You passed the exam
  });
});
