import React from 'react'
import Card from './Card';

export default function Items() {
  const ItemList = [
     {
    id: 1,
    name: "Black Wallet",
    location: "Sector 15 Metro Station",
    date: "2025-09-28",
    image: "https://tse3.mm.bing.net/th/id/OIP.XYjwCi0UnTF9shcnXkDx6AHaEJ?pid=Api&P=0&h=180",
    status: "Lost"
  },
  {
    id: 2,
    name: "Red Backpack",
    location: "College Gate",
    date: "2025-09-30",
    image: "https://tse1.mm.bing.net/th/id/OIP.5Ro4qzHoIy8kvcq0GayoPgHaE8?pid=Api&P=0&h=180",
    status: "Found"
  },
  {
    id: 3,
    name: "Red Backpack",
    location: "College Gate",
    date: "2025-09-30",
    image: "https://tse1.mm.bing.net/th/id/OIP.5Ro4qzHoIy8kvcq0GayoPgHaE8?pid=Api&P=0&h=180",
    status: "Found"
  },
  {
    id: 4,
    name: "Red Backpack",
    location: "College Gate",
    date: "2025-09-30",
    image: "https://tse1.mm.bing.net/th/id/OIP.5Ro4qzHoIy8kvcq0GayoPgHaE8?pid=Api&P=0&h=180",
    status: "Found"
  }
  ]; 

  return(
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-8">
      {ItemList.map((item, index) => (
        <Card key={index} {...item} />
      ))}
    </div>
  );
}
  