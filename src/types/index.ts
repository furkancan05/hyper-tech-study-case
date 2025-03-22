export interface CategoryType {
  title: string;
  categoryName: string;
}

export const Categories: CategoryType[] = [
  {
    title: "Hepsi",
    categoryName: "all",
  },
  {
    title: "Erkek Giyim",
    categoryName: "men's clothing",
  },
  {
    title: "Mücevher",
    categoryName: "jewelery",
  },
  {
    title: "Elektronik",
    categoryName: "electronics",
  },
  {
    title: "Kadın Giyim",
    categoryName: "women's clothing",
  },
];

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}
