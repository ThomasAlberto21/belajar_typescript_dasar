describe('tipe data primitif test', () => {
  /**
   * TIPE DATA PRIMITIF
   * - String
   * - Number
   * - Boolean
   * - Null
   * - Undefined
   */

  /**
 * - Karena TypeScript adalah Strongly Type Language, oleh karena itu saat kita membuat variabel, kita harus menentukan tipe data variabel nya
 * - Dan jika kita sudah menentukan tipe datanya, kita tidak boleh mengubah variabel tersebut menjadi tipe data yang berbeda
 * - TypeScript bisa secara otomatis mendeteksi tipe data yang sedang digunakan, tapi kita juga bisa menentukan secara eksplisit menggunakan :
 const namaVariable : tipedata = value
 */

  it('should return string Thomas', () => {
    const nama: string = 'Thomas';
    expect(nama).toBe('Thomas');
  });

  it('should return number 20', () => {
    const umur: number = 20;
    expect(umur).toBe(20);
  });

  it('should return boolean false', () => {
    const isMarried: boolean = false;
    expect(isMarried).toBe(false);
  });

  it('should return null', () => {
    const alamat: null = null;
    expect(alamat).toBeNull();
  });

  it('should return undefined', () => {
    const jalan: undefined = undefined;
    expect(jalan).toBeUndefined();
  });
});
