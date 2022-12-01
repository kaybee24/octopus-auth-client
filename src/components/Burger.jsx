import { Link } from "react-router-dom";
import { slide as Menu } from 'react-burger-menu';
import "../App.css"


const Burger = () => {

    return (
      <Menu>
        <ul className="items-center justify-center space-y-8">
          <li className="text-gray-600 hover:text-blue-600">
            <Link to="/">Home</Link>
          </li>
          <li className="text-gray-600 hover:text-blue-600">
            <Link to="/my-feed">Feed</Link>
          </li>
          <li className=" text-gray-600 hover:text-blue-600">
            <Link to="/account">Account</Link>
          </li>
        </ul>
      </Menu>
        // <nav className="relative w-full flex items-center text-offwhite-900">
        //     <div className="justify-between px-4">
        //         <div>
        //             <div className="flex items-center justify-between py-3">
        //                 <div /* className="md:hidden" */>
        //                     <button
        //                         className="p-2 text-gray-700 rounded-md outline-none"
        //                         onClick={() => setNavbar(!navbar)}
        //                     >
        //                         {navbar ? (
        //                             <svg
        //                                 xmlns="http://www.w3.org/2000/svg"
        //                                 className="w-6 h-6"
        //                                 viewBox="0 0 20 20"
        //                                 fill="currentColor"
        //                             >
        //                                 <path
        //                                     fillRule="evenodd"
        //                                     d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
        //                                     clipRule="evenodd"
        //                                 />
        //                             </svg>
        //                         ) : (
        //                             <svg
        //                                 xmlns="http://www.w3.org/2000/svg"
        //                                 className="w-6 h-6 left-5 top-0"
        //                                 fill="none"
        //                                 viewBox="0 0 24 24"
        //                                 stroke="currentColor"
        //                                 strokeWidth={2}
        //                             >
        //                                 <path
        //                                     strokeLinecap="round"
        //                                     strokeLinejoin="round"
        //                                     d="M4 6h16M4 12h16M4 18h16"
        //                                 />
        //                             </svg>
        //                         )}
        //                     </button>
        //                 </div>
        //             </div>
        //         </div>
        //         <div>
        //             <div
        //                className={`relative flex-1 justify-self-center pb-3 mt-8 ${navbar ? "block" : "hidden"
        //                     }`}
        //             >
        //                 <ul className="items-center justify-center space-y-8">
        //                     <li className="text-gray-600 hover:text-blue-600">
        //                         <Link to="/">Home</Link>
        //                     </li>
        //                     <li className="text-gray-600 hover:text-blue-600">
        //                         <Link to="/my-feed">Feed</Link>
        //                     </li>
        //                     <li className=" text-gray-600 hover:text-blue-600">
        //                         <Link to="/account">Account</Link>
        //                     </li>
        //                 </ul>
        //             </div>
        //         </div>
        //     </div>
        // </nav> 
    );
}

export default Burger
