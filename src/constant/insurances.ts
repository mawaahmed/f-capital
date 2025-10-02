import logo1 from "@/assets/assurances/axa.png";
import logo2 from "@/assets/assurances/global.jpg";
import logo3 from "@/assets/assurances/secu.jpg";
import logo4 from "@/assets/assurances/ltd.png";

export type Transaction = {
  saleId: string;
  date: string;
  soldPart: string;
  vehicle: string;
  referencePrice: string;
  salePrice: string;
  buyer: string;
  status: "Delivered" | "In transit" | "Pre-order";
};

export type Insurance = {
  id: number;
  name: string;
  city: string;
  phone: string;
  logo: string;
  transactions: Transaction[];
};

export const insurances: Insurance[] = [
  {
    id: 1,
    name: "AXA Insurance",
    city: "Douala",
    phone: "+237 699 99 99 99",
    logo: logo1,
    transactions: [
      {
        saleId: "V-20250904",
        date: "Sept 2,2025",
        soldPart: "Front Bumper",
        vehicle: "Toyota Corolla 2018",
        referencePrice: "150,000 XAF",
        salePrice: "180,000 XAF",
        buyer: "Samuel Lobe",
        status: "Delivered",
      },
      {
        saleId: "V-20250902",
        date: "Aug 30,2025",
        soldPart: "Right Mirror",
        vehicle: "Peugeot 508 2019",
        referencePrice: "60,000 XAF",
        salePrice: "90,000 XAF",
        buyer: "Essimi Loic",
        status: "In transit",
      },

    ],
  },
  {
    id: 2,
    name: "Alpha Insurance Ltd.",
    city: "Buea",
    phone: "+237 699 99 99 99",
    logo: logo2,
    transactions: [
      {
        saleId: "V-20250903",
        date: "Oct 12,2025",
        soldPart: "Front Bumper",
        vehicle: "Toyota Corolla 2018",
        referencePrice: "150,000 XAF",
        salePrice: "180,000 XAF",
        buyer: "Samuel Lobe",
        status: "Delivered",
      }
    ],
  },
  {
    id: 3,
    name: "Secu Insurance",
    city: "Douala",
    phone: "+237 699 99 99 99",
    logo: logo3,
    transactions: [
      {
        saleId: "V-20250904",
        date: "Sept 2,2025",
        soldPart: "Front Bumper",
        vehicle: "Toyota Corolla 2018",
        referencePrice: "150,000 XAF",
        salePrice: "180,000 XAF",
        buyer: "Samuel Lobe",
        status: "Delivered",
      }
    ],
  },
  {
    id: 4,
    name: "Life Insurance",
    city: "Douala",
    phone: "+237 699 99 99 99",
    logo: logo4,
    transactions: [
      {
        saleId: "V-20250904",
        date: "Sept 2,2025",
        soldPart: "Front Bumper",
        vehicle: "Toyota Corolla 2018",
        referencePrice: "150,000 XAF",
        salePrice: "180,000 XAF",
        buyer: "Samuel Lobe",
        status: "Delivered",
      }
    ],
  },
];
