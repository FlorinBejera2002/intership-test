"use client"

import { useEffect, useState } from "react"
import { Recipe } from "../api/recipes"

type Props = {
  data: Array<Recipe>
}

export default function RecipesTable({ data }: Props) {
  const [filter, setFilter] = useState("")
  const [filteredData, setFilteredData] = useState(data)

  useEffect(() => {
    setFilteredData(
      data.filter(item => 
        item.name.toLowerCase().includes(filter.toLowerCase())
      )
    )
  }, [filter, data])

  return (
    <>
      <div>
        <input 
          onChange={(e) => setFilter(e.target.value)} 
          type="text" 
          value={filter}
          placeholder="Filter by name"
        />
        <label>Filter</label>
      </div>
      <div className="flex justify-center items-center">
        <table className="table-auto border-collapse border border-gray-400">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-400 px-4 py-2">Name</th>
              <th className="border border-gray-400 px-4 py-2">Author</th>
              <th className="border border-gray-400 px-4 py-2">Number of ingredients</th>
              <th className="border border-gray-400 px-4 py-2">Skill level</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map(item => (
              <tr key={item.id}>
                <td className="border border-gray-400 px-4 py-2">{item.name}</td>
                <td className="border border-gray-400 px-4 py-2">{item.author}</td>
                <td className="border border-gray-400 px-4 py-2">{item.nrOfIngredients}</td>
                <td className="border border-gray-400 px-4 py-2">{item.difficulty}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
