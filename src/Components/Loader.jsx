import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../hooks/useAxios";
// import { axiosSecure } from "./useAxios";

const Loader = (url, query) => {
  const axiosInstance = useAxiosPublic();
  const { isLoading, refetch, data } = useQuery({
    queryKey: [query],
    queryFn: async () => {
      const res = await axiosInstance.get(url);
      return res.data;
    },
  });

  return { isLoading, data, refetch };
};

export default Loader;
