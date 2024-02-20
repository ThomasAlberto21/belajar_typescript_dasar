describe('Union Type Tests', () => {
  it('union type', () => {
    /**
     * - Seperti yang sudah kita tahu, JavaScript sebenarnya bisa menyimpan berbagai jenis tipe data di variabel yang sama
     * - Namun di TypeScript, hal itu dilarang karena praktek yang buruk
     * - Pada kasus jika kita ingin membuat variabel yang bisa berubah bentuk tipe data, kita bisa memberi tahunya menggunakan union type
     * - Secara otomatis TypeScript akan membolehkan kita mengubah tipe data, namun sesuai yang sudah ditentukan di union type nya
     */

    let sample: string | number | boolean = 'Thomas';
    console.log(sample);

    sample = 20; // Tidak error, karena tipe data yg boleh diterima variable sample adalah string | number | boolean
    console.log(sample);

    sample = true; // Tidak error, karena tipe data yg boleh diterima variable sample adalah string | number | boolean
    console.log(sample);

    // sample = []; // Error, karena tipe data yg boleh diterima variable sample adalah string | number | boolean dan tipe data array tidak termasuk
    // console.log(sample);
  });

  it('menggunakan union type di function', () => {
    /**
     * - Saat kita membuat Union Type, kita perlu berhati-hati ketika memanggil method terhadap variabel tersebut
     * - Hal ini karena tipe datanya bisa berubah, oleh karena itu ada baiknya kita melakukan pengecekan tipe data terlebih dahulu menggunakan typeof
     */

    function display(value: string | number | boolean) {
      if (typeof value === 'string') {
        return value.toUpperCase();
      } else if (typeof value === 'number') {
        return value + 2;
      } else {
        return !value;
      }
    }

    expect(display('Thomas')).toBe('THOMAS');
    expect(display(20)).toBe(22);
    expect(display(true)).toBe(false);
  });
});
