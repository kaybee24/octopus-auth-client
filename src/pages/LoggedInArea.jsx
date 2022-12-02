import { useState } from "react";
import NewPost from "../components/NewPost.jsx";
import Feed from "../components/Feed.jsx";

export default function LoggedInArea({ user, posts, setPosts, search, setSearch }) {

  return (
    <>
      <main className="w-full px-4">
        <NewPost setPosts={setPosts} />
        <Feed 
        user={user}
        posts={posts}
        setPosts={setPosts}
        search={search}
        setSearch={setSearch}
        />
      </main>
    </>
  );
}
