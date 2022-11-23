import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Register({ setUser }) {
  let navigate = useNavigate();
  const passwordConfirmationRef = useRef();
  const handleSubmit = (event) => {
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
  };
  return (
    <form onSubmit={handleSubmit}>
      <input name="name" type="text" placeholder="name" />
      <input name="email" type="text" placeholder="email" />
      <input name="password" type="password" placeholder="password" />
      <input
        ref={passwordConfirmationRef}
        type="password"
        placeholder="Confirm Password"
      />
      <button>Register</button>
    </form>
  );
}
