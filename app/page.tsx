import { revalidatePath } from "next/cache"
import RecipesTable from "./components/recipesTable"

async function fetchData() {
  const response = await fetch("http://localhost:3001/api/recipes")
  revalidatePath("/")

  return await response.json()
}


export default async function Home() {
  const data = await fetchData()
  console.log("Datele=", data)

  return (
    <div>
      <RecipesTable data={data} />
    </div>
  )
}
