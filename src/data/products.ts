import tshirt from "@/assets/product-tshirt.jpg";
import jersey from "@/assets/product-jersey.jpg";
import basket from "@/assets/product-basket.jpg";
import foot from "@/assets/product-foot.jpg";
import mug from "@/assets/product-mug.jpg";
import cap from "@/assets/product-cap.jpg";

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

export const PRODUCTS: Product[] = [
  {
    id: "tshirt-sport-blanc",
    name: "T-shirt sport personnalisé blanc",
    tagline: "Textile premium personnalisable",
    price: 29.9,
    image: tshirt,
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
    image: tshirt,
    category: "tshirts",
    sizes: TEXTILE_SIZES,
    customizable: true,
  },
  {
    id: "tshirt-humour-apero",
    name: "T-shirt humour Team Apéro Sport",
    tagline: "Humour sportif",
    price: 24.9,
    image: tshirt,
    category: "tshirts-humour",
    sizes: TEXTILE_SIZES,
    isNew: true,
  },
  {
    id: "body-bebe-champion",
    name: "Body bébé futur champion",
    tagline: "Cadeau naissance",
    price: 19.9,
    image: tshirt,
    category: "body-bebe",
    sizes: BABY_SIZES,
    customizable: true,
  },
  {
    id: "tshirt-enfant-mini-star",
    name: "T-shirt enfant Mini Star",
    tagline: "Pour les jeunes sportifs",
    price: 22.9,
    image: tshirt,
    category: "tshirts-enfants",
    sizes: KIDS_SIZES,
    customizable: true,
  },
  {
    id: "maillot-foot-personnalise",
    name: "Maillot de foot personnalisé",
    tagline: "Nom et numéro bientôt disponibles",
    price: 44.9,
    image: jersey,
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
    image: foot,
    category: "ballons",
  },
  {
    id: "ballon-basket-orange",
    name: "Ballon de basket grip",
    tagline: "Indoor / outdoor",
    price: 29.9,
    image: basket,
    category: "ballons",
  },
  {
    id: "serviette-sport",
    name: "Serviette sport personnalisable",
    tagline: "Salle, plage ou entraînement",
    price: 21.9,
    image: tshirt,
    category: "serviettes",
    customizable: true,
  },
  {
    id: "casquette-sport",
    name: "Casquette sport ajustable",
    tagline: "Style sportif premium",
    price: 19.9,
    image: cap,
    category: "casquettes",
    sizes: ["Unique"],
  },
  {
    id: "maillot-basket-adulte",
    name: "Maillot de basket adulte",
    tagline: "Respirant et léger",
    price: 39.9,
    image: jersey,
    category: "basket-adulte",
    sizes: TEXTILE_SIZES,
  },
  {
    id: "maillot-basket-enfant",
    name: "Maillot de basket enfant",
    tagline: "Coupe enfant",
    price: 34.9,
    image: jersey,
    category: "basket-enfant",
    sizes: KIDS_SIZES,
  },
  {
    id: "mug-personnalise",
    name: "Mug personnalisé",
    tagline: "Personnalisation disponible",
    price: 14.9,
    image: mug,
    category: "mugs",
    customizable: true,
    isNew: true,
  },
  {
    id: "mug-supporter",
    name: "Mug supporter",
    tagline: "Idéal cadeau sportif",
    price: 16.9,
    image: mug,
    category: "mugs",
  },
  {
    id: "tote-bag-personnalise",
    name: "Tote bag personnalisé",
    tagline: "Personnalisation bientôt disponible",
    price: 18.9,
    image: tshirt,
    category: "tote-bags",
    customizable: true,
    comingSoon: true,
  },
];
