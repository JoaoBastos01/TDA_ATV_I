import { Category, Product } from "../types/product";

export const categories: Category[] = [
  { id: "all", label: "Todos", icon: "sparkles-outline" },
  { id: "burger", label: "Burguers", icon: "fast-food-outline" },
  { id: "pizza", label: "Pizza", icon: "pizza-outline" },
  { id: "japanese", label: "Japones", icon: "fish-outline" },
  { id: "healthy", label: "Leve", icon: "leaf-outline" },
  { id: "dessert", label: "Doces", icon: "ice-cream-outline" },
];

export const products: Product[] = [
  {
    id: "burger-smash",
    name: "Smash duplo da casa",
    restaurant: "Brasa Burger",
    categoryId: "burger",
    categoryLabel: "Burguers",
    priceCents: 3290,
    originalPriceCents: 3890,
    rating: 4.8,
    deliveryTime: "25-35 min",
    deliveryFeeCents: 499,
    imageUri:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80",
    description:
      "Pao brioche tostado, dois smash burgers, queijo cheddar, cebola caramelizada e molho especial.",
    ingredients: ["Pao brioche", "Carne 160g", "Cheddar", "Cebola caramelizada"],
    badge: "Mais pedido",
  },
  {
    id: "pizza-margherita",
    name: "Pizza margherita individual",
    restaurant: "Forno 38",
    categoryId: "pizza",
    categoryLabel: "Pizza",
    priceCents: 4190,
    rating: 4.7,
    deliveryTime: "30-45 min",
    deliveryFeeCents: 699,
    imageUri:
      "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?auto=format&fit=crop&w=900&q=80",
    description:
      "Massa de longa fermentacao, molho artesanal, mussarela fresca, tomate e manjericao.",
    ingredients: ["Massa artesanal", "Mussarela", "Tomate", "Manjericao"],
    badge: "Artesanal",
  },
  {
    id: "poke-salmao",
    name: "Poke salmao tropical",
    restaurant: "Nori Fresh",
    categoryId: "japanese",
    categoryLabel: "Japones",
    priceCents: 4690,
    originalPriceCents: 5290,
    rating: 4.9,
    deliveryTime: "20-30 min",
    deliveryFeeCents: 0,
    imageUri:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=80",
    description:
      "Arroz japones, salmao, manga, pepino, edamame, gergelim e molho tarê da casa.",
    ingredients: ["Arroz japones", "Salmao", "Manga", "Edamame"],
    badge: "Entrega gratis",
  },
  {
    id: "salada-proteica",
    name: "Salada proteica",
    restaurant: "Verde no Pote",
    categoryId: "healthy",
    categoryLabel: "Leve",
    priceCents: 2990,
    rating: 4.6,
    deliveryTime: "15-25 min",
    deliveryFeeCents: 399,
    imageUri:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80",
    description:
      "Mix de folhas, frango grelhado, grao-de-bico, tomate cereja, cenoura e molho de iogurte.",
    ingredients: ["Folhas", "Frango", "Grao-de-bico", "Tomate cereja"],
  },
  {
    id: "brownie-sorvete",
    name: "Brownie com sorvete",
    restaurant: "Doce Esquina",
    categoryId: "dessert",
    categoryLabel: "Doces",
    priceCents: 2490,
    rating: 4.8,
    deliveryTime: "20-35 min",
    deliveryFeeCents: 599,
    imageUri:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=900&q=80",
    description:
      "Brownie de chocolate meio amargo servido com sorvete de baunilha e calda quente.",
    ingredients: ["Chocolate", "Sorvete", "Calda quente", "Castanhas"],
    badge: "Sobremesa",
  },
  {
    id: "combo-familia",
    name: "Combo familia crocante",
    restaurant: "Frango Urbano",
    categoryId: "burger",
    categoryLabel: "Burguers",
    priceCents: 6890,
    originalPriceCents: 7690,
    rating: 4.5,
    deliveryTime: "35-50 min",
    deliveryFeeCents: 799,
    imageUri:
      "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=900&q=80",
    description:
      "Tiras de frango crocante, batata rustica, dois molhos e refrigerante para compartilhar.",
    ingredients: ["Frango crocante", "Batata rustica", "Molhos", "Refrigerante"],
    badge: "Combo",
  },
];

export function getProductById(id: string | undefined) {
  return products.find((product) => product.id === id);
}

export function formatMoney(valueInCents: number) {
  return (valueInCents / 100).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}
