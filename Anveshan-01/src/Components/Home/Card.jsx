import React, { useState, useEffect } from "react";
import service from "../../Appwrite/config";
import { Link } from "react-router-dom";
import authService from "../../Appwrite/auth";

export default function Card({
  $id,
  imageId,
  title,
  name,
  description,
  location,
  $updatedAt,
  status,
}) {
  const [claimed, setClaimed] = useState(false);
  const [previewURL, setPreviewURL] = useState(null);

  const formattedDate = new Date($updatedAt).toLocaleDateString();

  // Load image preview
  useEffect(() => {
    if (!imageId) {
      setPreviewURL(null);
      return;
    }

    let mounted = true;

    (async () => {
      try {
        const url = service.getFilePreview(imageId); // MUST return string URL

        if (mounted) {
          console.log("Resolved preview URL:", url);
          setPreviewURL(url);
        }
      } catch (err) {
        console.error("Preview loading failed:", err);
        if (mounted) setPreviewURL(null);
      }
    })();

    return () => {
      mounted = false;
    };
  }, [imageId]);

  async function handleClick() {
    if (status === "found") {
      try {
        const user = await authService.getCurrentUser();

        await service.createClaim({
          itemId: $id,
          claimerId: user.$id,
        });

        setClaimed(true);
      } catch (error) {
        alert("Failed to submit claim.");
      }
    } else {
      alert(`Report submitted for lost item: ${name}`);
    }
  }

  return (
    
      <div className="bg-white text-gray-600 rounded-lg w-full overflow-hidden shadow-2xl">
      <Link to={`/post/${$id}`}>
        <div className="w-full bg-gray-100 rounded-xl p-4">
          <div className="w-full justify-center">
            <img
              src={previewURL || "/placeholder.png"}
              alt={title}
              onError={(e) => {
                // Prevent infinite loop
                if (e.currentTarget.dataset.fallback === "true") return;
                console.error("Image failed to load:", e.currentTarget.src);
                e.currentTarget.dataset.fallback = "true";
                e.currentTarget.src = "/placeholder.png";
              }}
              className="rounded-md w-full h-50 object-cover bg-gray-200"
            />
          </div>
        </div>
      </Link>

      <h3 className="text-lg text-blue-500 font-semibold m-1">{title}</h3>
      <p className="m-1"> Description: {description}</p>
      <p className="m-1">Location : {location}</p>
      <p className="m-1 text-sm">Date : {formattedDate}</p>

      <p
        className={`m-1 ${
          status === "lost" ? "text-red-500" : "text-green-500"
        }`}
      >
        Status : {status}
      </p>

      <button
        onClick={handleClick}
        disabled={claimed}
        className={`mt-3 py-2 px-4 rounded-lg text-center 
          ${
            status === "found"
              ? claimed
                ? "bg-gray-500 text-white cursor-not-allowed"
                : "bg-green-500 text-white hover:bg-green-600"
              : "bg-red-500 text-white hover:bg-red-600"
          }`}
      >
        {status === "found"
          ? claimed
            ? "Item Claimed"
            : "Claim Item"
          : "Report Match"}
      </button>
    </div>
    
  );
}
