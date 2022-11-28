import { useState } from "react";
import NewPost from "../components/NewPost.jsx";
import Feed from "../components/Feed.jsx";

export default function LoggedInArea({ user }) {
  const [posts, setPosts] = useState([]);

  return (
    <>
      <main className="w-full px-4">
        <NewPost />
        <Feed user={user} />
      </main>
    </>
  );
}
