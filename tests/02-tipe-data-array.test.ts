describe('Tipe data Array Tests', () => {
  it('array', () => {
    /**
     * TIPE DATA ARRAY
     * - Tipe data array di TypeScript juga sama seperti di JavaScript, cara pembuatannya dan penggunaannya
     * - Di TS tipe data Array bisa menggunakan tanda TipeData[] atau Array<TipeData>
     */

    const nama: string[] = ['Thomas', 'William', 'Smith']; // tipe data array yg isi nya adalah tipe data string
    const umur: number[] = [20, 21, 22]; // tipe data array yang isi nya adalah tipe data number

    console.log(nama);
    console.log(umur);
  });

  it('readonly array', () => {
    /**
     * READONLY ARRAY
     * - ReadonlyArray adalah array yang hanya bisa dibaca, tidak bisa diubah datanya
     */

    const hobbies: ReadonlyArray<string> = ['Membaca', 'Menulis', 'Menggambar'];
    console.log(hobbies);

    // hobbies[0] = 'Ngegame'; // error, karena array hobbies adalah readonly / hanya bisa dibaca tapi tidak bisa diganti data di dalam array nya
  });

  it('tuple', () => {
    /**
     * TUPLE
     * - Tuple adalah array yang isinya sudah ditentukan tipe datanya dan jumlah datanya
     * - Tuple bisa menggunakan tipe data [TipeData1, TipeData2, ...] atau Array<TipeData1, TipeData2, ...>
     * - Pada kasus tuple bersifat read only (tidak bisa diubah), kita bisa tambahkan kata kunci readonly
     */

    const biodata: readonly [string, number, boolean] = ['Thomas', 20, true];
    console.log(biodata);

    // biodata[0] = 20; // error, karena tuple biodata adalah readonly / hanya bisa dibaca tapi tidak bisa diganti data di dalam tuple nya
  });
});
