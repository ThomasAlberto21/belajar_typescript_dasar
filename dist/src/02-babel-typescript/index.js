"use strict";
/**
 * Untuk menjalankan unit test, kita menggunakan Jest dan Babel
 * Banyak programmer TypeScript yang mengeluh ketika proses development, menggunakan TypeScript lebih lambat karena harus melakukan kompilasi terlebih dahulu
 * Oleh karena itu, @babel/typescript melakukan cara kompilasi nya dengan cara menghapus seluruh kode TypeScript dan menjadikan kode JavaScript, hal ini memang lucu, tapi inilah kenyataannya
 * Oleh karena itu, error TypeScript yang sering harusnya terjadi di Unit Test kadang tidak terjadi karena kode TypeScript dihapus oleh Babel
 * Oleh karena itu, kita harus secara regular melakukan pengecekan menggunakan perintah : npx tsc untuk memastikan tidak ada kode typescript yang error
 */
// CONTOH
let nama = 'Thomas'; // tipe data string
let umur = 20; // tipe data number
let isMarried = false; // tipe data boolean
let alamat = null; // tipe data null
let jalan = undefined; // tipe data undefined
// JIKA DILAKUKAN TEST DI BABEL NYA MAKA TIDAK TERJADI ERROR , TAPI JIKA DILAKUKAN COMPILER KODE TERSEBUT AKAN ERROR
// nama = 100
// umur = "thomas"
// isMarried = 100
// alamat = 100
// jalan = "test"
