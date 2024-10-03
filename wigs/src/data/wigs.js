const wigs = [
  {
    id: 1,
    name: "Classic Bob",
    image: "classic-bob.jpg",
    price: 129.99,
    category: "Short",
    description: "A timeless bob wig that suits any face shape."
  },
  {
    id: 2,
    name: "Long Wavy",
    image: "long-wavy.jpg",
    price: 159.99,
    category: "Long",
    description: "Beautiful long wavy wig for a glamorous look."
  },
  {
    id: 3,
    name: "Pixie Cut",
    image: "pixie-cut.jpg",
    price: 99.99,
    category: "Short",
    description: "Chic and modern pixie cut wig for a bold style."
  },
  // Add more wig objects as needed
];

export const getWigs = () => wigs;

export const getWigByName = (name) => wigs.find(wig => wig.name.toLowerCase() === name.toLowerCase());

export const getWigsByCategory = (category) => wigs.filter(wig => wig.category.toLowerCase() === category.toLowerCase());
