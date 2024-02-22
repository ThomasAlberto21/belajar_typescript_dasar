describe('Function Parameter', () => {
  it('Function Parameter', () => {
    /**
     * - Sama seperti di JavaScript, function di TypeScript bisa memiliki banyak parameter, rest parameter (variable argument) sampai default value
     * - Fitur yang berbeda dengan JavaScript adalah, di TypeScript setiap parameter wajib diisi, kecuali kita tentukan sebagai optional menggunakan ? (tanda tanya)
     */

    // Terdapat default value pada parameter jika parameter tidak diisi
    function sayHello(name: string = 'Guest'): string {
      return `Hello, ${name}`;
    }

    expect(sayHello()).toBe('Hello, Guest'); // Output: Hello, Guest (default value)
    expect(sayHello('Ica')).toBe('Hello, Ica'); // Output: Hello, Ica
  });

  it('function rest parameter', () => {
    /**
     * - Rest parameter adalah parameter yang bisa menampung banyak value
     * - Rest parameter ditandai dengan tanda titik tiga kali (...)
     * - Rest parameter harus diletakkan di akhir parameter
     */

    function sum(...values: number[]): number {
      return values.reduce((acc, curr) => acc + curr, 0);
    }

    expect(sum(1, 2, 3, 4, 5)).toBe(15); // Output: 15
  });

  it('optional parameter', () => {
    /**
     * - Optional parameter adalah parameter yang tidak wajib diisi
     * - Optional parameter ditandai dengan tanda tanya (?)
     * - Optional parameter harus diletakkan di akhir parameter
     */

    function sayHello(name: string, age?: number): string {
      if (age) {
        return `Hello, my name is ${name}, I am ${age} years old`;
      } else {
        return `Hello, my name is ${name}`;
      }
    }

    expect(sayHello('Ica')).toBe('Hello, my name is Ica');
    expect(sayHello('Ica', 20)).toBe('Hello, my name is Ica, I am 20 years old'); // Output: Hello, my name is Ica, I am 20 years old
  });
});
