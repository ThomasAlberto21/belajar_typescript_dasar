describe('Optional properties test', () => {
  it('optional properties', () => {
    /**
     * - Pada kasus tertentu, kita ingin membuat tipe data dengan properti yang opsional, kita bisa menggunakan tanda tanya (?) setelah nama properti nya
     * - Contoh: `address?: string;`
     */

    type Person = {
      id: string;
      name: string;
      address?: string;
    };

    const person: Person = {
      id: '123',
      name: 'John',
      address: 'Jakarta', // Bisa diisi atau tidak karena type nya opsional untuk properti address
    };

    console.log(person);
  });
});
