import { useState } from "react";
import MessageForm from "./MessageForm";
import MessageFeed from "./MessageFeed";
import Post from "./Post";

export default function LoggedInArea({ user }) {
  const [posts, setPosts] = useState([{
    id: 1,
    createdAt: "Oct 29, 2022",
    createdBy: "Name User 1",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
  },
  {
    id: 2,
    createdAt: "Oct 31, 2022",
    createdBy: "Name User 2",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
  },
  {
    id: 3,
    createdAt: "Nov 04, 2022",
    createdBy: "Name User 3",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
  },
  {
    id: 4,
    createdAt: "Nov 07, 2022",
    createdBy: "Name User 4",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
  }])
  return (
    <>
      <main className="w-full px-4">
        <h1 className='text-4xl font-paytoneOne uppercase'>Hello Feed</h1>
        <p className='text-grey-700 font-openSans'>(Fake Data in Feed file, containing of: createdAt, createdBy, text)</p>
        {posts.map(post => (
          <Post key={post.id} post={post} />
        ))}

        <MessageForm />
        <MessageFeed user={user} />
      </main>
    </>
  );
}
