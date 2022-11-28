import { useEffect, useState } from "react";

export default function MyFeed({ user }) {
  const [messages, setMessages] = useState([]);

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
          setMessages(messages.data)
          // console.log(messages.data)
        })
        .catch((err) => console.log(err));
    }
  }, [user]);
  return (
    <div>
      {messages.map((message) => (
        <div key={message._id}>
          <p>
            message: {message.message}
          </p>
        </div>
      ))}
    </div>
  );
}
