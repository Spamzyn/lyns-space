type Wig = {
  id: number;
  name: string;
  image: string;
  price: number;
  category: string;
  description: string;
  material: string;
  strCategory: string;
  strOrigin: string;
  strWigImage: string;
  strCareInstructions: string;
  strTip1?: string;
  strTip2?: string;
  strTip3?: string;
};

type CartItem = Wig & {
  quantity: number;
};

