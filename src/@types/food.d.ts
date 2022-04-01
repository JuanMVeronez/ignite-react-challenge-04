interface FoodData {
  image: string;
  name: string;
  price: string;
  description: string;
}

interface FoodItem extends FoodData {
  id: number;
  available: boolean;
}