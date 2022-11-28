import { useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Register({ setUser }) {
  let navigate = useNavigate();
  const passwordConfirmationRef = useRef();

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    const form = event.target;

    const data = new FormData(form);
    var object = {};
    data.forEach(function (value, key) {
      object[key] = value;
    });

    if (data.get("password") === passwordConfirmationRef.current.value) {
      fetch(import.meta.env.VITE_AUTH_API, {
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
            console.log(data)
            alert(data.message);
          }
        });
    } else {
      alert("Passwords do not match!");
    }
  },
    [],);

  return (
    <div className="container max-w-4xl px-4 mt-6">
      <h1 className='text-4xl uppercase font-paytoneOne'>Let's create your account</h1>
      <form className="w-full flex flex-col py-4 font-openSans" onSubmit={handleSubmit}>
        <label className="text-left" htmlFor="name">Name</label>
        <input className="p-5 my-2 bg-grey-100" name="name" type="text" placeholder="Enter your name" />
        <label className="text-left" htmlFor="email">Email address</label>
        <input className="p-5 my-2 bg-grey-100" name="email" type="text" placeholder="Enter a valid email" />
        <label className="text-left" htmlFor="password">Password</label>
        <input className="p-5 my-2 bg-grey-100" name="password" type="password" placeholder="Enter your password" />
        <label className="text-left" htmlFor="password">Confirm your password</label>
        <input
          className="p-5 my-2 bg-grey-100"
          ref={passwordConfirmationRef}
          type="password"
          placeholder="Confirm your password"
        />
        <button className='bg-coral-500 hover:bg-coral-900 py-3 my-6 rounded font-OpenSans'>Register</button>
      </form>
    </div>
  );
}
