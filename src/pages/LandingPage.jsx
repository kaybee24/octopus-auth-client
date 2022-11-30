import { Link } from "react-router-dom";
export default () => (
  <>

    <div className="container grid w-full max-w-7xl px-4 text-offwhite-900 bg-ocean-900">
      <div className="py-6 grid">
        <h1 className="text-6xl font-paytoneOne uppercase">Cleaning the ocean, rivers and lakes</h1>
        <p className="font-openSans md:max-w-[70rem]">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
      </div>
      <div className="grid">
        <h3 className="text-2xl font-paytoneOne">Join our mission</h3>
        <p>
          <Link to="/register">
            <button className='bg-coral-500 hover:bg-coral-900 text-darkgrey-900 py-3 w-[15rem] my-2 rounded font-OpenSans font-bold'>
              Register
            </button>
          </Link>
        </p>
        <p>Already have an account? <Link className="text-coral-500 hover:text-coral-900" to="/login">Log In</Link>.</p>
      </div>
      <div className="grid py-6">
        <h3 className="text-2xl font-paytoneOne">What we do</h3>
        <p className="font-openSans md:max-w-[70rem]">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
      </div>
      <div className="grid py-6">
        <h3 className="text-2xl font-paytoneOne">Why we do it</h3>
        <p className="font-openSans md:max-w-[70rem]">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 md:space-x-6 py-6 content-center">
        <div className="items-center"><h4 className="text-2xl font-paytoneOne text-center bg-highlight-900 text-darkgrey-900 h-[10rem] p-4 mb-4 rounded">Every day approximately 8 million pieces of plastic pollution find their way into our oceans.</h4></div>
        <div className="items-center"><h4 className="text-2xl font-paytoneOne text-center bg-highlight-900 text-darkgrey-900 h-[10rem] p-4 mb-4 rounded">Animals Mistake Plastic Waste for Prey.</h4></div>
        <div className="items-center"><h4 className="text-2xl font-paytoneOne text-center bg-highlight-900 text-darkgrey-900 h-[10rem] p-4 mb-4 rounded">50% of Plastics Produced are Designed to be Single-Use.</h4></div>
      </div>
      <div className="grid py-6">
        <Link to="/register">
          <button className='bg-coral-500 hover:bg-coral-900 text-darkgrey-900 py-3 w-[15rem] my-2 rounded font-OpenSans font-bold'>
            Register
          </button>
        </Link>
        <p>Already have an account? <Link className="text-coral-500 hover:text-coral-900" to="/login">Log In</Link>.</p>
      </div>
    </div>
  </>
);
