import { Link } from "react-router-dom";
export default () => (
  <>
    <div className="w-full px-4 text-darkgrey-900">
      <div className="py-6">
        <h1 className="text-6xl font-paytoneOne uppercase">Cleaning the ocean, rivers and lakes</h1>
        <p className="font-openSans">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
      </div>
      <div>
        <h3 className="text-2xl font-paytoneOne">Join our mission</h3>
        <p>
          <Link to="/register"><button className='bg-coral-500 hover:bg-coral-900 py-3 w-[12rem] my-2 rounded font-OpenSans'>Register</button></Link>
        </p>
        <p>Already have an account? <Link className="text-coral-500 hover:text-coral-900" to="/login">Log In</Link>.</p>
      </div>
      <div className="py-6">
        <h3 className="text-2xl font-paytoneOne">What we do</h3>
        <p className="font-openSans">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
      </div>
      <div className="py-6">
        <h3 className="text-2xl font-paytoneOne">Why we do it</h3>
        <p className="font-openSans">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
      </div>
      <div className="py-6 space-y-6">
        <h4 className="text-2xl font-paytoneOne text-center bg-ocean-700 text-offwhite-500 min-h-[8rem] rounded">Every day approximately 8 million pieces of plastic pollution find their way into our oceans.</h4>
        <h4 className="text-2xl font-paytoneOne text-center bg-ocean-700 text-offwhite-500 min-h-[8rem] rounded">Animals Mistake Plastic Waste for Prey.</h4>
        <h4 className="text-2xl font-paytoneOne text-center bg-ocean-700 text-offwhite-500 min-h-[8rem] rounded">50% of Plastics Produced are Designed to be Single-Use.</h4>
      </div>
      <div>
        <p>
          <Link to="/register"><button className='bg-coral-500 hover:bg-coral-900 py-3 w-[12rem] my-2 rounded font-OpenSans'>Register</button></Link>
        </p>
        <p>Already have an account? <Link className="text-coral-500 hover:text-coral-900" to="/login">Log In</Link>.</p>
      </div>
    </div>
  </>
);
