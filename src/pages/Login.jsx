import { useRef, useCallback, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { VscError } from "react-icons/vsc";
//import { IoIosCheckmarkCircleOutline } from "react-icons/io";

export default function Login({ setUser }) {
  let navigate = useNavigate();
  const [errorEmail, setErrorEmail] = useState(null);
  const [errorPassword, setErrorPassword] = useState(null);
  const [disabled, setDisabled] = useState(false)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    const form = event.target;
    setDisabled(true)
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
        setErrorEmail(null);
        setErrorPassword(null);
        if (data.success) {
          setUser(data.data);
          navigate(`/my-feed`);
        } else {
          if (data.data.status === 401) {
            setErrorEmail(true)
          } else {
            setErrorPassword(true)
          }
          //alert(data.message);
        }
      });
  }, []);  // error && "Wrong email or password"
  return (
    <div className="container w-full max-w-7xl px-4 mt-6 text-offwhite-900">
      <h2 className="xs:text-3xl md:text-5xl pb-2 font-paytoneOne uppercase">
        Please log in
      </h2>
      <form
        className="w-full flex flex-col py-4 font-openSans gap-[0.3rem]"
        onSubmit={handleSubmit}>
        <label
          className="text-left relative"
          htmlFor="email">
          {
            errorEmail ?
              <>
                <span className="absolute left-[85%] top-[80px] text-[#950000]">Wrong email</span>
                <VscError className="absolute left-[100%] top-[25px] text-[#950000] w-12 h-12" />
              </> : null
          }
          Email address
        </label>
        <input
          className="p-5 mb-8 bg-grey-100 outline-ocean-700"
          name="email"
          type="text"
          placeholder="Enter a valid email"
          onChange={handleEmailChange}
          value={email} />
        <label className="text-left relative" htmlFor="password">{/* {
            errorPassword ?  
              <>
                <span>Wrong password</span> 
                <VscError className="absolute left-[100%] top-[15px] text-[#950000] w-12 h-12" /> 
              </> : 
              <IoIosCheckmarkCircleOutline className="absolute left-[100%] top-[15px] text-[#025F27] w-12 h-12"/>
            }  */}
          Password
        </label>
        <input
          className="p-5 bg-grey-100 outline-ocean-700"
          name="password"
          type="password"
          placeholder="Password"
          onChange={handlePasswordChange}
          value={password} />
        <button disabled={!email || !password} className='bg-coral-500 hover:bg-coral-900 disabled:opacity-50 disabled:pointer-events-none text-darkgrey-900 w-[16rem] py-4 mt-6 rounded font-OpenSans font-bold'>
          Login
        </button>
      </form>
      <div className="w-full">
        <p className="text-grey-500">
          Not registered yet?&nbsp;
          <Link className="text-coral-500 hover:text-coral-900" to="/register">
            Sign Up here
          </Link>.
        </p>
      </div>
    </div>
  );
}
