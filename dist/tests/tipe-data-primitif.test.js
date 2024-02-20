"use strict";
describe('tipe data primitif test', () => {
    it('should return string Thomas', () => {
        const nama = 'Thomas';
        expect(nama).toBe('Thomas');
    });
    it('should return number 20', () => {
        const umur = 20;
        expect(umur).toBe(20);
    });
    it('should return boolean false', () => {
        const isMarried = false;
        expect(isMarried).toBe(false);
    });
    it('should return null', () => {
        const alamat = null;
        expect(alamat).toBeNull();
    });
    it('should return undefined', () => {
        const jalan = undefined;
        expect(jalan).toBeUndefined();
    });
});
