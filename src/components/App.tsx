import RecipeList from "./RecipeList";
import { IRecipe } from "../interface";
import "../css/App.css";

const sampleRecipes: IRecipe.Recipe[] = [
  {
    id: 1,
    name: "Plain Chicken",
    servings: 3,
    cookTime: "1:45",
    instructions:
      "1. Put salt on chicken\n2. Put chicken in oven\n3. Eat chicken",
    ingredients: [
      { id: 1, name: "Chicken", amount: "2 Pounds" },
      { id: 2, name: "Salt", amount: "1 Tbs" },
    ],
  },
  {
    id: 2,
    name: "Plain Pork",
    servings: 5,
    cookTime: "0:45",
    instructions: "1. Put pepper on pork\n2. Put pork in oven\n3. Eat pork",
    ingredients: [
      { id: 1, name: "Pork", amount: "3 Pounds" },
      { id: 2, name: "Pepper", amount: "2 Tbs" },
    ],
  },
];

function App() {
  return <RecipeList recipes={sampleRecipes} />;
}

export default App;
