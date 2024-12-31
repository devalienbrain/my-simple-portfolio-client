import { IoMdAddCircleOutline } from "react-icons/io";
import { useState, useEffect, useContext } from "react";
import SingleBlogCard from "./SingleBlogCard";
import toast from "react-hot-toast";

import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import useAxiosPublic from "../../hooks/useAxios";

const Blog = () => {
  const [blogData, setBlogData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user } = useContext(AuthContext);
  const axiosInstance = useAxiosPublic();
  // Fetch blog data from backend when component mounts
  useEffect(() => {
    fetchBlogData();
  }, []);

  // Function to fetch blog data from backend
  const fetchBlogData = async () => {
    try {
      const response = await axiosInstance.get("/blogs"); // Assuming backend is hosted on the same domain
      setBlogData(response.data);
    } catch (error) {
      console.error("Error fetching blog data:", error);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Function to handle form submission and save blog to backend
  const handleAddBlog = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const article = e.target.article.value;
    const imageUrl = e.target.imageUrl.value;
    const date = new Date().toLocaleString();
    const data = {
      title,
      article,
      imageUrl,
      date,
    };

    axiosInstance.post("/blog", data).then((res) => {
      if (res.status === 201) {
        e.target.reset();
        toast.success("New Blog Successfully Created");
        closeModal();
      }
    });
  };

  return (
    <>
      <div>
        <div className="min-h-screen flex flex-col text-white">
          <div className="my-2 flex">
            <span className="self-center text-2xl font-extrabold whitespace-nowrap">
              Tech Blog
            </span>
          </div>
          <div className="pb-4 flex justify-between">
            {user && (
              <div className="flex items-center align-middle gap-1">
                <IoMdAddCircleOutline />
                <button onClick={openModal}>Add a Blog</button>
              </div>
            )}
          </div>
          <hr />
          {/* MODAL PART STARTS */}
          {isModalOpen && (
            <div className="modal-container">
              <dialog
                id="To_Donate"
                className="modal modal-bottom sm:modal-middle"
                open
              >
                <div className="modal-box bg-black text-black z-100 shadow-2xl">
                  <h3 className="font-semibold text-lg text-yellow-300 text-center">
                    Please write your blog
                  </h3>
                  <form
                    onSubmit={handleAddBlog}
                    className="flex flex-col gap-4 px-5 py-9"
                  >
                    <input
                      type="text"
                      name="title"
                      placeholder="Add a title"
                      className="input input-bordered"
                      required
                    />
                    <input
                      type="text"
                      name="article"
                      placeholder="Write blog details"
                      className="input input-bordered"
                      required
                    />

                    <input
                      type="text"
                      name="imageUrl"
                      placeholder="Input image url"
                      className="input input-bordered"
                      required
                    />
                    <div className="form-control border-none mt-6">
                      <button className="btn bg-yellow-600 hover:bg-yellow-700 text-black">
                        Add
                      </button>
                    </div>
                  </form>
                  <div className="flex justify-center">
                    <div className="modal-action">
                      <button
                        onClick={closeModal}
                        className="underline text-xs text-red-700 hover:text-red-600"
                      >
                        close
                      </button>
                    </div>
                  </div>
                </div>
              </dialog>
            </div>
          )}
          {/* MODAL PART ENDS */}
          <div className="py-9 flex flex-col gap-5">
            {/* Add logging and check if blogData is an array before mapping */}
            {Array.isArray(blogData) ? (
              blogData?.map((blog) => (
                <SingleBlogCard key={blog._id} blogData={blog}></SingleBlogCard>
              ))
            ) : (
              <p>No blog data available</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
