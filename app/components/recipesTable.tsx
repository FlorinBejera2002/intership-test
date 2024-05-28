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
    <>
      <div>
        <input
          type="text"
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Filter by name"
        />
        <label>Filter</label>
      </div>
      <table className="flex justify-center items-center">
        <thead>
          <tr className="flex gap-44">
            <th>Name</th>
            <th>Author</th>
            <th>Number of ingredients</th>
            <th>Skill level</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.author}</td>
              <td>{item.nrOfIngredients}</td>
              <td>{item.difficulty}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
