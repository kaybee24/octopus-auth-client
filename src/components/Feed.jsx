import { useEffect, useState } from "react";
import ScrollToTop from "./scrollToTop";
import Pagination from "./Pagination";

export default function MyFeed({ user }) {
  const [posts, setPosts] = useState([]);
  const [events, setEvents] = useState([]);
  const [page, setPage] = useState(0);
  const [hitsPerPage, setHitsPerPage] = useState(10);

  useEffect(() => {
    if (user) {
      // console.log("user is available, getting messages..");
      // send fetch request with cookies
      fetch(import.meta.env.VITE_EVT_API, {
        mode: "cors",
        credentials: "include",
      })
        .then((res) => res.json())
        .then((events) => {
          setEvents(events.data);
          // console.log(messages)
        })
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
      <ScrollToTop />
      {events.slice(0).reverse().map((event) => (
        <div key={event._id} className="max-w-[70rem]">
          <p className="my-8">
            {event.title}
            <br />
            {event.message}
            <br />
            {event.city}
            <br />
            {event.location}
            <br />
            {event.eventDateTime}
          </p>
        </div>
      ))}
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
