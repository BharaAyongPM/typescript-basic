//tipe data custom
type TemanType ={
  nama: string;
  isKampret :boolean;
  hutang?: number;
};

let temanKita: TemanType;

temanKita ={
  nama: "ilham",
  isKampret: true,
  hutang : 45_00,
};

console.log({ temanKita});