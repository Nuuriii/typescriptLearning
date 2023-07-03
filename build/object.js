"use strict";
// Setelah membuat tipe data aliasnya, maka selanjutnya kita tinggal terapkan ke object yang ingin kita buat
const userInformation = {
    firstName: "Reza",
    lastName: "Setiawan",
    email: "reza@gmail.com",
    age: 19,
    isMarried: true,
    address: {
        street: "Jl.Slamet Riyadi",
        city: "Sukoharjo",
        state: "Indonesia",
    },
};
// Setelah menerapkannya ke object yang kita buat, maka selanjutnya kita tinggal simpan nilai properti object kita ke variabel
const userName = `${userInformation.firstName} ${userInformation.lastName}`;
const userEmail = userInformation.email;
const userAge = userInformation.age;
const userIsMarried = userInformation.isMarried
    ? "Sudah Menikah"
    : "Belum Menikah";
const userAddress = `${userInformation.address.street}, ${userInformation.address.city}, ${userInformation.address.state}`;
// Dan seperti biasanya, untuk mengecek output maka kita tampilkan nilai variabel ke konsol
console.log(`Nama: ${userName}`);
console.log(`Email: ${userEmail}`);
console.log(`Umur: ${userAge}`);
console.log(`Status: ${userIsMarried}`);
console.log(`Alamat: ${userAddress}`);
