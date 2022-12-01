import { Link } from "react-router-dom";
export default () => (
  <>
    <div className="grid w-full text-offwhite-900">
      <div className="container max-w-7xl px-4">
        <div className="py-6 leading-relaxed">
          <h1 className="xs:text-6xl md:text-8xl font-paytoneOne uppercase pb-6">
            Cleaning the ocean, rivers and lakes
          </h1>
          <p className="md:max-w-[70rem] text-lg font-openSans">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </p>
        </div>
      </div>
      <div className="grid text-center bg-ocean-800 py-12">
        <h2 className="text-4xl font-paytoneOne pb-2">Join our mission</h2>
        <p>
          <Link to="/register">
            <button className='bg-coral-500 hover:bg-coral-900 text-darkgrey-900 w-[16rem] py-4 my-2 rounded font-OpenSans font-bold'>
              Register
            </button>
          </Link>
        </p>
        <p className="text-grey-500">
          Already have an account?&nbsp;
          <Link className="text-coral-500 hover:text-coral-900" to="/login">
            Log In here
          </Link>.
        </p>
      </div>
      <div className="container max-w-7xl px-4">
        <div className="grid py-6">
          <h2 className="text-4xl pb-4 font-paytoneOne">
            What we do
          </h2>
          <p className="font-openSans text-xl md:max-w-[70rem]">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </p>
        </div>
      </div>
      <div className="container max-w-7xl px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="items-center">
            <img src="src/assets/what_nurdles.jpg" alt="Nurdles on a beach" />
            <p className="font-openSans text-center p-6 mb-4">
              Nurdles and microplastic
            </p>
          </div>
          <div className="items-center">
            <img src="src/assets/what_litter_1.jpg" alt="Random litter on a beach" />
            <p className="font-openSans text-center p-6 mb-4">
              Anyone needs a hoodie?
            </p>
          </div>
          <div className="items-center">
            <img src="src/assets/what_litter_2.jpg" alt="Plastic sucker sticks, fork and knife on a beach" />
            <p className="font-openSans text-center p-6 mb-4">
              A different kind of lunch break
            </p>
          </div>
          <div className="items-center">
            <img src="src/assets/what_litter_3.jpg" alt="A bucket full of litter" />
            <p className="font-openSans text-center p-6 mb-4">
              Keep going … there is more.
            </p>
          </div>
        </div>
        <div className="grid py-6">
          <h2 className="text-4xl pb-4 font-paytoneOne">
            Why we do it
          </h2>
          <p className="font-openSans text-xl md:max-w-[70rem]">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 md:space-x-6 py-6 content-center">
          <div className="items-center">
            <h4 className="text-2xl font-paytoneOne text-center bg-highlight-900 text-darkgrey-900 h-[12rem] p-6 mb-4 rounded">
              Every day approximately 8 million pieces of plastic pollution find their way into our oceans.
            </h4>
          </div>
          <div className="items-center">
            <h4 className="text-2xl font-paytoneOne text-center bg-highlight-900 text-darkgrey-900 h-[12rem] p-6 mb-4 rounded">
              Animals Mistake Plastic Waste for Prey.
            </h4>
          </div>
          <div className="items-center">
            <h4 className="text-2xl font-paytoneOne text-center bg-highlight-900 text-darkgrey-900 h-[12rem] p-6 mb-4 rounded">
              50% of Plastics Produced are Designed to be Single-Use.
            </h4>
          </div>
        </div>
        <div className="grid text-center py-12">
          <p>
            <Link to="/register">
              <button className='bg-coral-500 hover:bg-coral-900 text-darkgrey-900 w-[16rem] py-4 my-2 rounded font-OpenSans font-bold'>
                Register
              </button>
            </Link>
          </p>
          <p className="text-grey-500">
            Already have an account?&nbsp;
            <Link className="text-coral-500 hover:text-coral-900" to="/login">
              Log In here
            </Link>.
          </p>
        </div>
      </div>
    </div>
  </>
);
