import { useCallback, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

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
    <div className="container w-full max-w-7xl px-4 mt-6 text-offwhite-900">
      <h2 className="xs:text-3xl md:text-5xl pb-2 font-paytoneOne uppercase">
        Let's create your account
      </h2>
      <form className="w-full flex flex-col py-4 font-openSans gap-[0.3rem]" onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name
        </label>
        <input className="p-5 mb-8 bg-grey-100 outline-ocean-700" name="name" type="text" placeholder="Enter your name" />
        <label htmlFor="email">
          Email address
        </label>
        <input className="p-5 mb-8 bg-grey-100 outline-ocean-700" name="email" type="text" placeholder="Enter a valid email" />
        <label htmlFor="password">
          Password
        </label>
        <input className="p-5 mb-8 bg-grey-100 outline-ocean-700" name="password" type="password" placeholder="Password" />
        <label htmlFor="password">
          Confirm your password
        </label>
        <input className="p-5 bg-grey-100 outline-ocean-700" ref={passwordConfirmationRef} type="password" placeholder="Confirm your password"
        />
        <button className='bg-coral-500 hover:bg-coral-900 text-darkgrey-900 w-[16rem] py-4 mt-6 rounded font-OpenSans font-bold'>
          Register
        </button>
      </form>
      <div className="w-full">
        <p className="text-grey-500">
          Got an account already?&nbsp;
          <Link className="text-coral-500 hover:text-coral-900" to="/login">
            Log In here
          </Link>.
        </p>
      </div>
    </div>
  );
}
