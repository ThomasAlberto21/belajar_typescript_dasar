describe('Intersection type', () => {
  it('intersection type', () => {
    /**
     * - Intersection type adalah kemampuan untuk menggabungkan dua atau lebih tipe data
     * - Dengan menggunakan simbol & kita bisa menggabungkan dua atau lebih tipe data
     */
    
    interface Employee {
      id: string;
      name: string;
      position: string;
    }

    interface Manager {
      numberOfEmployee: number;
    }

    // interface ManagerEmployee extends Employee, Manager {} // Tidak disarankan menggunakan interface karena kita perlu membuat properti baru yang tidak ada di Employee dan Manager. Sebaiknya menggunakan type

    type ManagerEmployee = Employee & Manager;

    const managerEmployee: ManagerEmployee = {
      id: 'MGR001',
      name: 'Alberto',
      position: 'Project Manager',
      numberOfEmployee: 5,
    };

    console.log(managerEmployee);
  });
});
