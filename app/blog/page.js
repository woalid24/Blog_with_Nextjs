import Link from "next/link";
import blogData from "../data/blogData";

const page = () => {
  return (
    <div>
      <h1 className="text-center bg-stone-700 text-purple-800 font-bold text-xl m-5 p-7 ">THIS IS A BLOG PAGE</h1>
      <ul className="text-center text-cyan-500">
        {blogData.map((post) => (
          <li className="m-3" key={post.id}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default page;
