export type Category = {
  id: string;
  label: string;
  icon: string;
};

export type Product = {
  id: string;
  name: string;
  restaurant: string;
  categoryId: string;
  categoryLabel: string;
  priceCents: number;
  originalPriceCents?: number;
  rating: number;
  deliveryTime: string;
  deliveryFeeCents: number;
  imageUri: string;
  description: string;
  ingredients: string[];
  badge?: string;
};
