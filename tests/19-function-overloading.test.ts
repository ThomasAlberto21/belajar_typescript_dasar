describe('Function Overloading', () => {
  it('Function Overloading', () => {
    /**
     * - Function Overloading adalah kemampuan untuk membuat Function dengan nama yang sama, namun dengan parameter input yang berbeda
     * - Di JavaScript, membuat satu Function dengan input data yang berbeda dan output yang bisa menghasil data yang berbeda sudah biasa dilakukan
     * - Namun hal ini kadang bisa membuat sebuah Function tidak aman, karena bisa menghasilkan berbeda-beda tipe data.
     * - TypeScript memberikan kemampuan Function Overloading, agar pembuatan Function seperti ini lebih aman dilakukan
     */

    function callMe(value: number): number;
    function callMe(value: string): string;
    function callMe(value: any): any {
      if (typeof value === 'number') {
        return value * 2;
      } else {
        return `Hello, ${value}`;
      }
    }

    expect(callMe(10)).toBe(20); // Output: 20
    expect(callMe('Ica')).toBe('Hello, Ica'); // Output: Hello, Ica
  });
});
