import { useParams } from "react-router-dom";
import BlogDetailsCard from "./BlogDetailsCard";
import useAxiosPublic from "../../hooks/useAxios";

const ShowBlogDetails = () => {
  const { id } = useParams();
  const axiosInstance = useAxiosPublic();
  const { data: blog } = axiosInstance(`/blogs/${id}`);

  return <BlogDetailsCard key={id} blog={blog}></BlogDetailsCard>;
};

export default ShowBlogDetails;
