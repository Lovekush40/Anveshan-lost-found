import React, { useState } from 'react'
import {useForm} from 'react-hook-form'
import { useSelector } from 'react-redux';
import service from '../../Appwrite/config';
import { useNavigate } from 'react-router-dom'
import { ID } from 'appwrite';
import Input from '../Input';
import Select from '../Select';
import Button from '../Button';

function ItemForm({item, status = 'lost'}) {

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');


  const {register, handleSubmit ,watch, setValue, getValues, control, } = useForm({
    defaultValues: {
      title: item?.title || "",
      description: item?.description || "",
      category: item?.category || "electronics",
      status: item?.status || status,
      location: item?.location || "",
    }
  })

  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData)

  const report = async (data) => {
      setLoading(true);
      setMessage('');

      try {
        const file = data.image?.[0] ? await service.uploadFile(data.image[0]) : null;

        if (item) {
          if (item.imageId && file) {
            await service.deleteFile(item.imageId);
          }

          const dbitem = await service.updateItem(item.$id, {
            ...data,
            imageId: file ? file.$id : item.imageId,
          });

          if (dbitem) navigate(`/item/${dbitem.$id}`);
        } else {
          if (!file) return alert("Image upload failed");

          const created = await service.createItem({
            ...data,
            imageId: file.$id,
            userId: userData.$id,
          });

          if (created) navigate(`/item/${created.$id}`);
        }        
      } catch (error) {
          console.error("Submission error:", error);
          setMessage(`❌ ${error.message}`);
      } finally {
          setLoading(false);
    }

};


  return (
    <form onSubmit={handleSubmit(report)} className="flex h-full flex-wrap">
            <div className="w-3/5 px-2">
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", { required: true })}
                />
                <Input
                    label="Description :"
                    placeholder="Description"
                    className="mb-4"
                    {...register("description", { required: true })}
                />
                <Select
                  options={["electronics", "clothing","stationery", "other"]}
                  label="Category:"
                  className="mb-2"
                  {...register("category", { required: true })}
                />
            </div>
            <div className="w-2/5 px-2">
                 <Input
                  label="Location :"
                  placeholder="Enter item location"
                  className="mb-4"
                  {...register("location", { required: true })}
                />
                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !item })}
                />
                {item && (
                    <div className="w-full mb-4">
                        <img
                            src={service.getFilePreview(item.imageId)}
                            alt={item.title}
                            className="rounded-lg"
                        />
                    </div>
                )}
               
                <Button type="submit" bgColor={item ? "bg-green-500" : undefined} className="w-full">
                    {item ? "Update" : "Submit"}
                </Button>
                {loading && <p className="text-[#065C77] mt-2 text-2xl">Submitting...</p>}
                {message && <p className="text-green-600 mt-2 text-2xl">{message}</p>}
            </div>
        </form>
  )
}

export default ItemForm