import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import service from "../Appwrite/config";

export default function SingleItem() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [imageURL, setImageURL] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await service.getItem(id);
      setItem(result);

      if (result?.imageId) {
        const img = service.getFilePreview(result.imageId);
        setImageURL(img);
      }
    };

    fetchData();
  }, [id]);

  if (!item) return <p className="text-center p-4">Loading...</p>;

  return (
    <div className="max-w-2xl mx-auto bg-white mb-10 shadow-lg p-6 rounded-lg mt-10">
      <img
        src={imageURL || "/placeholder.png"}
        alt={item.title}
        className="w-full h-auto object-auto rounded"
      />

      <h1 className="text-2xl font-bold mt-4 text-blue-600">{item.title}</h1>
      <p className="text-gray-500 mt-1">{item.description}</p>
      <p className="mt-2"><strong>Location:</strong> {item.location}</p>
      <p className="mt-2"><strong>Status:</strong> {item.status}</p>
      <p className="mt-2"><strong>Posted:</strong> {new Date(item.$updatedAt).toLocaleDateString()}</p>

    </div>
  );
}
