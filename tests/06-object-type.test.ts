describe('Object type', () => {
  it('tipe object', () => {
    /**
     * - Pada kasus yang sederhana, kadang membuat alias terlalu bertele-tele, kita juga bisa membuat tipe data JavaScript Object secara langsung dengan mendeklarasikan detail type nya ketika membuat  variabel nya
     * - Hal ini lebih sederhana dibandingkan membuat Type terlebih dahulu
     * - INGAT!! Hanya digunakan untuk kasus yang sederhana, jika kompleks lebih baik menggunakan Type
     */

    const person: { id: string; name: string } = {
      id: '123',
      name: 'John',
    };

    console.log(person);
  });
});
