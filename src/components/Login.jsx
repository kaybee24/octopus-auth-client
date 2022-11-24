import { Link, useNavigate } from "react-router-dom";

export default function Login({ setUser }) {
  let navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);
    var object = {};
    data.forEach(function (value, key) {
      object[key] = value;
    });

    console.log(JSON.stringify(object));
    console.log(import.meta.env)
    fetch(import.meta.env.VITE_AUTH_API + "/login", {
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
          setUser(data.data);
          navigate(`/my-feed`);
        } else {
          alert(data.message);
        }
      });
  };
  return (
    <div className="container w-full max-w-4xl px-4 mt-6">
      <h1 className='text-4xl font-paytoneOne uppercase'>Please log in</h1>
      <form className="w-full flex flex-col py-4 font-openSans" onSubmit={handleSubmit}>
        <label className="text-left" for="email">Email address</label>
        <input className="p-5 my-2 bg-grey-100" name="email" type="text" placeholder="email" />
        <label className="text-left" for="email">Password</label>
        <input className="p-5 my-2 bg-grey-100" name="password" type="password" placeholder="password" />
        <button className='bg-coral-500 hover:bg-coral-900 py-3 my-6 rounded font-OpenSans'>Login</button>
      </form>
      <div className="w-full px-4">
        <p className="font-openSans">Not registered yet?</p>
        <Link to="/register"><button className='bg-off-white-500 border border-coral-500 hover:bg-coral-900 py-3 px-8 my-6 rounded font-OpenSans'>Sign Up</button></Link>
      </div>
    </div>
  );
}
