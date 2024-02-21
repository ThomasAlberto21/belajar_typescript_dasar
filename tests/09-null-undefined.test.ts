describe('Null and undefined type', () => {
  it('null and undefined type', () => {
    /**
     * - TypeScript memiliki tipe data null dan undefined
     * - Tipe data ini bisa digunakan untuk memberikan nilai null atau undefined pada variabel
     * - Secara default, tipe data null dan undefined adalah sub tipe dari semua tipe data, artinya kita bisa memberikan nilai null atau undefined pada variabel yang bertipe data apapun
     * - Saat kita menggunakan ? pada variabel atau parameter, secara otomatis kita bisa mengirim data undefined
     * - Tapi kadang, kadang, ada kasus kita juga ingin mengirim data null, pada kasus ini kita juga bisa menggunakan tipe data null
     */

    const sayHello = (name: string | null | undefined) => {
      if (name) {
        console.log(`Hello ${name}`);
      } else {
        console.log('Hello');
      }
    };

    sayHello('John');
    const name: string | null | undefined = undefined;
    sayHello(name);
  });
});
