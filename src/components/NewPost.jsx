export default function NewPost() {
  const handleSubmit = (event) => {
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
  };
  return (
    <div className="container max-w-4xl mt-6">
      <h2 className='text-2xl uppercase font-paytoneOne'>Create a New Post</h2>
      <form className="w-full flex flex-col py-4 font-openSans" onSubmit={handleSubmit}>
        <label className="text-left" htmlFor="message">What's on your mind?</label>
        <input className="p-5 my-2 bg-grey-100" name="message" type="text" placeholder="Tell us what is on your mind" />
        <button className='bg-coral-500 hover:bg-coral-900 py-3 my-6 rounded font-OpenSans'>Create New Post</button>
      </form>
    </div>
  );
}
