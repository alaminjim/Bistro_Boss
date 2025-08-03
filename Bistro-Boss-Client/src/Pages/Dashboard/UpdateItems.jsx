import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../Components/Shared/SectionTitle";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import useUserPublic from "../../Hooks/useUserPublic";
import { FaUtensils } from "react-icons/fa";
import toast from "react-hot-toast";

const image_hosting_api_key = import.meta.env.VITE_IMAGE_HOSTING_API_KEY;
const image_uploaded = `https://api.imgbb.com/1/upload?key=${image_hosting_api_key}`;

const UpdateItems = () => {
  const item = useLoaderData();
  const { axiosSecure } = useAxiosSecure();
  const userPublic = useUserPublic();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);
    const res = await userPublic.post(image_uploaded, formData, {
      headers: { "content-type": "multipart/form-data" },
    });
    console.log("image url", res.data);
    if (res.data.success) {
      const menuData = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url,
      };
      const menuRes = await axiosSecure.patch(`/menu/${item._id}`, menuData);
      console.log(menuRes.data);
      if (menuRes.data.modifiedCount > 0) {
        toast.success("Menu Item Update successful");
      }
      reset();
    }
  };

  return (
    <div>
      <div>
        <SectionTitle
          title={"Update"}
          heading={"UpdateItem Info"}
        ></SectionTitle>
      </div>
      <div className="w-[990px] h-[680px] bg-[#F3F3F3] my-10 mx-14">
        {" "}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-8 ml-10 pt-10 pr-10"
        >
          <legend className="fieldset-legend">Recipe Name</legend>
          <input
            {...register("name")}
            type="text"
            defaultValue={item.name}
            className="input w-full"
            placeholder="recipeName"
          />
          <div className="flex gap-5">
            <div className="w-full">
              <legend className="fieldset-legend">Category</legend>

              <select
                {...register("category")}
                defaultValue={item.category}
                className="select w-full"
              >
                <option disabled={true}>Pick a Category</option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">soup</option>
                <option value="dessert">dessert</option>
                <option value="drinks">drinks</option>
              </select>
            </div>

            <div className="w-full">
              <legend className="fieldset-legend">Price</legend>
              <input
                {...register("price")}
                type="text"
                defaultValue={item.price}
                className="input w-full"
                placeholder="price"
              />
            </div>
          </div>
          <div>
            <legend className="fieldset-legend">Recipe Details</legend>
            <textarea
              {...register("recipe")}
              className="textarea h-40 w-full"
              placeholder="Recipe Details Here"
              defaultValue={item.recipe}
            ></textarea>
          </div>
          <div>
            <input
              {...register("image")}
              type="file"
              className="file-input file-input-ghost"
            />
          </div>
          <button className="btn bg-[#835D23] text-white">
            Update Menu Items <FaUtensils></FaUtensils>
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateItems;
