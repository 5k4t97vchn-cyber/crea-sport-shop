export type CategoryId =
  | "tshirts"
  | "tshirts-humour"
  | "body-bebe"
  | "tshirts-enfants"
  | "maillots-foot"
  | "ballons"
  | "serviettes"
  | "casquettes"
  | "basket-adulte"
  | "basket-enfant"
  | "mugs"
  | "tote-bags";

export type Product = {
  id: string;
  name: string;
  tagline: string;
  price: number;
  image: string;
  category: CategoryId;
  sizes?: string[];
  isNew?: boolean;
  customizable?: boolean;
  comingSoon?: boolean;
};

export const CATEGORIES: { id: CategoryId; label: string }[] = [
  { id: "tshirts", label: "T-shirts" },
  { id: "tshirts-humour", label: "T-shirts humour" },
  { id: "body-bebe", label: "Body bébé" },
  { id: "tshirts-enfants", label: "T-shirts enfants" },
  { id: "maillots-foot", label: "Maillots de foot" },
  { id: "ballons", label: "Ballons" },
  { id: "serviettes", label: "Serviettes" },
  { id: "casquettes", label: "Casquettes" },
  { id: "basket-adulte", label: "Basket adulte" },
  { id: "basket-enfant", label: "Basket enfant" },
  { id: "mugs", label: "Mugs" },
  { id: "tote-bags", label: "Tote bags" },
];

const TEXTILE_SIZES = ["XS", "S", "M", "L", "XL", "XXL"];
const KIDS_SIZES = ["2 ans", "4 ans", "6 ans", "8 ans", "10 ans", "12 ans"];
const BABY_SIZES = ["3 mois", "6 mois", "12 mois", "18 mois", "24 mois"];

// URLs Unsplash de qualité premium - Produits sportifs
const UNSPLASH_TSHIRT =
  "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80";
const UNSPLASH_JERSEY =
  "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80";
const UNSPLASH_BASKET =
  "https://images.unsplash.com/photo-1624526267942-ab67cb38121d?w=800&q=80";
const UNSPLASH_FOOTBALL =
  "https://images.unsplash.com/photo-1540747913ee00df4caf20f292a4c3b09e38a89a8?w=800&q=80";
const UNSPLASH_MUG =
  "https://images.unsplash.com/photo-1514432324607-2e467f4af445?w=800&q=80";
const UNSPLASH_CAP =
  "https://images.unsplash.com/photo-1584622281867-8d5c814409f7?w=800&q=80";

export const PRODUCTS: Product[] = [
  {
    id: "tshirt-sport-blanc",
    name: "T-shirt sport personnalisé blanc",
    tagline: "Textile premium personnalisable",
    price: 29.9,
    image: UNSPLASH_TSHIRT,
    category: "tshirts",
    sizes: TEXTILE_SIZES,
    customizable: true,
    isNew: true,
  },
  {
    id: "tshirt-sport-noir",
    name: "T-shirt sport personnalisé noir",
    tagline: "Style sobre et sportif",
    price: 32.9,
    image: UNSPLASH_TSHIRT,
    category: "tshirts",
    sizes: TEXTILE_SIZES,
    customizable: true,
  },
  {
    id: "tshirt-humour-apero",
    name: "T-shirt humour Team Apéro Sport",
    tagline: "Humour sportif",
    price: 24.9,
    image: UNSPLASH_TSHIRT,
    category: "tshirts-humour",
    sizes: TEXTILE_SIZES,
    isNew: true,
  },
  {
    id: "body-bebe-champion",
    name: "Body bébé futur champion",
    tagline: "Cadeau naissance",
    price: 19.9,
    image: UNSPLASH_TSHIRT,
    category: "body-bebe",
    sizes: BABY_SIZES,
    customizable: true,
  },
  {
    id: "tshirt-enfant-mini-star",
    name: "T-shirt enfant Mini Star",
    tagline: "Pour les jeunes sportifs",
    price: 22.9,
    image: UNSPLASH_TSHIRT,
    category: "tshirts-enfants",
    sizes: KIDS_SIZES,
    customizable: true,
  },
  {
    id: "maillot-foot-personnalise",
    name: "Maillot de foot personnalisé",
    tagline: "Nom et numéro bientôt disponibles",
    price: 44.9,
    image: UNSPLASH_JERSEY,
    category: "maillots-foot",
    sizes: TEXTILE_SIZES,
    customizable: true,
    isNew: true,
  },
  {
    id: "ballon-foot-training",
    name: "Ballon de foot entraînement",
    tagline: "Club et loisir",
    price: 24.9,
    image: UNSPLASH_FOOTBALL,
    category: "ballons",
  },
  {
    id: "ballon-basket-orange",
    name: "Ballon de basket grip",
    tagline: "Indoor / outdoor",
    price: 29.9,
    image: UNSPLASH_BASKET,
    category: "ballons",
  },
  {
    id: "serviette-sport",
    name: "Serviette sport personnalisable",
    tagline: "Salle, plage ou entraînement",
    price: 21.9,
    image: UNSPLASH_TSHIRT,
    category: "serviettes",
    customizable: true,
  },
  {
    id: "casquette-sport",
    name: "Casquette sport ajustable",
    tagline: "Style sportif premium",
    price: 19.9,
    image: UNSPLASH_CAP,
    category: "casquettes",
    sizes: ["Unique"],
  },
  {
    id: "maillot-basket-adulte",
    name: "Maillot de basket adulte",
    tagline: "Respirant et léger",
    price: 39.9,
    image: UNSPLASH_JERSEY,
    category: "basket-adulte",
    sizes: TEXTILE_SIZES,
  },
  {
    id: "maillot-basket-enfant",
    name: "Maillot de basket enfant",
    tagline: "Coupe enfant",
    price: 34.9,
    image: UNSPLASH_JERSEY,
    category: "basket-enfant",
    sizes: KIDS_SIZES,
  },
  {
    id: "mug-personnalise",
    name: "Mug personnalisé",
    tagline: "Personnalisation disponible",
    price: 14.9,
    image: UNSPLASH_MUG,
    category: "mugs",
    customizable: true,
    isNew: true,
  },
  {
    id: "mug-supporter",
    name: "Mug supporter",
    tagline: "Idéal cadeau sportif",
    price: 16.9,
    image: UNSPLASH_MUG,
    category: "mugs",
  },
  {
    id: "tote-bag-personnalise",
    name: "Tote bag personnalisé",
    tagline: "Personnalisation bientôt disponible",
    price: 18.9,
    image: UNSPLASH_TSHIRT,
    category: "tote-bags",
    customizable: true,
    comingSoon: true,
  },
];
