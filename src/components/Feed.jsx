import { useEffect, useState } from "react";
import ScrollToTop from "./scrollToTop";
import Pagination from "./Pagination";

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
        .then((messages) => {
          setPosts(messages.data);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  return (
    <div className="container w-full max-w-7xl px-4 mt-6 text-offwhite-900">
      <form
          onSubmit={(event) => {
            event.preventDefault()
            console.log(search)

            fetch(import.meta.env.VITE_PST_API + "?search=" + search.trim(), {
              mode: "cors",
              credentials: "include",
            })
                .then((res) => res.json())
                .then((messages) => {
                  setPosts(messages.data);
                })
                .catch((err) => console.log(err));

          }}
      >
        <input
            type="text"
            placeholder="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            maxLength={100}
        />
        <button type="submit">SEARCH</button>
    </form>
      <ScrollToTop />
      {posts.slice(0).reverse().map((post) => (
        <div key={post._id} className="max-w-[70rem]">
          <p className="my-8">
            {post.user.name} – {post.createdAt}
            <br />
            {post.message}
          </p>
        </div>
      ))}
      <Pagination page={page} setPage={setPage} rangeLength={20} />
    </div>
  );
}
