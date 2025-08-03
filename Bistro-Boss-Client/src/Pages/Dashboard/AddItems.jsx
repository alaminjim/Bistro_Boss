import { useForm } from "react-hook-form";
import SectionTitle from "../../Components/Shared/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import useUserPublic from "../../Hooks/useUserPublic";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";

const image_hosting_api_key = import.meta.env.VITE_IMAGE_HOSTING_API_KEY;
const image_uploaded = `https://api.imgbb.com/1/upload?key=${image_hosting_api_key}`;

const AddItems = () => {
  const { register, handleSubmit, reset } = useForm();
  const userPublic = useUserPublic();
  const { axiosSecure } = useAxiosSecure();

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
      const menuRes = await axiosSecure.post("/menu", menuData);
      console.log(menuRes.data);
      if (menuRes.data.insertedId) {
        toast.success("Menu Item Add successful");
      }
      reset();
    }
  };
  return (
    <div>
      <div>
        <SectionTitle
          title={"---What's new?---"}
          heading={"ADD AN ITEM"}
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
            className="input w-full"
            placeholder="recipeName"
          />
          <div className="flex gap-5">
            <div className="w-full">
              <legend className="fieldset-legend">Category</legend>

              <select
                {...register("category")}
                defaultValue="Pick a category"
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
            Add Items <FaUtensils></FaUtensils>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
