describe('Function di interface', () => {
  it('function di interface', () => {
    /**
     * - Di TypeScript, kita juga bisa membuat deklarasi Function dalam bentuk Interface
     * - Dengan demikian ketika kita ingin membuat variabel yang berisi function, kita bisa dengan mudah menggunakan interface tersebut
     * - Kita bisa mendeklarasikan tipe data parameter dan tipe data return value pada function
     */

    interface Person {
      name: string;
      sayHello: (name: string) => string;
    }

    const person: Person = {
      name: 'Thomas',
      sayHello: (name: string): string => {
        return `Hello, ${name} my name is ${person.name}`;
      },
    };

    console.log(person.sayHello('Ica'));
  });
});
