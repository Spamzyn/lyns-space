import { assets } from '../assets';

const wigs = [
  {
    id: 1,
    name: "Classic Bob",
    image: assets.bob1,
    price: 129.99,
    category: "Bob Wigs",
    description: "A timeless bob wig that suits any face shape.",
    material: "Synthetic",
    strCategory: "Bob",
    strOrigin: "USA",
    strWigImage: assets.bob1,
    strCareInstructions: "Wash gently in cool water. Air dry on wig stand. Brush carefully when dry. Store on wig stand. Avoid heat styling.",
    strTip1: "Use wig-specific shampoo",
    strTip2: "Detangle from ends to roots",
    strTip3: "Store on a wig stand"
  },
  {
    id: 2,
    name: "Wavy Long",
    image: assets.long1,
    price: 159.99,
    category: "Long Wigs",
    description: "Beautiful long wavy wig for a glamorous look.",
    material: "Human Hair",
    strCategory: "Long",
    strOrigin: "Brazil",
    strWigImage: assets.long1,
    strCareInstructions: "Wash with sulfate-free shampoo. Condition thoroughly. Air dry or low heat. Style as desired. Deep condition monthly.",
    strTip1: "Use heat protectant",
    strTip2: "Deep condition regularly",
    strTip3: "Avoid sleeping in wig"
  },
  // Add more wigs following this pattern
];

export const getWigs = () => wigs;

export const getWigByName = (name) => wigs.find(wig => wig.name.toLowerCase() === name.toLowerCase());

export const getWigsByCategory = (category) => wigs.filter(wig => wig.category.toLowerCase() === category.toLowerCase());
