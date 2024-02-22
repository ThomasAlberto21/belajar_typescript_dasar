describe('Type Assertions', () => {
  it('Type Assertions', () => {
    /**
     * - Kadang, kita sering berada pada situasi dimana kita tahu tipe data yang kita gunakan, namun TypeScript tidak tahu tipe data tersebut
     * - Biasanya pada kasus kita menggunakan kode dari JavaScript sehingga membuat return value nya berupa tipe data Any
     * - Pada kasus ini, kita bisa melakukan konversi ke tipe data yang kita mau menggunakan kata kunci as , Ini disebut dengan type assertions
     */

    interface Person {
      name: string;
      sayHello: (name: string) => string;
    }

    const person: any = {
      name: 'Thomas',
      age: 20,
    };

    const person2 = person as Person;
    console.log(person2.name);
  });
});
