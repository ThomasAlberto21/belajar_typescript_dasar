describe('Interface type', () => {
  it('interface type', () => {
    /**
     * - Interface adalah cara lain melakukan deklarasi data selain menggunakan Type
     * - Interface bisa dikembangkan dengan mudah dibanding dengan Type
     * - Oleh karena itu, kebanyakan untuk tipe data yang kompleks, kebanyakan programmer TypeScript akan menggunakan Interface dibandingkan menggunakan Type
     * - Properties dapat kita jadikan readonly, yang artinya tidak bisa diubah lagi
     * - Properties juga bisa kita jadikan opsional dengan menambahkan tanda tanya (?) setelah nama properti nya
     * - Kita bisa menggunakan kata kunci readonly pada attribute tersebut
     */

    interface Person {
      id: string;
      name: string;
      address?: string;
      readonly age?: number; // readonnly? adalah Data setelah diinisialisasi tidak bisa diubah dan opsional
      readonly nib: string; // readonnly adalah Data setelah diinisialisasi tidak bisa diubah
      readonly npwp: string; // readonnly adalah Data setelah diinisialisasi tidak bisa diubah
    }

    const person: Person = {
      id: '123',
      name: 'John',
      address: 'Jakarta',
      age: 20, // Bisa diisi atau tidak karena type nya opsional untuk properti age
      nib: '1234567890',
      npwp: '09876543212',
    };

    console.log(person);
  });
});
