import { useEffect, useState } from "react";
import ScrollToTop from "./scrollToTop";
import Pagination from "./Pagination";
import Search from "./Search";

export default function MyFeed({ user }) {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [hitsPerPage, setHitsPerPage] = useState(10);
  const [search, setSearch] = useState('')

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

      <Search />
      <form
        onSubmit={(event) => {
          event.preventDefault()
          console.log(search)

          fetch(import.meta.env.VITE_PST_API + "?search=" + search.trim(), {
            mode: "cors",
            credentials: "include",
          })
            .then((res) => res.json())
            .then((posts) => {
              setPosts(posts.data);
            })
            .catch((err) => console.log(err));

        }}
      >
        <input
          type="text"
          placeholder="Search through posts"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          maxLength={100}
          className="text-grey-700 p-4 mr-4"
        />
        <button type="submit">SEARCH</button>
      </form>
      <ScrollToTop />
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
