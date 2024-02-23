describe('If statement', () => {
  it('if statement', () => {
    /**
     * - Sama seperti di JavaScript, di TypeScript juga kita bisa melakukan if statement
     * - If statement di TypeScript sama seperti If statement di JavaScript
     */

    const examValue: number = 80;

    if (examValue >= 50) {
      console.log('You passed the exam');
    } else if (examValue < 50) {
      console.log('You failed the exam');
    } else {
      console.log('You did not take the exam');
    }
  });
});
