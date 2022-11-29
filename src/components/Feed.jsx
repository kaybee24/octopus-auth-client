import { useEffect, useState } from "react";
import ScrollToTop from "./scrollToTop";
import Pagination from "./Pagination";

export default function MyFeed({ user }) {
  const [messages, setMessages] = useState([]);
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
        .then((messages) => {
          setMessages(messages.data);
          // console.log(messages.data)
        })
        .catch((err) => console.log(err));
    }
  }, [user]);
  return (
    <div style={{height:"2000px"}}>
      <ScrollToTop />
      {messages.map((message) => (
        <div key={message._id}>
          <p className="my-4">
            {message.message}
          </p>
        </div>
      ))}
      <Pagination page={page} setPage={setPage} rangeLength={20} /> 
    </div>
  );
}
