/* eslint-disable react/prop-types */
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const BlogDetailsCard = ({ blog }) => {
  const { title, date, article, imageUrl } = blog || {};
  return (
    <>
      <Helmet>
        <title>SwiftInbox | Blog</title>
      </Helmet>
      <div>
        <div className="p-10 flex flex-col justify-around text-white">
          <div className="pb-4">
            SwiftInbox /{" "}
            <Link to="/blog">
              <span className="underline">Blog</span>
            </Link>
          </div>
          <hr />
          <h3 className="mt-10 text-3xl font-black my-5">
            <span className="font-bold text-xl "> </span> {title}
          </h3>
          <h3 className="my-5">
            {" "}
            <span className="font-semibold text-lg mr-5 ">Date: {date}</span>
          </h3>
          <img
            className="w-full rounded-md"
            src={imageUrl}
            alt="Alternative Image"
          />

          <div className="my-4">
            <h4 className="font-bold text-base">Overview:</h4>
            <p className="text-xs">{article}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetailsCard;
