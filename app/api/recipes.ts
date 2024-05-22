import express from "express";

const router = express.Router();

// Define the Recipe type
type Recipe = {
  name: string;
  author: string;
  nrOfIngredients: number;
  ingredients: string[];
  difficulty: "Easy" | "Intermediate" | "Expert";
  description: string;
  cookingTime: number;
  preparationTime: number;
  id: number;
};

// Sample recipe data
const recipesData: Recipe[] = [
  {
    id: 0,
    name: "Spaghetti Carbonara",
    author: "John Doe",
    nrOfIngredients: 6,
    ingredients: [
      "spaghetti",
      "eggs",
      "pancetta",
      "parmesan",
      "garlic",
      "black pepper",
    ],
    difficulty: "Easy",
    description:
      "A classic Italian pasta dish with a rich and creamy sauce made from eggs, pancetta, and Parmesan cheese.",
    cookingTime: 20,
    preparationTime: 10,
  },
  {
    id: 1,
    name: "Beef Bourguignon",
    author: "Julia Child",
    nrOfIngredients: 12,
    ingredients: [
      "beef chuck",
      "bacon",
      "carrots",
      "onions",
      "mushrooms",
      "garlic",
      "red wine",
      "beef broth",
      "tomato paste",
      "thyme",
      "bay leaves",
      "butter",
    ],
    difficulty: "Intermediate",
    description:
      "A hearty French stew made with beef braised in red wine, vegetables, and herbs.",
    cookingTime: 180,
    preparationTime: 30,
  },
  {
    id: 2,
    name: "Sushi Rolls",
    author: "Masaharu Morimoto",
    nrOfIngredients: 10,
    ingredients: [
      "sushi rice",
      "nori sheets",
      "cucumber",
      "avocado",
      "crab meat",
      "salmon",
      "tuna",
      "soy sauce",
      "wasabi",
      "pickled ginger",
    ],
    difficulty: "Expert",
    description:
      "A variety of sushi rolls made with fresh fish, vegetables, and seasoned sushi rice.",
    cookingTime: 60,
    preparationTime: 90,
  },
];

// GET /api/recipes
router.get("/", (_req, res) => {
  res.json(recipesData);
});

export default router;
