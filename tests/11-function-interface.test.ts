describe('Function interface', () => {
  it('function interface', () => {
    /**
     * - Di TypeScript, kita juga bisa membuat deklarasi Function dalam bentuk Interface
     * - Dengan demikian ketika kita ingin membuat variabel yang berisi function, kita bisa dengan mudah menggunakan interface tersebut
     * - Kita bisa mendeklarasikan tipe data parameter dan tipe data return value pada function
     */

    interface Sum {
      (value1: number, value2: number): number;
    }

    const sum: Sum = (value1: number, value2: number): number => {
      return value1 + value2;
    };

    console.log(sum(1, 2));
  });
});
