import yudy from "./images/people/yudy.jpg";
import aldy from "./images/people/aldy.jpeg";
import rafli from "./images/people/rafli.jpeg";
import ali from "./images/people/ali.jpeg";
import hilman from "./images/people/hilman.jpeg";
import linkedin from "./images/icon/linkedin.svg"
import instagram from "./images/icon/instagram.svg"
import facebook from "./images/icon/facebook.svg"

import f1_1 from "./images/furniture/1/1.jpg";
import f1_2 from "./images/furniture/1/2.jpg";
import f1_3 from "./images/furniture/1/3.jpg";
import f1_4 from "./images/furniture/1/4.jpg";
import f1_5 from "./images/furniture/1/5.jpg";
import f1_6 from "./images/furniture/1/6.jpg";

import f2_1 from "./images/furniture/2/1.jpg";
import f2_2 from "./images/furniture/2/2.jpg";
import f2_3 from "./images/furniture/2/3.jpg";
import f2_4 from "./images/furniture/2/4.jpg";

import f3_1 from "./images/furniture/3/1.jpg";
import f3_2 from "./images/furniture/3/2.jpg";
import f3_3 from "./images/furniture/3/3.jpg";
import f3_4 from "./images/furniture/3/4.jpg";

import f4_1 from "./images/furniture/4/1.jpg";
import f4_2 from "./images/furniture/4/2.jpg";
import f4_3 from "./images/furniture/4/3.jpg";
import f4_4 from "./images/furniture/4/4.jpg";



export const product = [
  {
    id: '1',
    nama: "Table Set – 4 Bench/Chair and 1 Coffee Table – Teak Root Coffee Table – Driftwood Coffee Table – Teak Wood Bench",
    gambar: [f1_1,f1_2,f1_3,f1_4,f1_5,f1_6],
    harga: ['2300', '2480', '2660'],
    spek: ['Height: 17.7 inches | Width : 31,4 inches', 'Height: 17.7 inches | Width : 39,3 inches', 'Height: 17.7 inches | Width : 47 inches'],
    slug: "wood-furniture"
  },
  {
    id: '2',
    nama: "Leaves Shape Carving - Teak Root Console Table – Natural Console Table – Teak Wood Console Table - Live Edge Table",
    gambar: [f2_1,f2_2,f2_3,f2_4],
    harga: ['2250'],
    spek: ['Width: 70.8 inches | Height: 31.4 inches | Depth: 17.7 inches'],
    slug: "wood-furniture"
  },
  {
    id: '3',
    nama: "Teak Root Bench – Driftwood Bench – Outdoor Furniture – Live Edge Table - Teak Wood Coffee Table",
    gambar: [f3_1,f3_2,f3_3,f3_4],
    harga: ['1950'],
    spek: ['Width: 70.8 inches | Height: 19.6 inches | Depth: 17.7 inches'],
    slug: "wood-furniture"
  },
  {
    id: '4',
    nama: "Black Square Teak Root Coffee Table – Natural Burl Coffee Table – Teak Wood Coffee Table",
    gambar: [f4_1,f4_2,f4_3,f4_4],
    harga: ['1350', '1650', '1950', '2250'],
    spek: ['Height: 17.7 inches | Width : 19.6 inches', 'Height: 17.7 inches | Width : 23.6 inches', 'Height: 17.7 inches | Width : 31.4 inches', 'Height: 17.7 inches | Width : 39.3 inches'],
    slug: "wood-furniture"
  },
  
];


export const people = [
  {
    nama: 'YUDY HADI WIBOWO',
    gambar: yudy,
    jabatan: 'Founder',
    quotes: "Integrity is an indicator of one's success and trust is built with good communication.",
    links: [
      {
        nama: 'linkedin',
        icon: linkedin,
        url: 'https://www.linkedin.com/in/yudyhadiwibowo/'
      },
      {
        nama: 'facebook',
        icon: facebook,
        url: 'https://www.facebook.com/yudyhadiwibowo/',
      },
      {
        nama: 'instagram',
        icon: instagram,
        url: 'http://www.instagram.com/yudyhadi'
      },
    ]
  },
  {
    nama: 'ALDY ALFARIDZY ASHARY',
    gambar: aldy,
    jabatan: 'Co-Founder',
    quotes: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    links: [
      {
        nama: 'linkedin',
        icon: linkedin,
        url: 'https://www.linkedin.com/in/aldyalfaridzy'
      },
      {
        nama: 'instagram',
        icon: instagram,
        url: 'http://www.instagram.com/dyyz7'
      },
    ]
  },
  {
    nama: 'MUHAMMAD RAFLI RAMADHAN',
    gambar: rafli,
    jabatan: 'Chief Technology Officer',
    quotes: "The more I read, the more I acquire, the more certain I am that I know nothing.",
    links: [
      {
        nama: 'linkedin',
        icon: linkedin,
        url: 'https://www.linkedin.com/in/raflidev/'
      },
      {
        nama: 'instagram',
        icon: instagram,
        url: 'http://www.instagram.com/raflidev'
      },
    ]
  },
  {
    nama: 'ALI RAFII MARZUKI',
    gambar: ali,
    jabatan: 'Chief Marketing Officer',
    quotes: "Some are born great, some achieve greatness, and some have greatness thrust upon them.",
    links: [
      {
        nama: 'instagram',
        icon: instagram, 
        url: 'https://www.instagram.com/alirafii.marzuki/'
      },
    ]
  },
  {
    nama: 'Hilman al hazmi',
    gambar: hilman,
    jabatan: 'Chief Marketing Officer',
    quotes: "Don't stop when you are tired. Stop when you are done!",
    links: [
      {
        nama: 'instagram',
        icon: instagram,
        url: 'https://www.instagram.com/hilmanhazmiii/'
      },
    ]
  },
  
]