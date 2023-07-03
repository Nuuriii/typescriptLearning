// Objeck
// untuk membuat objek cara terbaiknya adalah kita lebih baik untuk membuat tipe data aliasnya terlebih dahulu
type User = {
   firstName: string;
   lastName: string;
   email: string;
   age: number;
   isMarried: boolean;
   address: {
      street: string;
      city: string;
      state: string;
   };
};

// Setelah membuat tipe data aliasnya, maka selanjutnya kita tinggal terapkan ke object yang ingin kita buat
const userInformation: User = {
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
const userName: string = `${userInformation.firstName} ${userInformation.lastName}`;
const userEmail: string = userInformation.email;
const userAge: number = userInformation.age;
const userIsMarried: string = userInformation.isMarried
   ? "Sudah Menikah"
   : "Belum Menikah";
const userAddress: string = `${userInformation.address.street}, ${userInformation.address.city}, ${userInformation.address.state}`;

// Dan seperti biasanya, untuk mengecek output maka kita tampilkan nilai variabel ke konsol
console.log(`Nama: ${userName}`);
console.log(`Email: ${userEmail}`);
console.log(`Umur: ${userAge}`);
console.log(`Status: ${userIsMarried}`);
console.log(`Alamat: ${userAddress}`);
