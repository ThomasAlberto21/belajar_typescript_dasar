describe('Extending interface', () => {
  it('extending interface', () => {
    /**
     * - Interface bisa melanjutkan (extends) ke Interface lain
     * - Secara otomatis attribute Interface yang dilanjutkan dimiliki juga oleh interface tersebut
     * - Ini membuat kita lebih mudah ketika membuat tipe data yang kompleks
     */

    interface Employee {
      id: string;
      name: string;
      position: string;
    }

    interface Manager extends Employee {
      // Semua properti dari Employee akan diwariskan ke Manager dan terdapat properti tambahan yaitu numberOfEmployee
      numberOfEmployee: number;
    }

    const employee: Employee = {
      id: 'EMP001',
      name: 'Thomas',
      position: 'Software Engineer',
    };

    console.log(employee);

    const manager: Manager = {
      id: 'MGR001',
      name: 'Alberto',
      position: 'Project Manager',
      numberOfEmployee: 5,
    };

    console.log(manager);
  });
});
