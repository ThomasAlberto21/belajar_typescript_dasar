describe('Function di Parameter', () => {
  it('Function di Parameter', () => {
    /**
     * - Sama seperti di JavaScript, di TypeScript juga kita bisa gunakan Function sebagai parameter
     * - Hal ini sudah sering kita lakukan, biasanya ketika memanggil function yang membutuhkan callback function lainnya
     * - Pada TypeScript parameter yang berupa function, perlu kita beri tahu bahwa parameter tersebut adalah function
     * - Kita bisa gunakan Function Interface, atau bisa langsung sebutkan pada parameter nya, jumlah parameter dan return value function yang dibutuhkan
     */

    function sayHello(name: string, filter: (name: string) => string): string {
      return `Hello ${filter(name)}`;
    }

    function toUpperCase(name: string): string {
      return name.toUpperCase();
    }

    expect(sayHello('Ica', toUpperCase)).toBe('Hello ICA');
  });

  it('anonymous function', () => {
    /**
     * - Kita juga bisa gunakan anonymous function sebagai parameter
     * - Anonymous function adalah function yang tidak memiliki nama
     * - Anonymous function biasanya kita gunakan ketika kita hanya butuh function tersebut pada satu tempat saja
     */

    function sayHello(name: string, filter: (name: string) => string): string {
      return `Hello ${filter(name)}`;
    }

    expect(sayHello('Ica', (name: string) => name.toUpperCase())).toBe('Hello ICA');
  });
});
