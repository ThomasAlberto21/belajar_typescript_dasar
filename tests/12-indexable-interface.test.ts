describe('Indexable interface', () => {
  it('indexable interface with number', () => {
    /**
     * - Di TypeScript, kita juga bisa membuat deklarasi Indexable dalam bentuk Interface
     * - Dengan demikian kita bisa membuat object dengan key yang dinamis
     * - Kita bisa mendeklarasikan tipe data key dan tipe data value pada indexable
     */

    interface StringArray {
      [index: number]: string;
    }

    const name: StringArray = ['Thomas', 'Alberto'];
    console.log(name[0]);
    console.log(name[1]);
  });

  it('indexable interface with string', () => {
    interface StringDictionary {
      [key: string]: string;
    }

    const dictionary: StringDictionary = {
      name: 'Thomas',
      age: '28',
    };

    console.log(dictionary.name);
    console.log(dictionary.age);
  });
});
