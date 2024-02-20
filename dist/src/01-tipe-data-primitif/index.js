"use strict";
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
const nama = 'Thomas'; // tipe data string
const umur = 20; // tipe data number
const isMarried = false; // tipe data boolean
const alamat = null; // tipe data null
const jalan = undefined; // tipe data undefined
console.log(nama);
console.log(umur);
console.log(isMarried);
console.log(alamat);
console.log(jalan);
