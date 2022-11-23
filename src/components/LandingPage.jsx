import { Link } from "react-router-dom";
export default () => (
  <>
    <div className="w-full px-4 text-darkgrey-900">
      <h1 className="text-4xl font-paytoneOne uppercase">Lorem ipsum Est dolor atriurm</h1>
      <p className="font-openSans">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
      <p>
        <Link to="/register"><button className='bg-coral-500 hover:bg-coral-900 py-3 w-[12rem] my-2 rounded font-OpenSans'>Register</button></Link>
      </p>
      <p>Already have an account? <Link className="text-coral-500 hover:text-coral-900" to="/register">Sign In</Link>.</p>
    </div>
    <div className="py-6">
      <h2 className="text-2xl font-paytoneOne">What we do</h2>
      <p className="font-openSans">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
    </div>
    <div className="py-6">
      <h2 className="text-2xl font-paytoneOne">Why we do it</h2>
      <p className="font-openSans">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
    </div>
  </>
);
