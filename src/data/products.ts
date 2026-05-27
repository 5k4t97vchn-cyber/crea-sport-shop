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

export const PRODUCTS: Product[] = [
  {
    id: "tshirt-performance-air",
    name: "T-Shirt Performance Air",
    tagline: "Textile premium",
    price: 35,
    image: tshirt,
    category: "tshirts",
    sizes: ["S", "M", "L", "XL"],
    isNew: true,
  },
  {
    id: "jersey-pro",
    name: "Maillot Pro Blanc",
    tagline: "Coton bio",
    price: 39,
    image: jersey,
    category: "tshirts",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "ballon-basket-pro",
    name: "Ballon de Basket Pro-Grip",
    tagline: "Équipement",
    price: 59,
    image: basket,
    category: "basket",
  },
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
    id: "mug-ceramique",
    name: "Mug Céramique Sport",
    tagline: "Édition limitée",
    price: 18,
    image: mug,
    category: "mugs",
  },
  {
    id: "casquette-racing",
    name: "Casquette Racing Tech",
    tagline: "Ajustable",
    price: 28,
    image: cap,
    category: "casquettes",
    sizes: ["Unique"],
  },
];
