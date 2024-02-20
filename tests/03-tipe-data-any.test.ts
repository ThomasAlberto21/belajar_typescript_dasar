describe('Tipe data Any Tests', () => {
  it('any', () => {
    /**
     * - Saat kita menggunakan TypeScript, setiap jenis data idealnya ada deklarasi datanya
     * - Contoh saat kita ingin menggunakan tipe data JavaScript Object, idealnya harusnya ada ketentuan attribute yang dimilikinya, sedangkan di JavaScript hal itu tidak diwajibkan
     * - Pada kasus kita memang ingin membuat tipe data yang bebas seperti di JavaScript, kita bisa gunakan tipe data Any
     * - Tipe data Any tersebut menjadikan TypeScript tidak melakukan pengecekan apapun terhadap akses terhadap data tersebut
     */

    const person: any = {
      id: 1,
      name: 'Thomas',
      age: 20,
      hobbies: ['Membaca', 'Menulis', 'Menggambar'],
    };

    person.id = '1'; // tidak error, karena tipe data person adalah any
    console.log(person);
  });
});
