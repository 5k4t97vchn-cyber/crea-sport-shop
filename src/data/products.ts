import tshirt from "@/assets/product-tshirt.jpg";
import jersey from "@/assets/product-jersey.jpg";
import basket from "@/assets/product-basket.jpg";
import foot from "@/assets/product-foot.jpg";
import mug from "@/assets/product-mug.jpg";
import cap from "@/assets/product-cap.jpg";

export type CategoryId =
  | "tshirts"
  | "mugs"
  | "foot"
  | "basket"
  | "ballons"
  | "casquettes";

export type Product = {
  id: string;
  name: string;
  tagline: string;
  price: number;
  image: string;
  category: CategoryId;
  sizes?: string[];
  isNew?: boolean;
};

export const CATEGORIES: { id: CategoryId; label: string }[] = [
  { id: "tshirts", label: "T-shirts" },
  { id: "mugs", label: "Mugs" },
  { id: "foot", label: "Foot" },
  { id: "basket", label: "Basket" },
  { id: "ballons", label: "Ballons" },
  { id: "casquettes", label: "Casquettes" },
];

const TEXTILE_SIZES = ["S", "M", "L", "XL"];

export const PRODUCTS: Product[] = [
  // T-shirts
  {
    id: "tshirt-performance-air",
    name: "T-Shirt Performance Air",
    tagline: "Textile premium",
    price: 35,
    image: tshirt,
    category: "tshirts",
    sizes: TEXTILE_SIZES,
    isNew: true,
  },
  {
    id: "jersey-pro",
    name: "Maillot Pro Blanc",
    tagline: "Coton bio",
    price: 39,
    image: jersey,
    category: "tshirts",
    sizes: TEXTILE_SIZES,
  },
  {
    id: "tshirt-classic-noir",
    name: "T-Shirt Classic Noir",
    tagline: "Coton peigné",
    price: 29,
    image: tshirt,
    category: "tshirts",
    sizes: TEXTILE_SIZES,
  },
  {
    id: "tshirt-graphic-energy",
    name: "T-Shirt Graphic Energy",
    tagline: "Édition graphique",
    price: 42,
    image: jersey,
    category: "tshirts",
    sizes: TEXTILE_SIZES,
    isNew: true,
  },

  // Mugs
  {
    id: "mug-ceramique",
    name: "Mug Céramique Sport",
    tagline: "Édition limitée",
    price: 18,
    image: mug,
    category: "mugs",
  },
  {
    id: "mug-thermo",
    name: "Mug Thermo Champion",
    tagline: "Garde au chaud",
    price: 24,
    image: mug,
    category: "mugs",
    isNew: true,
  },
  {
    id: "mug-team",
    name: "Mug Team Spirit",
    tagline: "Pour les supporters",
    price: 16,
    image: mug,
    category: "mugs",
  },

  // Foot
  {
    id: "ballon-foot-elite",
    name: "Ballon de Foot Elite",
    tagline: "Match officiel",
    price: 49,
    image: foot,
    category: "foot",
    isNew: true,
  },
  {
    id: "maillot-foot-stadium",
    name: "Maillot Foot Stadium",
    tagline: "Respirant",
    price: 55,
    image: jersey,
    category: "foot",
    sizes: TEXTILE_SIZES,
  },
  {
    id: "short-foot-pro",
    name: "Short Foot Pro",
    tagline: "Léger & technique",
    price: 32,
    image: tshirt,
    category: "foot",
    sizes: TEXTILE_SIZES,
  },

  // Basket
  {
    id: "ballon-basket-pro",
    name: "Ballon de Basket Pro-Grip",
    tagline: "Équipement",
    price: 59,
    image: basket,
    category: "basket",
  },
  {
    id: "maillot-basket-court",
    name: "Maillot Basket Court",
    tagline: "Mesh respirant",
    price: 45,
    image: jersey,
    category: "basket",
    sizes: TEXTILE_SIZES,
    isNew: true,
  },
  {
    id: "short-basket-arena",
    name: "Short Basket Arena",
    tagline: "Coupe longue",
    price: 38,
    image: tshirt,
    category: "basket",
    sizes: TEXTILE_SIZES,
  },

  // Ballons
  {
    id: "ballon-mini-collector",
    name: "Mini Ballon Collector",
    tagline: "Décoration",
    price: 22,
    image: foot,
    category: "ballons",
  },
  {
    id: "ballon-street-edition",
    name: "Ballon Street Edition",
    tagline: "Outdoor",
    price: 35,
    image: basket,
    category: "ballons",
    isNew: true,
  },
  {
    id: "ballon-training",
    name: "Ballon Training Club",
    tagline: "Entraînement",
    price: 28,
    image: foot,
    category: "ballons",
  },

  // Casquettes
  {
    id: "casquette-racing",
    name: "Casquette Racing Tech",
    tagline: "Ajustable",
    price: 28,
    image: cap,
    category: "casquettes",
    sizes: ["Unique"],
  },
  {
    id: "casquette-snapback",
    name: "Casquette Snapback Urban",
    tagline: "Visière plate",
    price: 32,
    image: cap,
    category: "casquettes",
    sizes: ["Unique"],
    isNew: true,
  },
  {
    id: "casquette-trail",
    name: "Casquette Trail Light",
    tagline: "Ultra légère",
    price: 26,
    image: cap,
    category: "casquettes",
    sizes: ["Unique"],
  },
];
