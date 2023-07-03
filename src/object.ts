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
