describe('Enum type', () => {
  it('enum type', () => {
    /**
     * - TypeScript memiliki tipe data enum, yaitu tipe data yang nilainya sudah pasti
     * - Tipe data ini tidak dimiliki di JavaScript
     * - Secara default tipe data enum ini akan dikonversi menjadi string di JavasScript, namun bisa juga dikonversi menjadi number
     * - Secara default, enum di TypeScript akan dikonversi menjadi tipe data number
     * - Kadang kita ingin ubah dari number menjadi String, kita bisa lakukan hal itu ketika membuat enum nya
     */

    enum CustomerType {
      GOLD = 'GOLD', // Nilai default adalah 0, bisa diubah dengan memberikan nilai langsung
      SILVER = 'SILVER', // Nilai default adalah 1, bisa diubah dengan memberikan nilai langsung
      PLATINUM = 'PLATINUM', // Nilai default adalah 2, bisa diubah dengan memberikan nilai langsung
    }

    type Customer = {
      id: string;
      name: string;
      type: CustomerType;
    };

    const customer: Customer = {
      id: '123',
      name: 'John',
      type: CustomerType.GOLD,
    };

    console.log(customer);
  });
});
