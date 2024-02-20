describe('Type Alias Tests', () => {
  it('type alias', () => {
    /**
     * - Menggunakan tipe data Any sebenarnya tidak direkomendasikan
     * - Biasanya kita akan menggunakan tipe data Any, jika memang datanya kita gunakan misal dari library orang lain yang sudah tidak bisa diubah, atau memang ketika attribute nya tidak pasti datanya
     * - Pada kasus jika kita membuat tipe data JavaScript object sendiri, kita bisa membuat alias untuk struktur tipe data objectnya
     */

    type Category = {
      id: number;
      name: string;
    };

    type Product = {
      id: number;
      name: string;
      price: number;
      category: Category;
    };

    const category: Category = {
      id: 1,
      name: 'Electronic',
    };

    const product: Product = {
      id: 1,
      name: 'Laptop',
      price: 10000000,
      category: category,
    };

    // product.description = 'Laptop with 16GB RAM'; // Error, karena attribute description tidak ada di tipe data Product

    console.log(product);
    console.log(product.category);
  });

  it('type alias untuk union type', () => {
    /**
     * - Saat kita membuat Union Type, kita bisa membuat alias untuk union type tersebut
     * - Hal ini berguna jika kita ingin menggunakan union type tersebut di banyak tempat
     */

    type ID = string | number;

    type Category = {
      id: ID; // Menggunakan alias ID
      name: string;
    };

    type Product = {
      id: ID; // Menggunakan alias ID
      name: string;
      price: number;
      category: Category;
    };

    const category: Category = {
      id: 1, // Tidak error, karena tipe data ID bisa berupa string atau number
      name: 'Electronic',
    };

    const product: Product = {
      id: '1', // Tidak error, karena tipe data ID bisa berupa string atau number
      name: 'Laptop',
      price: 10000000,
      category: category,
    };

    console.log(product);
    console.log(product.category);
  });
});
