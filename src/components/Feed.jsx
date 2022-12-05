import React, { useEffect, useState } from "react";
import ScrollToTop from "./scrollToTop";
import Pagination from "./Pagination";
import Search from "./Search";

export default function MyFeed({ user, posts, setPosts, search, setSearch }) {
  const [page, setPage] = useState(0);
  const [hitsPerPage, setHitsPerPage] = useState(10);


  useEffect(() => {
    if (user) {
      // console.log("user is available, getting messages..");
      // send fetch request with cookies
      fetch(import.meta.env.VITE_PST_API, {
        mode: "cors",
        credentials: "include",
      })
        .then((res) => res.json())
        .then((posts) => {
          setPosts(posts.data);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  return (
    <div className="container w-full max-w-7xl px-4 mt-6 text-offwhite-900">
      <ScrollToTop smooth/>
      {posts.slice(0).reverse().map((post) => (
        <div key={post._id} className="relative max-w-[70rem] bg-ocean-800 px-3 py-5 my-4 rounded">
          <p>
            {post.user.name} <span className="text-grey-700 absolute right-3">{post.createdAt}</span>
          </p>
          <p className="text-xl">
            {post.message}
          </p>
        </div>
      ))}
      <Pagination page={page} setPage={setPage} rangeLength={20} />
    </div>
  );
}
