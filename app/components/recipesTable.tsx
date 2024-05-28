"use client"

import { useState } from 'react';
import { Recipe } from '../api/recipes';

type Props = {
  data: Array<Recipe>;
};

export default function RecipesTable({ data }: Props) {
  const [filter, setFilter] = useState('');

  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100" >
      <div className="mb-4">
        <input
          type="text"
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Filter by name"
          className="p-2 border rounded-md"
        />
        <label className="ml-2">Filter</label>
      </div>
      <table className="bg-white shadow-md rounded-lg overflow-hidden w-full max-w-4xl" >
        <thead className="bg-gray-200">
          <tr className="text-left">
            <th className="p-4">Name</th>
            <th className="p-4">Author</th>
            <th className="p-4">Number of ingredients</th>
            <th className="p-4">Skill level</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.id} className="border-b">
              <td className="p-4">{item.name}</td>
              <td className="p-4">{item.author}</td>
              <td className="p-4">{item.nrOfIngredients}</td>
              <td className="p-4">{item.difficulty}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
