"use strict";
describe('babel typescript', () => {
    it('should return string Thomas', () => {
        let nama = 'Thomas';
        expect(nama).toBe('Thomas');
    });
    it('should return number 20', () => {
        let umur = 20;
        expect(umur).toBe(20);
    });
    it('should return boolean false', () => {
        let isMarried = false;
        expect(isMarried).toBe(false);
    });
    it('should return null', () => {
        let alamat = null;
        expect(alamat).toBeNull();
    });
    it('should return undefined', () => {
        let jalan = undefined;
        expect(jalan).toBeUndefined();
    });
    // JIKA DILAKUKAN TEST DI BABEL NYA MAKA TIDAK TERJADI ERROR , TAPI JIKA DILAKUKAN COMPILER KODE TERSEBUT AKAN ERROR
    nama = 100;
    umur = '20';
    isMarried = 'false';
    alamat = 100;
    jalan = 'test';
});
