import { useCallback } from "react";

const NewPost = () => {
  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);
    var object = {};
    data.forEach(function (value, key) {
      object[key] = value;
    });

    fetch(import.meta.env.VITE_PST_API, {
      method: "POST",
      mode: "cors",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(object),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          // console.log(data);
        } else {
          alert(data.message);
        }
      });
  }, []);

  return (
    <div className="container w-full max-w-7xl px-4 mt-6">
      <h2 className='text-4xl uppercase font-paytoneOne text-offwhite-900'>What's on your mind?</h2>
      <form className="w-full flex flex-col py-4 font-openSans" onSubmit={handleSubmit}>
        <textarea className="p-5 my-2 bg-grey-100 outline-ocean-700 max-w-[70rem]" name="message" type="text" placeholder="Tell us what is on your mind" rows="4"></textarea>
        <button className='bg-coral-500 hover:bg-coral-900 max-w-xs py-3 my-6 rounded font-OpenSans font-bold'>Create New Post</button>
      </form>
    </div>
  );
}

export default NewPost