
import blogData from "../../data/blogData.json";

const Post = ({params}) => {
  const id= params.id;
  const post = blogData[id-1];

  return (
    <div className="text-center mt-16">
      <h1 className="font-extrabold m-9">{post.title}</h1>
      <p className="text-red-950 ">{post.content}</p>
      <p className="mt-9">Date: {post.date}</p>
    </div>
  );
};

export default Post;
