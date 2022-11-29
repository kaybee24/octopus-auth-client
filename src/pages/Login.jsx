import { useRef, useCallback, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { VscError } from "react-icons/vsc";
//import { IoIosCheckmarkCircleOutline } from "react-icons/io";

export default function Login({ setUser }) {
  let navigate = useNavigate();
  const [errorEmail, setErrorEmail] = useState(null);
  const [errorPassword, setErrorPassword] = useState(null);

  const handleSubmit = useCallback( (event) => {
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
        setErrorEmail(null);
        setErrorPassword(null);
        if (data.success) {
          setUser(data.data);
          navigate(`/my-feed`);
        } else {
          if(data.data.status === 401){
            setErrorEmail(true)
          } else {
            setErrorPassword(true)
          }
          //alert(data.message);
        }
      });
  }, []);  // error && "Wrong email or password"
  return (
    <div className="container w-full max-w-4xl px-4 mt-6">
      <h1 className='text-4xl font-paytoneOne uppercase'>Please log in</h1>
      <form 
      className="w-full flex flex-col py-4 font-openSans gap-[10px]" 
      onSubmit={handleSubmit}>
        <label 
        className="text-left relative" 
        htmlFor="email">
          {
            errorEmail ?  
            <>
              <span className="absolute left-[85%] top-[80px] text-[#950000]">Wrong email</span>
              <VscError className="absolute left-[100%] top-[25px] text-[#950000] w-12 h-12"/> 
            </> : null
          }
        </label> 
        <input 
          className="p-5 my-2 bg-grey-100" 
          name="email" 
          type="text" 
          placeholder="email" />
        <label 
          className="text-left relative" 
          htmlFor="password">{/* {
            errorPassword ?  
              <>
                <span>Wrong password</span> 
                <VscError className="absolute left-[100%] top-[15px] text-[#950000] w-12 h-12" /> 
              </> : 
              <IoIosCheckmarkCircleOutline className="absolute left-[100%] top-[15px] text-[#025F27] w-12 h-12"/>
            }  */}
          </label>
        <input 
          className="p-5 my-2 bg-grey-100" 
          name="password" 
          type="password" 
          placeholder="password" />
        <button 
          className='bg-coral-500 hover:bg-coral-900 py-3 my-6 rounded font-OpenSans'>
            Login
        </button>
      </form>
      <div className="w-full px-4">
        <p className="font-openSans">Not registered yet?</p>
        <Link to="/register">
          <button 
          className='bg-off-white-500 border border-coral-500 hover:bg-coral-900 py-3 px-8 my-6 rounded font-OpenSans'>
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
}
