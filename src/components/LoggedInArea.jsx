import { useState } from "react";
import NewPost from "./NewPost";
import Feed from "./Feed";

export default function LoggedInArea({ user }) {
  const [posts, setPosts] = useState([]);

  return (
    <>
      <main className="w-full px-4">
        <h1 className='text-4xl font-paytoneOne uppercase'>Hello Feed</h1>
        <NewPost />
        <Feed user={user} />
      </main>
    </>
  );
}
