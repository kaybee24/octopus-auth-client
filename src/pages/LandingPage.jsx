import { Link } from "react-router-dom";

export default function Landingpage () {
  return (
  <>
    <div className="grid w-full text-offwhite-900">
      <div className="container max-w-7xl px-4">
        <div className="py-t leading-relaxed">
          <h1 className="text-4xl md:text-8xl font-paytoneOne uppercase pb-6">
            Cleaning the ocean, rivers and lakes
          </h1>
          <h2 className="font-paytoneOne text-4xl pb-2">
            Around 380 million tons of plastic are being produced yearly.
          </h2>
          <p className="leading-relaxed text-xl">9% will be recycled
            <br />12 % are burnt
            <br />79 % (in words: seventy-nine percent) end up in nature
          </p>
        </div>
      </div>
      <div className="flex justify-end pb-3">
        <img src="images/octopus_arm_01.png" className="w-[50%] md:w-[30%]" />
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
          <h2 className="text-4xl pb-4 pt-10 font-paytoneOne">
            What we do
          </h2>
          <p className="font-openSans text-xl md:max-w-[70rem]">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </p>
        </div>
      </div>
      <div className="container max-w-7xl px-4">
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
            <h4 className="text-2xl font-paytoneOne text-center bg-highlight-900 text-darkgrey-900 py-[3rem] px-4 mb-4 rounded">
              Every day roughly 8 million pieces of plastic find their way into our oceans.
            </h4>
          </div>
          <div className="items-center">
            <h4 className="text-2xl font-paytoneOne text-center bg-highlight-900 text-darkgrey-900 py-[4rem] px-4 mb-4 rounded">
              Animals Mistake Plastic Waste for Prey.
            </h4>
          </div>
          <div className="items-center">
            <h4 className="text-2xl font-paytoneOne text-center bg-highlight-900 text-darkgrey-900 py-[4rem] px-4 mb-4 rounded">
              50% of Plastics Produced are Designed to be Single-Use.
            </h4>
          </div>
        </div>
        <div className="grid text-center pt-12">
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
      <div className="flex justify-start">
        <img src="images/octopus_arm_02.png" className="w-[50%] md:w-[30%]" />
      </div>
    </div>
  </>
);
}
